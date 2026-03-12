 "use client";
import React, { useState } from "react";

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
                  setSubmitted(false);
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

      {/* Email signup modal */}
      {isSignupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <button
            aria-label="Close sign up modal"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setIsSignupOpen(false)}
          />

          {/* Modal panel */}
          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-900/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.95)]">
            {/* Top accent gradient */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-400 via-fuchsia-400 to-violet-500 opacity-40 blur-3xl" />

            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsSignupOpen(false)}
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/60 text-xs text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              ✕
            </button>

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-medium text-slate-200/90">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                VibeLaunch early access
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-50">
                Be first to launch with the right vibe.
              </h2>
              <p className="mt-2 text-sm text-slate-300/85">
                Drop your email and we&apos;ll send a curated look at how teams
                are orchestrating launches with VibeLaunch—no spam, just signal.
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-400"
                  >
                    Work email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="peer block w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-400/70 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                    />
                    <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-fuchsia-400/0 opacity-0 blur-[18px] transition-opacity peer-focus:opacity-100" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="relative inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-300 to-fuchsia-300 px-4 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.6)] transition hover:shadow-[0_0_40px_rgba(244,114,182,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Request my invite
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/80 text-[11px] text-emerald-200">
                    ↗
                  </span>
                </button>
              </form>

              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                <span>We respect inboxes. Unsubscribe anytime.</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Beta spots are limited
                </span>
              </div>

              {submitted && (
                <div className="mt-4 flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-100">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/90 text-[11px] text-slate-950">
                    ✓
                  </span>
                  <p>
                    You&apos;re on the list. We&apos;ll be in touch as soon as a
                    VibeLaunch slot opens up.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
