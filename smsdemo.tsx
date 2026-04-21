import { useState, useEffect, useRef } from 'react';
import { Reveal } from '../animations';

type Message = {
  id: string;
  type: 'in' | 'out' | 'typing' | 'emojis' | 'button';
  text?: string;
  autoType?: string;
};

const stageScripts = [
  async (addMsg: (m: Message, d: number) => Promise<void>, clearTyping: () => void, setEmojis: (v: boolean) => void) => {
    await addMsg({ id: '1', type: 'out', text: "Hi Sarah! 👋 Confirming your appointment with Phoenix Plumbing tomorrow, Thursday at 2:00 PM.\n\nReply YES to confirm." }, 0);
    await addMsg({ id: 't1', type: 'typing' }, 1400);
    clearTyping();
    await addMsg({ id: '2', type: 'in', text: "YES 👍 See you then!" }, 200);
    await addMsg({ id: 't2', type: 'typing' }, 1200);
    clearTyping();
    await addMsg({ id: '3', type: 'out', text: "Perfect! ✅ Jake will be your tech. He'll text you 30 min before. See you tomorrow!" }, 200);
  },
  async (addMsg: (m: Message, d: number) => Promise<void>, clearTyping: () => void, setEmojis: (v: boolean) => void) => {
    await addMsg({ id: '1', type: 'out', text: "Hi Sarah! Jake here from Phoenix Plumbing — we just finished up.\n\nHow did we do today? 👇" }, 0);
    await addMsg({ id: 't1', type: 'typing' }, 1200);
    clearTyping();
    setEmojis(true);
  },
  async (addMsg: (m: Message, d: number) => Promise<void>, clearTyping: () => void, setEmojis: (v: boolean) => void) => {
    await addMsg({ id: '1', type: 'out', text: "Hi Sarah! How did we do today? 👇" }, 0);
    await addMsg({ id: 't1', type: 'typing' }, 800);
    clearTyping();
    setEmojis(true);
    // Simulate auto click happy
    setTimeout(() => {
      document.getElementById('em-happy')?.click();
    }, 1000);
  },
  async (addMsg: (m: Message, d: number) => Promise<void>, clearTyping: () => void, setEmojis: (v: boolean) => void) => {
    await addMsg({ id: '1', type: 'out', text: "Hi Sarah! How did we do today? 👇" }, 0);
    await addMsg({ id: 't1', type: 'typing' }, 800);
    clearTyping();
    setEmojis(true);
    // Simulate auto click sad
    setTimeout(() => {
      document.getElementById('em-sad')?.click();
    }, 1000);
  }
];

export const SmsDemo = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showEmojis, setShowEmojis] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const sequenceRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, showEmojis]);

  useEffect(() => {
    const seq = ++sequenceRef.current;
    setMessages([]);
    setShowEmojis(false);
    setSelectedEmoji(null);

    const addMsg = (msg: Message, delay: number): Promise<void> => {
      return new Promise(resolve => {
        setTimeout(() => {
          if (sequenceRef.current === seq) {
            setMessages(prev => [...prev, msg]);
            resolve();
          }
        }, delay);
      });
    };

    const clearTyping = () => {
      if (sequenceRef.current === seq) {
        setMessages(prev => prev.filter(m => m.type !== 'typing'));
      }
    };

    stageScripts[activeStage](addMsg, clearTyping, (v) => {
      if (sequenceRef.current === seq) setShowEmojis(v);
    });

  }, [activeStage]);

  const handleEmojiClick = async (type: string) => {
    if (selectedEmoji) return;
    setSelectedEmoji(type);
    
    const seq = sequenceRef.current;
    const addMsg = (msg: Message, delay: number): Promise<void> => {
      return new Promise(resolve => {
        setTimeout(() => {
          if (sequenceRef.current === seq) {
            setMessages(prev => [...prev, msg]);
            resolve();
          }
        }, delay);
      });
    };
    const clearTyping = () => {
      if (sequenceRef.current === seq) {
        setMessages(prev => prev.filter(m => m.type !== 'typing'));
      }
    };

    await addMsg({ id: 't-em', type: 'typing' }, 300);
    clearTyping();

    if (type === 'sad') {
      await addMsg({ id: 'r1', type: 'out', text: "We're really sorry to hear that. Our owner will call you personally within the hour to make this right. 🙏" }, 0);
      await addMsg({ id: 't-em2', type: 'typing' }, 1500);
      clearTyping();
      await addMsg({ id: 'r2', type: 'in', text: "I appreciate that, thank you." }, 0);
    } else {
      await addMsg({ id: 'r1', type: 'out', text: "That's amazing, thank you! 🙏\n\nWould you mind leaving us a quick Google review?" }, 0);
      await addMsg({ id: 'btn', type: 'button' }, 1200);
      await addMsg({ id: 't-em2', type: 'typing' }, 1000);
      clearTyping();
      await addMsg({ id: 'r2', type: 'in', text: "Done! You guys were great ⭐⭐⭐⭐⭐" }, 0);
    }
  };

  const stages = [
    { icon: '📅', title: 'Appointment Reminder', desc: 'Auto-sent on booking. Reduces no-shows by 67%.' },
    { icon: '🔧', title: 'Job Complete Check-In', desc: 'Fires the moment the job is marked done.' },
    { icon: '⭐', title: 'Review Request — Happy Path', desc: 'One tap to Google. Your best marketing asset.' },
    { icon: '🤝', title: 'Service Recovery — Sad Path', desc: 'Problems handled privately before going public.' },
  ];

  return (
    <section className="bg-cream py-24 px-5" id="sms">
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 md:gap-20 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold text-g600 tracking-[0.1em] uppercase mb-[14px]">
              <span className="w-5 h-[2.5px] bg-g400 rounded-sm"></span>See it in action
            </div>
            <h2 className="text-[34px] md:text-[46px] font-black tracking-[-2px] text-ink leading-[1.05] mb-[14px]">
              Every customer touchpoint.<br/><b className="text-g600 font-black">Completely automated.</b>
            </h2>
            <p className="text-[17px] font-normal text-brand-muted leading-[1.75] max-w-[540px]">
              From booking confirmation to 5-star review — your customers experience world-class service. You experience zero extra work.
            </p>
          </Reveal>
          
          <Reveal delay={100} className="flex flex-col gap-2 mt-11">
            {stages.map((stg, i) => (
              <button 
                key={i}
                onClick={() => setActiveStage(i)}
                className={`flex items-start gap-3 p-4 md:p-[16px_18px] rounded-xl border-[1.5px] text-left transition-all duration-220 ${activeStage === i ? 'border-g500 bg-g50' : 'border-brand-border bg-white hover:border-brand-border2 hover:bg-cream2'}`}
              >
                <div className={`w-[34px] h-[34px] rounded-lg flex items-center justify-center text-base shrink-0 ${activeStage === i ? 'bg-g100' : 'bg-cream2'}`}>
                  {stg.icon}
                </div>
                <div>
                  <div className={`text-[13px] font-extrabold tracking-[-0.2px] mb-0.5 ${activeStage === i ? 'text-g700' : 'text-ink'}`}>
                    {stg.title}
                  </div>
                  <div className="text-[12px] text-brand-muted font-normal">
                    {stg.desc}
                  </div>
                </div>
              </button>
            ))}
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="w-[260px] bg-[#111] rounded-[46px] p-[11px] shadow-[0_0_0_1.5px_#222,0_0_0_3px_#111,0_32px_80px_rgba(0,0,0,0.28)] mx-auto">
            <div className="bg-white rounded-[36px] overflow-hidden min-h-[500px] flex flex-col">
              <div className="bg-[#111] w-[84px] h-[23px] rounded-b-[14px] mx-auto"></div>
              <div className="flex justify-between px-[18px] pt-[7px] pb-[3px] text-[10px] font-bold text-ink">
                <span>9:41</span><span>▮▮▮ 🔋</span>
              </div>
              <div className="px-[14px] py-[9px] border-b border-[#F0F0F0] flex items-center gap-[9px]">
                <div className="w-8 h-8 bg-g600 rounded-full flex items-center justify-center text-[12px] shrink-0">🔧</div>
                <div>
                  <div className="text-[12px] font-extrabold text-ink tracking-[-0.2px]">Phoenix Plumbing</div>
                  <div className="text-[10px] text-g500 font-medium">● Delivered</div>
                </div>
              </div>
              
              <div ref={scrollRef} className="flex-1 p-[12px_10px] flex flex-col gap-[7px] bg-[#F5F7F5] overflow-y-auto overflow-x-hidden">
                {messages.map((m, i) => {
                  if (m.type === 'typing') {
                    return (
                      <div key={i} className="flex gap-[3px] items-center p-[8px_12px] bg-white border border-[#E5E7EB] rounded-[14px] rounded-bl-[3px] w-[46px]">
                        <div className="w-[5px] h-[5px] rounded-full bg-[#94A3B8] typing-dot"></div>
                        <div className="w-[5px] h-[5px] rounded-full bg-[#94A3B8] typing-dot"></div>
                        <div className="w-[5px] h-[5px] rounded-full bg-[#94A3B8] typing-dot"></div>
                      </div>
                    );
                  }
                  if (m.type === 'button') {
                    return (
                      <button key={i} className="bg-g600 text-white border-none rounded-[10px] p-[8px_12px] text-[11px] font-extrabold cursor-pointer w-full mt-[3px] font-sans tracking-[-0.1px] pop-in">
                        ⭐ Leave a Google Review
                      </button>
                    );
                  }
                  return (
                    <div key={i} className={`max-w-[84%] rounded-[14px] p-[8px_12px] text-[11px] leading-[1.5] pop-in whitespace-pre-line ${m.type === 'out' ? 'bg-g600 text-white self-start rounded-bl-[3px]' : 'bg-white text-ink border border-[#E5E7EB] self-end rounded-br-[3px]'}`}>
                      {m.text}
                    </div>
                  );
                })}
                
                {showEmojis && (
                  <div className="bg-white border border-[#E5E7EB] rounded-[14px] p-[10px] self-start max-w-[90%] pop-in">
                    <div className="text-[10px] text-brand-muted text-center mb-[7px] font-medium">Tap to let us know!</div>
                    <div className="flex gap-[12px] justify-center">
                      <button id="em-sad" onClick={() => handleEmojiClick('sad')} className={`text-[24px] cursor-pointer transition-transform duration-180 rounded-full p-[2px] ${selectedEmoji === 'sad' ? 'scale-120 outline-[2.5px] outline-solid outline-g500' : 'hover:scale-120'}`}>😞</button>
                      <button id="em-neutral" onClick={() => handleEmojiClick('neutral')} className={`text-[24px] cursor-pointer transition-transform duration-180 rounded-full p-[2px] ${selectedEmoji === 'neutral' ? 'scale-120 outline-[2.5px] outline-solid outline-g500' : 'hover:scale-120'}`}>😐</button>
                      <button id="em-happy" onClick={() => handleEmojiClick('happy')} className={`text-[24px] cursor-pointer transition-transform duration-180 rounded-full p-[2px] ${selectedEmoji === 'happy' ? 'scale-120 outline-[2.5px] outline-solid outline-g500' : 'hover:scale-120'}`}>😊</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="text-center text-[11px] text-brand-muted2 mt-[14px] font-medium">Tap the emoji faces to see both paths</p>
        </Reveal>
      </div>
    </section>
  );
};
