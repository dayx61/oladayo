import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader, Minimize2 } from 'lucide-react';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! 👋 I\'m Oladayo\'s AI assistant. Ask me anything about his background, experience, or skills!'
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

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('/api/chat', {
        message: input,
        conversationHistory: messages,
        category: 'general'
      });

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.data.message
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: error.response?.data?.details || 'Sorry, I encountered an error. Please try again.'
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
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-premium-accent to-premium-blue shadow-lg hover:shadow-xl hover:shadow-premium-accent/50 transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle size={24} className="text-premium-darker group-hover:scale-110 transition-transform" />
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-premium-darker text-premium-accent text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with AI
        </div>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-96 h-screen max-h-[600px] rounded-2xl bg-premium-darker border border-premium-accent/30 shadow-2xl shadow-premium-accent/20 transition-all duration-300 flex flex-col overflow-hidden ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-premium-accent/20 to-premium-blue/20 border-b border-premium-accent/30 p-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Oladayo's AI</h3>
            <p className="text-xs text-gray-400">Always here to help</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-2 hover:bg-premium-accent/20 rounded-lg transition-colors"
            >
              <Minimize2 size={18} className="text-premium-accent" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-premium-accent/20 rounded-lg transition-colors"
            >
              <X size={18} className="text-premium-accent" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        {!isMinimized && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slideUp`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-xl ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-premium-accent to-premium-blue text-premium-darker font-medium'
                        : 'bg-premium-slate border border-premium-accent/30 text-gray-100'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start animate-slideUp">
                  <div className="bg-premium-slate border border-premium-accent/30 px-4 py-3 rounded-xl flex items-center gap-2">
                    <Loader size={16} className="animate-spin text-premium-accent" />
                    <span className="text-sm text-gray-300">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-premium-accent/30 p-4 bg-premium-darker/50">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={loading}
                  className="flex-1 bg-premium-slate border border-premium-accent/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-premium-accent transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="p-2 bg-gradient-to-r from-premium-accent to-premium-blue rounded-lg text-premium-darker hover:shadow-lg hover:shadow-premium-accent/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </>
        )}
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
