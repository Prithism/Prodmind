"use client";

import React, { useState } from "react";

/**
 * WaitlistForm: A minimalist, high-contrast form for capturing user emails.
 * Matches the 'ProdMind' editorial paper aesthetic.
 */
export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "already_joined" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setStatus("success");
        setEmail("");
      } else if (data.message === "Already joined") {
        setStatus("already_joined");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form 
        onSubmit={handleSubmit}
        className="group relative flex flex-col sm:flex-row items-stretch gap-2"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          disabled={status === "loading" || status === "success"}
          className="flex-1 bg-transparent border border-primary/20 px-5 py-3.5 text-sm font-light tracking-tight placeholder:text-secondary/40 outline-none transition-all duration-300 focus:border-primary disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-primary text-paper px-8 py-3.5 text-sm font-medium tracking-tight transition-all duration-300 hover:bg-primary/90 active:scale-[0.98] disabled:bg-primary/40 disabled:scale-100 whitespace-nowrap"
        >
          {status === "loading" ? "Joining..." : status === "success" ? "Joined" : "Join Waitlist"}
        </button>
      </form>

      {/* Subtle feedback messages */}
      <div className="mt-4 h-5">
        {status === "success" && (
          <p className="text-xs font-medium text-primary tracking-wide animate-in fade-in slide-in-from-top-1 duration-500">
            You&apos;re on the list. We&apos;ll be in touch soon.
          </p>
        )}
        {status === "already_joined" && (
          <p className="text-xs font-medium text-secondary tracking-wide animate-in fade-in duration-500">
            You&apos;re already on the list.
          </p>
        )}
        {status === "error" && (
          <p className="text-xs font-medium text-red-500/80 tracking-wide animate-in fade-in duration-500">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
