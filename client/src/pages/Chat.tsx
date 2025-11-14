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
  'Who is the CEO of Amazon?',
  'Explain IT Service Management',
  'What certifications are highlighted?',
  'How can I get in touch?'
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '✨ Welcome! I\'m the AI Portfolio Assistant. I can answer questions about the developer\'s IT expertise, experience, skills, and more. What would you like to know?',
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      // Determine API URL based on environment
      const apiUrl = process.env.REACT_APP_API_URL || 
                     (typeof window !== 'undefined' && window.location.hostname === 'localhost' 
                       ? 'http://localhost:5001' 
                       : 'https://oladayo-portfolio-server.vercel.app');
      
      const response = await axios.post(`${apiUrl}/api/chat`, {
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
    } catch (error: any) {
      console.error('Chat error:', error);
      console.error('Error response data:', error.response?.data);
      console.error('Error status:', error.response?.status);

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
        content: `⚠️ ${errorContent}`,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
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
    <div className="min-h-screen bg-premium-darker flex flex-col">
      {/* Header */}
      <div className="border-b border-premium-accent/20 bg-gradient-to-r from-premium-accent/5 to-premium-blue/5 backdrop-blur-sm sticky top-16 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-premium-accent to-premium-blue rounded-lg">
                <Sparkles size={24} className="text-premium-darker" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">AI Chat</h1>
                <p className="text-sm text-gray-400">Powered by OpenRouter</p>
              </div>
            </div>
            <button
              onClick={clearChat}
              className="p-2 hover:bg-premium-accent/20 rounded-lg transition-colors text-gray-400 hover:text-premium-accent"
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
                    : 'bg-premium-slate/80 border border-premium-accent/30 text-gray-100'
                } px-6 py-4 rounded-2xl shadow-lg`}
              >
                <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{msg.content}</p>

                {/* Enhanced Metadata Display for Assistant Messages */}
                {msg.role === 'assistant' && (
                  <div className="mt-3 pt-3 border-t border-gray-600/30">
                    <div className="flex flex-wrap items-center gap-4 text-xs opacity-60">
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
                        <span className="flex items-center gap-1">
                          🤖 ${msg.model}
                        </span>
                      )}
                      {msg.metadata?.runtime?.generation_time && (
                        <span className="flex items-center gap-1">
                          ⚡ ${Math.round(msg.metadata.runtime.generation_time / 1000 * 10) / 10}s
                        </span>
                      )}
                      {msg.metadata?.tokens?.total && (
                        <span className="flex items-center gap-1">
                          📊 ${msg.metadata.tokens.total} tokens
                        </span>
                      )}
                      {msg.metadata?.category && (
                        <span className="flex items-center gap-1">
                          🏷️ ${msg.metadata.category}
                        </span>
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
              <div className="bg-premium-slate/80 border border-premium-accent/30 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg">
                <Loader size={18} className="animate-spin text-premium-accent" />
                <span className="text-sm text-gray-300">AI is thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && !loading && (
          <div className="mb-6">
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">Try asking:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SUGGESTED_QUESTIONS.map((question, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSendMessage(e, question);
                  }}
                  className="text-left p-3 rounded-lg border border-premium-accent/30 hover:border-premium-accent/60 bg-premium-slate/40 hover:bg-premium-slate/60 text-gray-300 hover:text-white transition-all text-sm"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-premium-accent/20 pt-6">
          <form onSubmit={handleSendMessage} className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about the developer or any topic..."
              disabled={loading}
              className="flex-1 bg-premium-slate/60 border border-premium-accent/30 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-premium-accent focus:ring-2 focus:ring-premium-accent/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
          <p className="text-xs text-gray-500 mt-3 text-center">
            Powered by OpenRouter
          </p>
        </div>
      </div>
    </div>
  );
}
