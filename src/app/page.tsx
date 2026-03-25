"use client";

import React, { ReactNode } from "react";
import WaitlistForm from "@/components/WaitlistForm";

// --- REUSABLE COMPONENTS ---

const Arrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: ReactNode;
};

const Button = ({ variant = "primary", children, className = "", ...props }: ButtonProps) => {
  const base = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium transition-all duration-300 ease-out outline-none select-none active:scale-[0.98]";
  const variants = {
    primary: "bg-primary text-paper hover:bg-primary/90 border border-primary",
    secondary: "bg-transparent text-primary hover:bg-primary hover:text-paper border border-primary/10",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Section = ({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) => {
  return (
    <section id={id} className={`py-32 sm:py-48 ${className}`}>
      {children}
    </section>
  );
};

const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`mx-auto max-w-[1240px] px-8 sm:px-16 w-full ${className}`}>
      {children}
    </div>
  );
};

// --- MAIN PAGE ---

export default function Home() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      {/* Navbar - Using Container max-width to align with content */}
      <div className="w-full border-b border-subtle flex justify-center sticky top-0 bg-paper/90 backdrop-blur-sm z-50">
        <nav className="w-full max-w-[1240px] flex justify-between items-center py-6 px-8 sm:px-16">
          <span className="text-xl font-medium tracking-tight text-primary">ProdMind</span>
          <Button 
            variant="secondary" 
            className="!py-1.5 !px-5 text-xs tracking-wide uppercase"
            onClick={scrollToWaitlist}
          >
            Join Waitlist
          </Button>
        </nav>
      </div>

      <Container className="flex-1">
        {/* Hero Section */}
        <Section className="pb-32 pt-40 sm:pt-64">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary/40 block mb-6 px-1">
                ProdMind
              </span>
              <h1 className="text-6xl sm:text-[7vw] lg:text-[6.5vw] font-medium tracking-[-0.05em] text-primary break-words leading-[0.95] first-letter:tracking-[-0.07em]">
                Cursor for<br /> Product<br /> Managers
              </h1>
              <p className="mt-16 text-2xl sm:text-3xl text-secondary max-w-xl font-light leading-[1.4] tracking-tight">
                Analyze user feedback and turn it into clear product decisions.
              </p>
              <div className="mt-20 flex flex-col sm:flex-row gap-5">
                <Button 
                  variant="primary" 
                  className="!px-10 text-lg tracking-tight whitespace-nowrap"
                  onClick={scrollToWaitlist}
                >
                  Get Early Access
                </Button>
                <Button variant="secondary" className="!px-10 text-lg tracking-tight whitespace-nowrap">
                  See Demo
                </Button>
              </div>

              {/* Product Preview Card */}
              <div className="mt-24 max-w-[500px] border border-primary/10 bg-[#fdfdfb]/40 p-8 rounded-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <header className="mb-10 flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary/40">
                    Snapshot — 01
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary/20" />
                    <div className="w-1 h-1 rounded-full bg-primary/20" />
                    <div className="w-1 h-1 rounded-full bg-primary/40 focus:bg-primary transition-colors" />
                  </div>
                </header>

                <div className="space-y-12">
                  <section>
                    <label className="text-[9px] uppercase tracking-widest text-secondary/40 block mb-2 font-bold">Signal</label>
                    <p className="text-primary font-medium tracking-tight text-lg leading-snug">Users are dropping off during the complex data export flow.</p>
                  </section>

                  <section>
                    <label className="text-[9px] uppercase tracking-widest text-secondary/40 block mb-2 font-bold">Proposed Action</label>
                    <p className="text-primary font-medium tracking-tight text-lg leading-snug">One-click CSV sync to external platforms.</p>
                  </section>

                  <div className="h-[1px] bg-primary/5 w-full" />

                  <footer className="flex justify-between items-end">
                    <div>
                      <label className="text-[9px] uppercase tracking-widest text-secondary/40 block mb-1 font-bold">Impact</label>
                      <p className="text-primary text-4xl font-light tracking-tighter">+24%</p>
                    </div>
                    <span className="text-[9px] font-bold text-primary/40 uppercase tracking-[0.2em] mb-1">Retention</span>
                  </footer>
                </div>
              </div>
            </div>

            {/* Hero Transformation Visual */}
            <div className="hidden lg:flex items-center justify-between gap-8 h-[400px]">
                {/* Left side: Messy */}
              <div className="flex-1 relative opacity-60 blur-[1px] space-y-4">
                <div className="h-4 w-3/4 bg-primary/30 rounded" />
                <div className="h-4 w-1/2 bg-primary/20 rounded" />
                <div className="h-4 w-5/6 bg-primary/25 rounded" />
                <div className="h-4 w-2/3 bg-primary/20 rounded translate-x-4" />
                <div className="h-4 w-3/4 bg-primary/30 rounded -translate-x-2" />
                <div className="h-4 w-1/2 bg-primary/10 rounded translate-y-2" />
              </div>
              
              <Arrow />

              {/* Right side: Clear */}
              <div className="flex-1 space-y-6">
                <div className="p-4 border border-primary/20 bg-primary/[0.04] space-y-2 shadow-sm">
                  <div className="h-2 w-1/3 bg-primary/60" />
                  <div className="h-1 w-full bg-primary/20" />
                </div>
                <div className="p-4 border border-primary/30 bg-primary/[0.06] space-y-2 shadow-sm">
                  <div className="h-2 w-1/2 bg-primary/80" />
                  <div className="h-1 w-full bg-primary/30" />
                  <div className="h-1 w-3/4 bg-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Problem Section */}
        <Section className="border-t border-primary/5 relative overflow-hidden !py-32 sm:!py-48">
          {/* Subtle Background Chaos Visual (adjusted for tighter section) */}
          <div className="absolute inset-x-0 -top-20 -bottom-20 pointer-events-none opacity-[0.02] flex items-center justify-center rotate-[-5deg]">
            <div className="grid grid-cols-6 gap-2 w-full h-full p-20">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-primary h-20 w-20 transform skew-x-3 opacity-20" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
            <header className="lg:col-span-4">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary/50">
                01 — Problem
              </h2>
            </header>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                {[
                  "Feedback is scattered across high-volume noise.",
                  "PMs manually analyze data for hours every week.",
                  "Product decisions are often high-stakes guesses.",
                  "Development teams build features users won't use."
                ].map((item, i) => (
                  <div key={i} className="border-l border-primary/10 pl-8 py-2">
                    <span className="text-[10px] font-bold text-secondary/30 mb-4 block">0{i+1}</span>
                    <p className="text-2xl font-light text-primary leading-tight tracking-tight">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Solution Section */}
        <Section className="border-t border-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <header className="lg:col-span-4">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary/60">
                02 — The Solution
              </h2>
            </header>
            <div className="lg:col-span-8 flex flex-col space-y-36">
              {[
                { title: "Understand user problems", desc: "Aggregate context from every conversation to identify the core issues your users actually face.", visual: ["Problem", "Theme"] },
                { title: "Decide what to build", desc: "Surface themes and prioritize tasks backed by hard evidence, removing intuition from the equation.", visual: ["Theme", "Feature"] },
                { title: "Generate PRDs", desc: "Instantly construct well-structured Product Requirements Documents out of verified user insights.", visual: ["Feature", "Doc"] },
                { title: "Break into engineering tasks", desc: "Translate high-level product specs into clear, actionable development tasks ready for the backlog.", visual: ["Doc", "Task"] },
              ].map((step, i) => (
                <article key={i} className="max-w-2xl relative group">
                  <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-primary mb-8">{step.title}</h3>
                  <div className="grid grid-cols-5 items-center gap-4 mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-10 border border-primary/50 flex items-center justify-center text-[10px] uppercase tracking-tighter">{step.visual[0]}</div>
                    <div className="h-[1px] bg-primary/30" />
                    <div className="h-10 border border-primary flex items-center justify-center text-[10px] uppercase underline tracking-tighter font-bold">{step.visual[1]}</div>
                    <div className="h-[1px] bg-primary/30" />
                    <div className="h-10 border border-dashed border-primary/50" />
                  </div>
                  <p className="text-xl sm:text-2xl text-secondary font-light leading-[1.5] tracking-tight">
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* Upcoming Features */}
        <Section className="border-t border-primary/5 !py-32 sm:!py-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <header className="lg:col-span-4">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary/50">
                03 — Upcoming
              </h2>
            </header>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                {[
                  { title: "Evidence Prioritization", desc: "A scoring system backed by direct user signal and business impact metrics." },
                  { title: "Deep Sync Integrations", desc: "Real-time bi-directional sync with Slack, Notion, and GitHub backlogs." },
                  { title: "Voice Analysis", desc: "AI-powered transcription and sentiment analysis for user interview recordings." },
                  { title: "Automated Roadmaps", desc: "Dynamic roadmaps that adjust based on emerging feedback patterns." }
                ].map((item, i) => (
                  <div key={i} className="border-l border-primary/10 pl-8 py-2">
                    <span className="text-[10px] font-bold text-secondary/30 mb-4 block">0{i+1}</span>
                    <h3 className="text-lg font-medium text-primary mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-secondary font-light tracking-tight leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Philosophy Section */}
        <Section className="border-y border-primary/5 text-center relative overflow-hidden !py-48 sm:!py-64">
          <div className="absolute inset-x-0 top-0 flex justify-center opacity-[0.05]">
             <div className="h-32 w-[1px] bg-primary" />
          </div>
          <p className="text-3xl sm:text-5xl lg:text-6xl text-primary font-light tracking-tight max-w-4xl mx-auto leading-[1.1]">
            Product decisions should be based on real user signals, not intuition.
          </p>
          <div className="absolute inset-x-0 bottom-0 flex justify-center opacity-[0.05]">
             <div className="h-32 w-[1px] bg-primary" />
          </div>
        </Section>

        {/* Final CTA / Waitlist Form */}
        <Section id="waitlist" className="text-center pb-32 pt-24 sm:pt-48">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-6xl font-medium tracking-tight text-primary leading-tight">
              Be among the first<br /> to try ProdMind.
            </h2>
            <p className="mt-8 text-xl text-secondary font-light">
              We&apos;re opening access in batches. Secure your spot.
            </p>
            
            <div className="mt-16 w-full max-w-md">
              <WaitlistForm />
              <p className="mt-6 text-xs text-secondary/60 font-medium tracking-wide uppercase">
                We&apos;re onboarding a small group of early users.
              </p>
            </div>
          </div>
        </Section>
      </Container>
      
      {/* Footer */}
      <footer className="w-full py-20 border-t border-subtle text-center text-secondary text-xs uppercase tracking-widest font-light">
        <p>© {new Date().getFullYear()} ProdMind — Strictly Editorial.</p>
      </footer>
    </main>
  );
}
