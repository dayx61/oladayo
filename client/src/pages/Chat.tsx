import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader, Sparkles, Copy, RefreshCw } from 'lucide-react';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
  source?: string;
  model?: string;
  provider?: string;
  metadata?: {
    category?: string;
    runtime?: {
      generation_time?: number;
      latency?: number;
      tokens_per_second?: number;
    };
    tokens?: {
      prompt?: number;
      completion?: number;
      total?: number;
    };
  };
}

const SUGGESTED_QUESTIONS = [
  'Tell me about the developer\'s IT experience',
  'What are the key skills and expertise?',
  'What outcomes has he delivered?',
  'Explain IT Service Management',
  'What certifications are highlighted?',
  'How can I get in touch?'
];

const PORTFOLIO_FALLBACK = `Oladayo is an IT leader with 7+ years across six organizations, focused on secure, reliable operations.

- Strengths: zero-trust security, automation, incident response, and SLA-driven support
- Impact: 96% user satisfaction, 0 major incidents in 18 months, 45% faster ticket-to-fix via automation
- Platforms: cloud + on-prem modernization, ITSM, and enterprise support for 800+ users
- Leadership: builds and mentors teams, aligns IT KPIs to business outcomes
- Contact: alabioladayoibrahim@hotmail.com • +1 267-957-4048 • LinkedIn: /in/olaalabi53`;

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '✨ Hi! I\'m Oladayo\'s AI Assistant (OpenRouter). Ask anything about his IT expertise, experience, skills, or general questions. If the live AI is offline, I\'ll still share a quick profile snapshot for you.',
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getApiBase = () => {
    const env = (typeof import.meta !== 'undefined' ? (import.meta as any).env : {}) || {};
    const explicit = env.VITE_API_URL;
    if (explicit) return explicit;

    const isBrowser = typeof window !== 'undefined';
    const isLocal = isBrowser && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

    if (isLocal) {
      const port = env.VITE_API_PORT || '5002';
      return `http://localhost:${port}/api`;
    }

    return isBrowser ? '/api' : '';
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check API health on mount to surface connectivity issues early
  useEffect(() => {
    const apiBase = getApiBase();
    if (!apiBase) {
      setApiStatus('offline');
      return;
    }
    axios
      .get(`${apiBase}/health`, { timeout: 5000 })
      .then(() => setApiStatus('online'))
      .catch(() => setApiStatus('offline'));
  }, []);

  const handleSendMessage = async (e: React.FormEvent, messageText?: string) => {
    e.preventDefault();
    const textToSend = messageText || input;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: textToSend,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Determine API URL based on environment and fall back to same-origin /api in prod
      const apiBase = getApiBase();
      if (!apiBase) {
        throw new Error('API base URL is not configured');
      }

      const response = await axios.post(`${apiBase}/chat`, {
        message: textToSend,
        conversationHistory: messages.map(m => ({ role: m.role, content: m.content })),
        category: 'general'
      }, {
        timeout: 30000
      });

      // Handle both successful AI responses and smart fallback responses
      if (response.data.fallback) {
        // Smart fallback response - treat as normal success
        const fallbackMessage: Message = {
          role: 'assistant',
          content: response.data.message,
          timestamp: new Date().toISOString(),
          source: response.data.source || 'Smart Portfolio Assistant',
          model: response.data.source || 'Smart Portfolio Assistant',
          provider: 'Portfolio Intelligence',
          metadata: response.data.metadata
        };
        setMessages(prev => [...prev, fallbackMessage]);
      } else {
        // Normal AI response
        const assistantMessage: Message = {
          role: 'assistant',
          content: response.data.message,
          timestamp: new Date().toISOString(),
          source: response.data.source,
          model: response.data.model,
          provider: response.data.provider,
          metadata: response.data.metadata
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
      setApiStatus('online');
    } catch (error: any) {
      console.error('Chat error:', error);
      console.error('Error response data:', error.response?.data);
      console.error('Error status:', error.response?.status);

      // Check if this is a fallback response from the server (e.g., credits exhausted but still providing data)
      if (error.response?.data?.fallback && error.response?.data?.message) {
        const fallbackMessage: Message = {
          role: 'assistant',
          content: error.response.data.message,
          timestamp: new Date().toISOString(),
          source: error.response.data.source || 'Smart Portfolio Assistant',
          model: error.response.data.source || 'Smart Portfolio Assistant',
          provider: error.response.data.provider || 'Portfolio Intelligence',
          metadata: error.response.data.metadata
        };
        setMessages(prev => [...prev, fallbackMessage]);
        setApiStatus('offline');
        return;
      }

      let errorContent = 'Sorry, I encountered an error. Please try again later.';

      // Check for server error responses with specific codes
      if (error.response?.data?.message && error.response?.data?.code) {
        // Handle credits exhausted with portfolio fallback
        if (error.response.data.code === 'CREDITS_EXHAUSTED') {
          errorContent = error.response.data.message;
        }
        // Handle rate limiting
        else if (error.response.data.code === 'RATE_LIMIT') {
          errorContent = error.response.data.details || error.response.data.error;
        }
        // Handle auth errors
        else if (error.response.data.code === 'AUTH_ERROR') {
          errorContent = error.response.data.details || 'Authentication failed. Please check API configuration.';
        }
        // Handle other backend errors
        else {
          errorContent = error.response.data.message || error.response.data.error;
        }
      }
      // Fallback to original error handling
      else if (error.response?.data?.details) {
        errorContent = error.response.data.details;
      } else if (error.response?.data?.error) {
        errorContent = error.response.data.error;
      } else if (error.response?.data?.message) {
        errorContent = error.response.data.message;
      } else if (error.response?.status === 401) {
        errorContent = 'Authentication failed. Please check the API configuration.';
      } else if (error.response?.status === 429) {
        errorContent = 'Rate limited. Please wait 1-2 minutes and try again.';
      } else if (error.response?.data?.error && error.response?.status === 503) {
        errorContent = error.response.data.error; // Credits exhausted fallback
      } else if (error.code === 'ECONNABORTED') {
        errorContent = 'Request timeout. The AI service took too long to respond.';
      } else if (error.message === 'Network Error') {
        errorContent = 'Network error. Please check your connection.';
      } else if (error.response?.status === 500) {
        errorContent = 'Internal server error. Please try again later.';
      }

      const errorMessage: Message = {
        role: 'assistant',
        content: `⚠️ Connection hiccup (${errorContent}).\n\nHere's a quick profile while I reconnect:\n${PORTFOLIO_FALLBACK}`,
        timestamp: new Date().toISOString(),
        source: 'Portfolio Snapshot',
        provider: 'Offline mode'
      };
      setMessages(prev => [...prev, errorMessage]);
      setApiStatus('offline');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: '✨ Welcome! I\'m the AI Portfolio Assistant. What would you like to know?',
        timestamp: new Date().toISOString()
      }
    ]);
  };

  return (
    <div className="min-h-screen flex flex-col light:bg-light-bg light:text-light-text dark:bg-premium-darker dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <div className="border-b light:border-light-border dark:border-premium-accent/20 light:bg-white/80 dark:bg-gradient-to-r dark:from-premium-accent/5 dark:to-premium-blue/5 backdrop-blur-sm sticky top-16 z-10 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-premium-accent to-premium-blue rounded-lg">
                <Sparkles size={24} className="text-premium-darker" />
              </div>
              <div>
                <h1 className="text-3xl font-bold light:text-premium-darker dark:text-white">AI Chat</h1>
                <p className="text-sm light:text-light-text-secondary dark:text-gray-400 flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      apiStatus === 'online'
                        ? 'bg-emerald-500'
                        : apiStatus === 'checking'
                        ? 'bg-amber-400'
                        : 'bg-red-500'
                    }`}
                  ></span>
                  {apiStatus === 'online' && 'Connected to OpenRouter'}
                  {apiStatus === 'checking' && 'Checking connection...'}
                  {apiStatus === 'offline' && 'Offline — using local snapshot'}
                </p>
              </div>
            </div>
            <button
              onClick={clearChat}
              className="p-2 rounded-lg transition-colors light:text-light-text-secondary dark:text-gray-400 hover:text-premium-accent hover:bg-premium-accent/10 dark:hover:bg-premium-accent/20"
              title="Clear chat"
            >
              <RefreshCw size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-6 mb-6">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slideUp`}
            >
              <div
                className={`max-w-2xl ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-premium-accent to-premium-blue text-premium-darker'
                    : 'light:bg-light-bg-secondary light:border-light-border light:text-light-text dark:bg-premium-slate/80 dark:border-premium-accent/30 dark:text-gray-100'
                } px-6 py-4 rounded-2xl shadow-lg`}
              >
                <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{msg.content}</p>

                {/* Enhanced Metadata Display for Assistant Messages */}
                {msg.role === 'assistant' && (
                  <div className="mt-3 pt-3 border-t light:border-light-border dark:border-gray-600/30">
                    <div className="flex flex-wrap items-center gap-4 text-xs opacity-70 light:text-light-text-secondary dark:text-gray-300">
                      {msg.source && (
                        <span className="flex items-center gap-1">
                          📡 {msg.source}
                        </span>
                      )}
                      {msg.provider && (
                        <span className="flex items-center gap-1">
                          🌐 {msg.provider}
                        </span>
                      )}
                      {msg.model && (
                        <span className="flex items-center gap-1">{`🤖 ${msg.model}`}</span>
                      )}
                      {msg.metadata?.runtime?.generation_time && (
                        <span className="flex items-center gap-1">{`⚡ ${
                          Math.round((msg.metadata.runtime.generation_time / 1000) * 10) / 10
                        }s`}</span>
                      )}
                      {msg.metadata?.tokens?.total && (
                        <span className="flex items-center gap-1">{`📊 ${msg.metadata.tokens.total} tokens`}</span>
                      )}
                      {msg.metadata?.category && (
                        <span className="flex items-center gap-1">{`🏷️ ${msg.metadata.category}`}</span>
                      )}
                      <button
                        onClick={() => copyToClipboard(msg.content, idx)}
                        className="hover:opacity-100 transition-opacity flex items-center gap-1 ml-auto"
                      >
                        <Copy size={14} />
                        {copiedIdx === idx ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start animate-slideUp">
              <div className="px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg light:bg-light-bg-secondary light:border-light-border dark:bg-premium-slate/80 dark:border-premium-accent/30 transition-colors">
                <Loader size={18} className="animate-spin text-premium-accent" />
                <span className="text-sm light:text-light-text-secondary dark:text-gray-300">AI is thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && !loading && (
          <div className="mb-6">
            <p className="text-xs light:text-light-text-secondary dark:text-gray-400 mb-3 uppercase tracking-wider">Try asking:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SUGGESTED_QUESTIONS.map((question, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSendMessage(e, question);
                  }}
                  className="text-left p-3 rounded-lg border light:border-light-border dark:border-premium-accent/30 light:bg-light-bg-secondary dark:bg-premium-slate/40 hover:border-premium-accent/60 light:hover:bg-light-bg dark:hover:bg-premium-slate/60 light:text-light-text dark:text-gray-300 hover:text-white transition-all text-sm"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t light:border-light-border dark:border-premium-accent/20 pt-6 transition-colors">
          <form onSubmit={handleSendMessage} className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about the developer or any topic..."
              disabled={loading}
              className="flex-1 light:bg-light-bg-secondary dark:bg-premium-slate/60 light:border-light-border dark:border-premium-accent/30 rounded-xl px-5 py-4 light:text-light-text dark:text-white placeholder-gray-500 focus:outline-none focus:border-premium-accent focus:ring-2 focus:ring-premium-accent/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-4 bg-gradient-to-r from-premium-accent to-premium-blue rounded-xl text-premium-darker hover:shadow-lg hover:shadow-premium-accent/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 duration-300 font-semibold flex items-center justify-center"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </form>
          <p className="text-xs light:text-light-text-secondary dark:text-gray-500 mt-3 text-center">
            Powered by OpenRouter
          </p>
        </div>
      </div>
    </div>
  );
}
