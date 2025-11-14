import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader, Sparkles, Copy, RefreshCw } from 'lucide-react';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

const SUGGESTED_QUESTIONS = [
  'Tell me about Oladayo\'s IT experience',
  'What are Oladayo\'s key skills?',
  'Who is the CEO of Amazon?',
  'Explain IT Service Management',
  'What certifications does Oladayo have?',
  'How can I contact Oladayo?'
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '✨ Welcome! I\'m Oladayo\'s AI Assistant powered by Claude 3.5. I can answer questions about his IT expertise, experience, skills, and more. What would you like to know?',
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
      const response = await axios.post('/api/chat', {
        message: textToSend,
        conversationHistory: messages.map(m => ({ role: m.role, content: m.content })),
        category: 'general'
      }, {
        timeout: 30000
      });

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.data.message,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Chat error:', error);
      
      let errorContent = 'Sorry, I encountered an error. Please try again later.';
      
      if (error.response?.data?.details) {
        errorContent = error.response.data.details;
      } else if (error.response?.status === 401) {
        errorContent = 'Authentication failed. Please check the API configuration.';
      } else if (error.response?.status === 429) {
        errorContent = 'Rate limited. Please wait a moment and try again.';
      } else if (error.code === 'ECONNABORTED') {
        errorContent = 'Request timeout. The AI service took too long to respond.';
      } else if (error.message === 'Network Error') {
        errorContent = 'Network error. Please check your connection.';
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
        content: '✨ Welcome! I\'m Oladayo\'s AI Assistant. What would you like to know?',
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
                {msg.role === 'assistant' && (
                  <button
                    onClick={() => copyToClipboard(msg.content, idx)}
                    className="mt-3 text-xs opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1"
                  >
                    <Copy size={14} />
                    {copiedIdx === idx ? 'Copied!' : 'Copy'}
                  </button>
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
              placeholder="Ask anything about Oladayo or any topic..."
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
