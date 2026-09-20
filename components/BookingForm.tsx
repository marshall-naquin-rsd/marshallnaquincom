"use client";

import { useState, type FormEvent } from "react";
import { audienceTypes, formatOptions } from "@/lib/copy";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "error"; message: string };

export function BookingForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ state: "sending" });

    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus({
          state: "error",
          message: data.error ?? "The form did not send. Please try again.",
        });
        return;
      }

      form.reset();
      setStatus({ state: "success" });
    } catch {
      setStatus({
        state: "error",
        message: "The form did not send. Please try again.",
      });
    }
  }

  if (status.state === "success") {
    return (
      <p className="form-success" role="status">
        Thanks. I’ll write back.
      </p>
    );
  }

  return (
    <form className="booking-form" onSubmit={onSubmit} noValidate>
      <p className="honeypot" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </p>

      <div className="form-grid">
        <p>
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </p>
        <p>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </p>
        <p className="form-span">
          <label className="form-label" htmlFor="organization">
            Organization or event name
          </label>
          <input
            className="form-input"
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            required
          />
        </p>
        <p>
          <label className="form-label" htmlFor="audienceType">
            Audience type
          </label>
          <select className="form-select" id="audienceType" name="audienceType">
            <option value="">Select one</option>
            {audienceTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </p>
        <p>
          <label className="form-label" htmlFor="format">
            Format
          </label>
          <select className="form-select" id="format" name="format">
            <option value="">Select one</option>
            {formatOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </p>
        <p>
          <label className="form-label" htmlFor="preferredDates">
            Preferred dates
          </label>
          <input
            className="form-input"
            id="preferredDates"
            name="preferredDates"
            type="text"
            placeholder="Month, range, or still open"
          />
        </p>
        <p>
          <label className="form-label" htmlFor="location">
            Location or city
          </label>
          <input
            className="form-input"
            id="location"
            name="location"
            type="text"
            autoComplete="address-level2"
          />
        </p>
        <p className="form-span">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-textarea"
            id="message"
            name="message"
            rows={6}
            required
          />
        </p>
      </div>

      {status.state === "error" ? (
        <p className="form-error" role="alert">
          {status.message}
        </p>
      ) : null}

      <button className="btn-primary" type="submit" disabled={status.state === "sending"}>
        {status.state === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
