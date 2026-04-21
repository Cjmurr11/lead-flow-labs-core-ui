import { Reveal, Typewriter } from '../animations';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="pt-[66px] px-5 md:px-10 min-h-screen flex items-center relative overflow-hidden bg-cream">
      <div className="absolute top-[-200px] right-[-300px] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(42,102,56,0.07)_0%,transparent_65%)] pointer-events-none"></div>
      
      <div className="max-w-[1160px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_460px] gap-10 md:gap-16 items-center py-[72px] relative z-10">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-[7px] bg-g50 border border-g100 rounded-full px-[14px] py-[6px] text-[11px] font-bold text-g600 tracking-[0.07em] uppercase mb-[26px]">
              <span className="w-[7px] h-[7px] rounded-full bg-g400 pulse-anim"></span>
              For Home Service Contractors
            </div>
            <h1 className="text-[42px] md:text-[62px] font-black leading-none tracking-[-2.5px] text-ink mb-[6px]">
              Your Business.<br/>
              <span className="block text-g600 not-italic min-h-[1em]">
                <Typewriter 
                  words={['24/7 Office Manager', '24/7 Marketing Manager', '24/7 Customer Support', '24/7 Sales Machine']} 
                  delay={1800} 
                  typingSpeed={78} 
                  deletingSpeed={44} 
                />
              </span>
              Running 24/7.
            </h1>
            <p className="text-[17px] font-normal text-brand-muted leading-[1.75] max-w-[490px] my-[22px] md:mb-[32px]">
              Lead Flow Labs builds your complete automated back office — <b className="text-ink font-semibold">answering calls, booking jobs, following up on quotes,</b> collecting reviews, and getting you paid. All while you're on the tools.
            </p>
            
            <div className="flex border border-brand-border rounded-[14px] overflow-hidden bg-white shadow-[0_2px_12px_var(--shadow-custom)] mb-[32px]">
              <div className="flex-1 p-[14px_16px] border-r border-brand-border text-center">
                <span className="text-[26px] font-black text-g500 tracking-[-1px] leading-none block">74%</span>
                <span className="text-[11px] font-medium text-brand-muted2 leading-[1.4] mt-[4px] block">Hire the first contractor they reach</span>
              </div>
              <div className="flex-1 p-[14px_16px] border-r border-brand-border text-center">
                <span className="text-[26px] font-black text-g500 tracking-[-1px] leading-none block">9x</span>
                <span className="text-[11px] font-medium text-brand-muted2 leading-[1.4] mt-[4px] block">Higher close with 5-min follow-up</span>
              </div>
              <div className="flex-1 p-[14px_16px] text-center">
                <span className="text-[26px] font-black text-g500 tracking-[-1px] leading-none block">$0</span>
                <span className="text-[11px] font-medium text-brand-muted2 leading-[1.4] mt-[4px] block">Extra staff. Ever.</span>
              </div>
            </div>

            <div className="flex items-center gap-[12px] flex-wrap">
              <Link to="/book-a-demo" className="bg-g700 text-white text-[14px] font-bold px-[28px] py-[14px] rounded-full border-none cursor-pointer no-underline transition-all duration-220 inline-flex items-center gap-[8px] tracking-[-0.1px] shadow-[0_4px_20px_rgba(26,61,34,0.28)] hover:bg-g800 hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(26,61,34,0.38)]">
                Book Your Free Demo 
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <a href="#audit" className="bg-transparent text-ink2 text-[14px] font-semibold px-[24px] py-[14px] rounded-full border-[1.5px] border-brand-border2 cursor-pointer no-underline transition-all duration-200 inline-flex items-center gap-[7px] hover:border-g400 hover:text-g700 hover:bg-g50">
                Get Free Audit
              </a>
            </div>
            <p className="text-[12px] font-medium text-brand-muted2 mt-[16px]">
              No contracts &nbsp;·&nbsp; Setup under 2 weeks &nbsp;·&nbsp; Cancel anytime
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="bg-white border border-brand-border rounded-[20px] overflow-hidden shadow-[0_20px_70px_var(--shadow-custom),0_4px_16px_rgba(0,0,0,.04)]">
            <div className="bg-g800 p-[16px_20px] flex items-center justify-between">
              <div className="flex items-center gap-[9px] text-white text-[13px] font-bold tracking-[-0.1px]">
                <div className="w-[28px] h-[28px] bg-[rgba(255,255,255,0.12)] rounded-[7px] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] stroke-white fill-none stroke-2">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                Your 24/7 Office Pro
              </div>
              <div className="flex items-center gap-[5px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-full px-[10px] py-[4px] text-[11px] font-bold text-[rgba(255,255,255,0.9)]">
                <span className="pulse-anim w-[7px] h-[7px] rounded-full bg-g400"></span>Live
              </div>
            </div>
            <div className="p-[20px]">
              <div className="grid grid-cols-2 gap-[10px] mb-[14px]">
                <div className="bg-g50 border border-g100 rounded-[10px] p-[12px_14px]">
                  <div className="text-[10px] font-bold text-g600 uppercase tracking-[0.05em] mb-[3px]">Calls Answered</div>
                  <div className="text-[22px] font-black text-ink tracking-[-1px] flex items-baseline gap-[5px] leading-none">47<span className="text-[11px] font-semibold text-g400">↑ today</span></div>
                </div>
                <div className="bg-g50 border border-g100 rounded-[10px] p-[12px_14px]">
                  <div className="text-[10px] font-bold text-g600 uppercase tracking-[0.05em] mb-[3px]">Jobs Booked</div>
                  <div className="text-[22px] font-black text-ink tracking-[-1px] flex items-baseline gap-[5px] leading-none">23<span className="text-[11px] font-semibold text-g400">↑ today</span></div>
                </div>
                <div className="bg-g50 border border-g100 rounded-[10px] p-[12px_14px]">
                  <div className="text-[10px] font-bold text-g600 uppercase tracking-[0.05em] mb-[3px]">Reviews Earned</div>
                  <div className="text-[22px] font-black text-ink tracking-[-1px] flex items-baseline gap-[5px] leading-none">11<span className="text-[11px] font-semibold text-g400">↑ week</span></div>
                </div>
                <div className="bg-g50 border border-g100 rounded-[10px] p-[12px_14px]">
                  <div className="text-[10px] font-bold text-g600 uppercase tracking-[0.05em] mb-[3px]">Revenue</div>
                  <div className="text-[18px] font-black text-ink tracking-[-1px] flex items-baseline gap-[5px] leading-none">$14.2k<span className="text-[11px] font-semibold text-g400">↑</span></div>
                </div>
              </div>
              <div className="border border-brand-border rounded-[10px] overflow-hidden">
                <div className="p-[9px_13px] bg-cream border-b border-brand-border text-[10px] font-bold text-brand-muted uppercase tracking-[0.07em] flex items-center gap-[6px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-g400 pulse-anim"></span>Live Activity
                </div>
                <div className="p-[10px_13px] border-b border-brand-border flex items-center gap-[10px]">
                  <div className="w-[28px] h-[28px] rounded-[8px] flex items-center justify-center text-[13px] shrink-0 bg-[#EDF6EF]">📞</div>
                  <div className="flex-1">
                    <div className="text-[12px] font-bold text-ink leading-[1.2]">AI answered — Dave Miller</div>
                    <div className="text-[11px] text-brand-muted2 mt-[1px]">Plumbing emergency · Phoenix</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-brand-muted2">2m ago</div>
                    <div className="text-[10px] font-bold px-[8px] py-[2px] rounded-full mt-[2px] inline-block bg-g50 text-g700">Booked</div>
                  </div>
                </div>
                <div className="p-[10px_13px] border-b border-brand-border flex items-center gap-[10px]">
                  <div className="w-[28px] h-[28px] rounded-[8px] flex items-center justify-center text-[13px] shrink-0 bg-[#FDF3DC]">💳</div>
                  <div className="flex-1">
                    <div className="text-[12px] font-bold text-ink leading-[1.2]">Text-to-Pay sent — Sarah K.</div>
                    <div className="text-[11px] text-brand-muted2 mt-[1px]">Invoice $485 · Water heater</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-brand-muted2">8m ago</div>
                    <div className="text-[10px] font-bold px-[8px] py-[2px] rounded-full mt-[2px] inline-block bg-amber-l text-amber-d">Paid</div>
                  </div>
                </div>
                <div className="p-[10px_13px] flex items-center gap-[10px]">
                  <div className="w-[28px] h-[28px] rounded-[8px] flex items-center justify-center text-[13px] shrink-0 bg-[#EDF6EF]">⭐</div>
                  <div className="flex-1">
                    <div className="text-[12px] font-bold text-ink leading-[1.2]">5-star review — Tom R.</div>
                    <div className="text-[11px] text-brand-muted2 mt-[1px]">Google · "Fast and professional"</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-brand-muted2">14m ago</div>
                    <div className="text-[10px] font-bold px-[8px] py-[2px] rounded-full mt-[2px] inline-block bg-g50 text-g700">5★</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
