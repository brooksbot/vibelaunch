 "use client";
import React, { useState } from "react";
import { SignupModal } from "../components/SignupModal";

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4">
      <div className="relative w-full max-w-6xl py-16">
        {/* Background gradient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-emerald-400 opacity-40 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-80px] h-72 w-72 rounded-full bg-emerald-500/40 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-80px] h-72 w-72 rounded-full bg-violet-500/40 blur-3xl" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] items-center">
          {/* Hero copy */}
          <section>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Launch the right vibe, every time.
            </div>

            <h1 className="mt-6 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white via-fuchsia-200 to-emerald-200 bg-clip-text text-transparent">
                Meet VibeLaunch
              </span>
              <br />
              <span className="text-slate-200">
                Orchestrate product launches that actually feel alive.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm sm:text-base text-slate-300/80">
              VibeLaunch helps modern teams design, schedule, and measure
              high‑energy product moments—so every release feels cohesive,
              on‑brand, and unforgettable across channels.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsSignupOpen(true);
                }}
                className="relative group inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-slate-950 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {/* Outer glow ring */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-fuchsia-400 to-violet-500 opacity-70 blur-md transition duration-300 group-hover:opacity-100" />
                {/* Button body */}
                <span className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-100 px-7 py-3 shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:shadow-[0_0_40px_rgba(244,114,182,0.55)] transition-all duration-300">
                  Get early access
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/80 text-[11px] text-emerald-200">
                    →
                  </span>
                </span>
              </button>

              <button className="text-sm font-medium text-slate-200/80 hover:text-slate-50 transition">
                Watch 2‑minute demo
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                No credit card required
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>Built for GTM, product, and marketing teams</span>
            </div>
          </section>

          {/* 3D-style floating card */}
          <section className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-10 bg-gradient-to-tr from-emerald-500/30 via-fuchsia-500/10 to-violet-500/30 opacity-60 blur-2xl" />

            <div className="relative mx-auto w-full max-w-md">
              {/* Fake 3D shadow */}
              <div className="absolute inset-0 translate-y-6 scale-95 rounded-3xl bg-black/70 blur-xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/10 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl transform-gpu rotate-[-2deg] hover:rotate-0 hover:-translate-y-1 transition-transform duration-500">
                {/* Card header */}
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      Launch Timeline
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-50">
                      Spring Drop · VibeLaunch
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Live in 3 days
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Launch energy</span>
                    <span className="text-emerald-300 font-medium">87%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-emerald-400 via-fuchsia-400 to-violet-400 shadow-[0_0_18px_rgba(16,185,129,0.85)]" />
                  </div>
                </div>

                {/* Timeline steps */}
                <div className="mt-6 space-y-3 text-xs">
                  <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-xl bg-emerald-500/15 text-[12px] text-emerald-300">
                        1
                      </span>
                      <div>
                        <p className="font-medium text-slate-100">
                          Align the launch vibe
                        </p>
                        <p className="text-[11px] text-slate-400">
                          Themes, channels, and touchpoints auto‑synced.
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                      Done
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-xl bg-fuchsia-500/15 text-[12px] text-fuchsia-300">
                        2
                      </span>
                      <div>
                        <p className="font-medium text-slate-100">
                          Orchestrate channel drops
                        </p>
                        <p className="text-[11px] text-slate-400">
                          Social, email, in‑app, and live moments.
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-fuchsia-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-fuchsia-300">
                      In progress
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-dashed border-slate-600/60 bg-slate-900/40 px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-xl bg-slate-800 text-[12px] text-slate-300">
                        3
                      </span>
                      <div>
                        <p className="font-medium text-slate-100">
                          Measure launch resonance
                        </p>
                        <p className="text-[11px] text-slate-400">
                          Sentiment, spikes, and channel‑level impact.
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-300">
                      Next
                    </span>
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="mt-6 flex flex-wrap gap-4 border-t border-white/5 pt-4 text-[11px] text-slate-400">
                  <div>
                    <p className="text-slate-300">+142%</p>
                    <p>Launch‑day engagement</p>
                  </div>
                  <div>
                    <p className="text-slate-300">4.9</p>
                    <p>Avg. campaign rating</p>
                  </div>
                  <div>
                    <p className="text-slate-300">12</p>
                    <p>Teams in sync</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <SignupModal open={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </main>
  );
}
