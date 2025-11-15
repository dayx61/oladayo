import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader, Sparkles, Wifi, WifiOff } from 'lucide-react';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
  source?: string;
}

const OFFLINE_FALLBACK = `Oladayo Alabi is an IT leader with 7+ years across six organizations, specializing in Microsoft Entra ID/Intune, cybersecurity, and IT service management. He delivers enterprise support for 800+ users with a 96% satisfaction rate and leads initiatives such as zero-trust security and large-scale Windows migrations. Connect via LinkedIn (linkedin.com/in/olaalabi53) or email dayx61@gmail.com for professional inquiries.`;

type HealthResult =
  | { status: 'online'; info?: { timestamp?: string } }
  | { status: 'offline'; reason?: string }
  | { status: 'checking'; reason?: string };

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

// Smart API Health Detection with timeout wrapper
const fetchWithTimeout = (url: string, options: RequestInit = {}, timeout = 5000): Promise<Response> => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Request timeout'));
    }, timeout);

    fetch(url, options)
      .then(response => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch(error => {
        clearTimeout(timer);
        reject(error);
      });
  });
};

const detectApiHealth = async (apiBase: string): Promise<HealthResult> => {
  if (!apiBase) {
    return { status: 'offline' as const, reason: 'Missing API base' };
  }

  try {
    const response = await fetchWithTimeout(`${apiBase}/health`, { method: 'GET' }, 5000);

    if (!response.ok) {
      if (response.status === 404) {
        return { status: 'offline' as const, reason: 'Health endpoint missing' };
      }
      return { status: 'checking' as const, reason: `Health status ${response.status}` };
    }

    const payload = await response.json().catch(() => null);
    if (payload?.status === 'ok') {
      return { status: 'online' as const, info: payload };
    }

    return { status: 'checking' as const, reason: 'Unexpected health payload' };
  } catch (error: any) {
    if (error?.message === 'Request timeout') {
      return { status: 'offline' as const, reason: 'Health timeout' };
    }
    return { status: 'offline' as const, reason: 'Network failure' };
  }
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '✨ Hi! I\'m Oladayo\'s AI Assistant. Ask me anything about his IT expertise, experience, skills, or any general questions!',
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const checkApiHealth = async () => {
      const apiBase = getApiBase();
      if (!apiBase) {
        setApiStatus('offline');
        return;
      }

      setApiStatus('checking');
      try {
        const result = await detectApiHealth(apiBase);
        setApiStatus(result.status);
      } catch (error) {
        console.warn('Health detection failed:', error);
        setApiStatus('offline');
      }
    };

    // Initial health check
    checkApiHealth();

    // Retry health check every 30 seconds
    const healthCheckInterval = setInterval(checkApiHealth, 30000);

    return () => clearInterval(healthCheckInterval);
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const textToSend = input.trim();

    const userMessage: Message = {
      role: 'user',
      content: textToSend,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const apiBase = getApiBase();
      if (!apiBase) throw new Error('API base URL is not configured');

      const response = await axios.post(`${apiBase}/chat`, {
        message: textToSend,
        conversationHistory: messages.map(m => ({ role: m.role, content: m.content })),
        category: 'general'
      }, {
        timeout: 30000
      });

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.data.message,
        timestamp: new Date().toISOString(),
        source: response.data.source || (response.data.fallback ? 'Smart Portfolio Assistant' : 'OpenRouter AI')
      };
      setMessages(prev => [...prev, assistantMessage]);
      setApiStatus('online');
    } catch (error: any) {
      console.error('Chat error:', error);
      let errorContent = 'Sorry, I encountered an error. Please try again.';
      
      if (error.response?.data?.message && error.response?.data?.code) {
        errorContent = error.response.data.message;
      } else if (error.response?.data?.details) {
        errorContent = error.response.data.details;
      } else if (error.code === 'ECONNABORTED') {
        errorContent = 'Request timeout. The AI service took too long to respond. Please try again.';
      } else if (error.message === 'Network Error') {
        errorContent = 'Network error. Please check your connection.';
      } else if (error.response?.data?.error) {
        errorContent = error.response.data.error;
      }
      
      const errorMessage: Message = {
        role: 'assistant',
        content: `⚠️ Connection hiccup (${errorContent}).\n\n${OFFLINE_FALLBACK}`,
        timestamp: new Date().toISOString(),
        source: 'Portfolio Snapshot'
      };
      setMessages(prev => [...prev, errorMessage]);
      setApiStatus('offline');
    } finally {
      setLoading(false);
    }
  };

  const getStatusDisplay = () => {
    switch (apiStatus) {
      case 'online':
        return (
          <div className="flex items-center gap-1 text-emerald-400">
            <Wifi size={12} />
            <span>AI Connected ✓</span>
          </div>
        );
      case 'checking':
        return (
          <div className="flex items-center gap-1 text-amber-300">
            <Loader size={12} className="animate-spin" />
            <span>Connecting...</span>
          </div>
        );
      case 'offline':
        return (
          <div className="flex items-center gap-1 text-red-400">
            <WifiOff size={12} />
            <span>Offline — showing snapshot</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-1 text-gray-400">
            <span>Loading...</span>
          </div>
        );
    }
  };

  const handleManualRetry = async () => {
    setApiStatus('checking');
    const apiBase = getApiBase();
    if (apiBase) {
      detectApiHealth(apiBase)
        .then(result => setApiStatus(result.status))
        .catch(() => setApiStatus('offline'));
    } else {
      setApiStatus('offline');
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-premium-accent via-premium-purple to-premium-blue shadow-lg transition-all duration-300 flex items-center justify-center group hover:scale-110 ${
          isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
      >
        <MessageCircle size={24} className="text-premium-darker group-hover:rotate-12 transition-transform duration-300" />
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-premium-darker text-premium-accent text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-premium-accent/50 shadow-lg">
          💬 Chat with AI
        </div>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-screen max-h-[600px] rounded-2xl bg-premium-darker border border-premium-accent/40 shadow-2xl shadow-premium-accent/30 transition-all duration-300 flex flex-col overflow-hidden ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-premium-accent/25 via-premium-purple/15 to-premium-blue/20 border-b border-premium-accent/40 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-premium-accent/20 rounded-lg">
              <Sparkles size={18} className="text-premium-accent" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Ola's AI Assistant</h3>
              <div className="text-[11px] text-gray-400">
                {getStatusDisplay()}
              </div>
              {apiStatus === 'offline' && (
                <button
                  onClick={handleManualRetry}
                  className="text-[10px] text-premium-accent hover:text-premium-accent-2 underline mt-1"
                >
                  🔄 Retry Connection
                </button>
              )}
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-premium-accent/20 rounded-lg transition-colors text-premium-accent hover:text-premium-accent-2"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-premium-darker/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slideUp`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-premium-accent to-premium-blue text-premium-darker font-medium shadow-lg shadow-premium-accent/20'
                    : 'bg-premium-slate/80 border border-premium-accent/30 text-gray-100 shadow-lg shadow-premium-slate/20'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start animate-slideUp">
              <div className="bg-premium-slate/80 border border-premium-accent/30 px-4 py-3 rounded-2xl flex items-center gap-2 shadow-lg shadow-premium-slate/20">
                <Loader size={16} className="animate-spin text-premium-accent" />
                <span className="text-sm text-gray-300">AI is thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-premium-accent/30 p-4 bg-premium-darker">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              disabled={loading}
              className="flex-1 bg-premium-slate/60 border border-premium-accent/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-premium-accent focus:ring-2 focus:ring-premium-accent/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-3 bg-gradient-to-r from-premium-accent to-premium-blue rounded-xl text-premium-darker hover:shadow-lg hover:shadow-premium-accent/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 duration-300 font-semibold flex items-center justify-center"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Overlay when chat is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
