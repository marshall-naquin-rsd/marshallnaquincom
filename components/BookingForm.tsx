"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  bookingPage,
  formatOptions,
  hero,
  roomOptions,
  samplesIntro,
} from "@/lib/copy";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "error"; message: string };

export function BookingForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [room, setRoom] = useState("");

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
      setRoom("");
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
      <div className="booking-sent">
        <p className="eyebrow eyebrow-ac">{bookingPage.eyebrow}</p>
        <h1 className="page-title">{bookingPage.sentTitle}</h1>
        <div className="raised-card wait-card">
          <h2 className="wait-title">{bookingPage.whileYouWait}</h2>
          <p className="card-body">{samplesIntro}</p>
          <Link className="cta-listen" href="/#samples">
            {hero.secondaryCta}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="booking-intro">
        <p className="eyebrow eyebrow-ac">{bookingPage.eyebrow}</p>
        <h1 className="page-title">{bookingPage.title}</h1>
        <p className="lead">{bookingPage.lead}</p>
      </div>

      <form className="booking-form" onSubmit={onSubmit} noValidate>
        <p className="honeypot" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </p>

        <div className="form-field">
          <label className="form-label" htmlFor="name">
            {bookingPage.name}
          </label>
          <input
            className="form-input"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="email">
            {bookingPage.email}
          </label>
          <input
            className="form-input"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="organization">
            {bookingPage.organization}{" "}
            <span className="form-optional">{bookingPage.organizationHint}</span>
          </label>
          <input
            className="form-input"
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
          />
        </div>

        <fieldset className="form-field room-field">
          <legend className="form-label">{bookingPage.room}</legend>
          <input type="hidden" name="room" value={room} />
          <div className="room-grid">
            {roomOptions.map((option) => (
              <button
                key={option}
                type="button"
                className="room-card"
                aria-pressed={room === option}
                onClick={() => setRoom(room === option ? "" : option)}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="form-field">
          <label className="form-label" htmlFor="format">
            {bookingPage.format}
          </label>
          <select className="form-select" id="format" name="format">
            {formatOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="dates">
            {bookingPage.dates}
          </label>
          <input className="form-input" id="dates" name="dates" type="text" />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="message">
            {bookingPage.message}
          </label>
          <textarea
            className="form-textarea"
            id="message"
            name="message"
            rows={4}
          />
        </div>

        {status.state === "error" ? (
          <p className="form-error" role="alert">
            {status.message}
          </p>
        ) : null}

        <div className="form-actions">
          <button
            className="btn-primary form-submit"
            type="submit"
            disabled={status.state === "sending"}
          >
            {status.state === "sending" ? bookingPage.sending : bookingPage.send}
          </button>
        </div>
      </form>
    </>
  );
}
