"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send, XCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-ink-100 placeholder:text-ink-400 transition focus:border-violet-300/50 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-violet-400/30";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      // Loaded on demand so EmailJS never ships in the initial bundle.
      const emailjs = (await import("@emailjs/browser")).default;
      const { serviceId, templateId, publicKey } = siteConfig.emailjs;
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      formRef.current.reset();
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error", err);
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="user_name" className="mb-2 block text-sm font-medium text-ink-200">
            Full name
          </label>
          <input id="user_name" name="user_name" type="text" required autoComplete="name" placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="user_email" className="mb-2 block text-sm font-medium text-ink-200">
            Email address
          </label>
          <input id="user_email" name="user_email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-200">
          Message
        </label>
        <textarea id="message" name="message" rows={6} required placeholder="Tell me about your project…" className={`${field} resize-y`} />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-indigo px-6 py-3 font-semibold text-white shadow-glow-violet transition-[filter,opacity] hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 aria-hidden className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send message <Send aria-hidden className="h-4 w-4" />
            </>
          )}
        </motion.button>

        <p role="status" aria-live="polite" className="min-h-6 text-sm">
          {status === "success" && (
            <span className="inline-flex items-center gap-1.5 text-emerald-300">
              <CheckCircle2 aria-hidden className="h-4 w-4" /> Thanks — your message has been sent.
            </span>
          )}
          {status === "error" && (
            <span className="inline-flex items-center gap-1.5 text-rose-300">
              <XCircle aria-hidden className="h-4 w-4" /> Couldn&apos;t send right now. Please try again later.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
