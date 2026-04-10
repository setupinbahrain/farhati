"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send } from 'lucide-react';

export default function AIConcierge({ locale = 'en' }: { locale?: string }) {
  const isArabic = locale === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{id: string, role: string, content: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!input) return;

    const userMsg = input;
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
        setIsLoading(false);
        const botResponse = isArabic 
          ? `أتفهم ذلك تماماً. إذا كنت بحاجة إلى شيء يحمل طابعاً عاطفياً لـ "${userMsg}"، أوصي بشدة بـ "صندوق ورود منتصف الليل لذكرى الزواج". إنه متوفر حالياً في مستودعاتنا بالبحرين. هل تريدني أن أقوم بتجهيز طلب سريع مع بطاقة اعتذار مخصصة عبر مستودع الرفاع؟`
          : `I completely understand. If you need something emotional for "${userMsg}", I highly recommend the "Midnight Rose Anniversary Box." It is currently in stock locally. Should I prepare an expedited order with a custom apology card via our Riffa warehouse?`;
        setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'bot', content: botResponse }]);
    }, 1500);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-trust hover:bg-[#b08d24] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 z-40 group"
      >
        <Sparkles size={28} className="animate-pulse" />
        <span className={`max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap p-0 ${isArabic ? 'group-hover:pr-2' : 'group-hover:pl-2'} font-bold`}>
           {isArabic ? "المساعد الذكي" : "AI Concierge"}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className={`bg-primary text-white p-4 flex justify-between items-center shrink-0 ${isArabic ? 'flex-row-reverse' : ''}`}>
               <div className="flex items-center gap-2">
                  <Sparkles size={20} className="text-trust" />
                  <span className="font-heading font-bold text-xl">{isArabic ? "مساعد فرحتي الذكي" : "Farhati AI Concierge"}</span>
               </div>
               <button onClick={() => setIsOpen(false)} className="hover:text-trust transition-colors">
                  <X size={24} />
               </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 flex flex-col">
                {messages.length === 0 && (
                  <div className="m-auto text-center p-6 bg-white rounded-xl shadow-sm border text-gray-500 whitespace-pre-wrap">
                     <span className="font-bold text-primary block mb-2">{isArabic ? "كيف يمكنني مساعدتك اليوم؟" : "How can I assist you today?"}</span>
                     {isArabic ? "صِف المناسبة أو المشاعر وسأقوم بتجهيز الهدية المثالية." : "Describe the emotion, the occasion, or the mistake you need to fix. I will engineer the perfect gift."}
                  </div>
               )}
               
               {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                     <div className={`max-w-[80%] rounded-2xl p-3 shadow-sm ${m.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white border rounded-tl-none text-gray-800'}`}>
                        {m.content}
                     </div>
                  </div>
               ))}
                {isLoading && (
                  <div className={`flex ${isArabic ? 'justify-end' : 'justify-start'}`}>
                     <div className={`bg-white border rounded-2xl p-3 shadow-sm text-gray-400 animate-pulse ${isArabic ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
                        {isArabic ? "يتم تحليل المعطيات..." : "Analyzing emotional intent..."}
                     </div>
                  </div>
               )}
            </div>

             {/* Input Area */}
            <form onSubmit={handleSubmit} className={`p-4 bg-white border-t flex gap-2 shrink-0 ${isArabic ? 'flex-row-reverse' : ''}`}>
               <input
                 className={`flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-primary text-sm black-text text-gray-800 ${isArabic ? 'text-right' : 'text-left'}`}
                 value={input}
                 placeholder={isArabic ? "اكتب حالتك هنا..." : "Type your emergency here..."}
                 onChange={(e) => setInput(e.target.value)}
               />
               <button type="submit" disabled={isLoading || !input} className={`bg-trust text-white p-2 text-sm rounded-full disabled:opacity-50 hover:bg-[#b08d24] transition-colors ${isArabic ? 'rotate-180' : ''}`}>
                  <Send size={20} />
               </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
