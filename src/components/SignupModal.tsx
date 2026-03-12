"use client";

import React, { useState } from "react";
import { supabase } from "../../lib/supabase";

type SignupModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SignupModal({ open, onClose }: SignupModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const { error: insertError } = await supabase
        .from("waitlist")
        .insert({ email });

      if (insertError) {
        console.error(insertError);
        setError("Something went wrong adding you to the list. Please try again.");
        return;
      }

      setSuccess(true);

      // Close gracefully after showing success
      setTimeout(() => {
        setEmail("");
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("Unexpected error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <button
        aria-label="Close sign up modal"
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-900/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.95)]">
        {/* Top accent gradient */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-400 via-fuchsia-400 to-violet-500 opacity-40 blur-3xl" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
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
            Drop your email and we&apos;ll send a curated look at how teams are
            orchestrating launches with VibeLaunch—no spam, just signal.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="waitlist-email"
                className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-400"
              >
                Work email
              </label>
              <div className="relative">
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="peer block w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-400/70 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                />
                <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-fuchsia-400/0 opacity-0 blur-[18px] transition-opacity peer-focus:opacity-100" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-300 to-fuchsia-300 px-4 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.6)] transition hover:shadow-[0_0_40px_rgba(244,114,182,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Adding you..." : "Request my invite"}
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

          {error && (
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-100">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500/90 text-[11px] text-slate-950">
                !
              </span>
              <p>{error}</p>
            </div>
          )}

          {success && (
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
  );
}

