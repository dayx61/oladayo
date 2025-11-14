import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader, Sparkles } from 'lucide-react';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
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
        message: input,
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
      let errorContent = 'Sorry, I encountered an error. Please try again.';
      
      if (error.response?.data?.details) {
        errorContent = error.response.data.details;
      } else if (error.code === 'ECONNABORTED') {
        errorContent = 'Request timeout. The AI service took too long to respond. Please try again.';
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
              <h3 className="text-lg font-bold text-white">AI Assistant</h3>
              <p className="text-xs text-gray-400">Powered by OpenRouter</p>
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
