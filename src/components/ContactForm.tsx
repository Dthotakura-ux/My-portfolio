"use client";

import { useState, type FormEvent } from "react";

const ACCENT = "#ff5e36";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — if a bot fills this hidden field, silently drop the submission.
    if (data.get("botcheck")) {
      setStatus("success");
      form.reset();
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus("error");
      setErrorMessage(
        "The form isn't connected to an email service yet — add a Web3Forms access key to .env.local."
      );
      return;
    }

    const payload = {
      access_key: accessKey,
      subject: `Portfolio contact from ${data.get("name")}`,
      from_name: "Dileep Thotakura Portfolio",
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong — please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong — please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-2 border border-hairline bg-paper p-8">
        <p className="font-serif text-[22px] italic text-ink">Thank you — message sent!</p>
        <p className="text-[15px] text-ink/60">
          I&apos;ll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-underline mt-4 w-fit text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/60"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/45">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border-b border-hairline bg-transparent pb-3 text-[16px] text-ink outline-none transition-colors focus:border-ink"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/45">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border-b border-hairline bg-transparent pb-3 text-[16px] text-ink outline-none transition-colors focus:border-ink"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/45">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-none border-b border-hairline bg-transparent pb-3 text-[16px] leading-[26px] text-ink outline-none transition-colors focus:border-ink"
          placeholder="What would you like to talk about?"
        />
      </div>

      {status === "error" && (
        <p className="text-[13px] text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 w-fit rounded-[6px] px-7 py-[14px] text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-85 disabled:opacity-50"
        style={{ backgroundColor: ACCENT }}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
