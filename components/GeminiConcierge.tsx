
import React, { useState, useRef, useEffect } from 'react';
import { getConciergeResponseAsync } from '../conciergeService';
import { ChatMessage } from '../types';

const GeminiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to NEVOO. I am your concierge. How can I help you choose a look or service today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const newMessages = [...messages, { role: 'user' as const, text: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const response = await getConciergeResponseAsync(newMessages);
    setMessages([...newMessages, { role: 'model' as const, text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[150]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center rounded-full h-16 w-16 bg-accent text-background-dark shadow-xl hover:scale-110 active:scale-95 transition-all relative"
        >
          <span className="material-symbols-outlined text-3xl font-bold">chat</span>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        </button>
      ) : (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-background-dark border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          <div className="p-4 bg-primary flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">smart_toy</span>
              <span className="font-bold text-sm uppercase tracking-widest">NEVOO Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-70">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-white/5 border border-white/10 text-white/80'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-xl text-xs text-white/40 animate-pulse">
                  NEVOO is thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about a style..."
              className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary text-white"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-primary p-2 rounded-lg text-white hover:opacity-80 transition-opacity"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiConcierge;
