"use client";

import { useState, type FormEvent } from "react";

const ROLES = [
  "Registration",
  "Hospitality",
  "Food & Beverage",
  "Entertainment & Games",
  "T-shirts / Merch",
  "Audio-Visual",
] as const;

const emptyForm = {
  name: "",
  contact: "",
  homeGroup: "",
  otherRole: "",
  ideas: "",
};

export function VolunteerForm() {
  const [form, setForm] = useState(emptyForm);
  const [picked, setPicked] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function update(field: keyof typeof emptyForm) {
    return (value: string) => {
      setForm((current) => ({ ...current, [field]: value }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) {
      setError(true);
      return;
    }
    setSubmitted(true);
    setError(false);
  }

  function reset() {
    setForm(emptyForm);
    setPicked({});
    setSubmitted(false);
    setError(false);
  }

  if (submitted) {
    return (
      <div className="rounded-[10px] border-2 border-[#d4af37] bg-[#F7F7F7] p-8 text-center">
        <h3 className="area7-heading mb-2.5 text-[26px] font-extrabold text-[#6B92B0]">
          Thank you — you&apos;re on the list!
        </h3>
        <p className="mb-[18px] text-[17px] leading-[1.6]">
          The 2027 host committee will be in touch as plans come together. Keep
          an eye out at your home group meeting too.
        </p>
        <button type="button" className="area7-btn area7-btn-outline" onClick={reset}>
          SIGN UP SOMEONE ELSE
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[10px] bg-[#F7F7F7] p-5 sm:p-[34px]"
    >
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="form-label" htmlFor="v-name">
            First name &amp; last initial
          </label>
          <input
            className="form-input"
            id="v-name"
            type="text"
            placeholder="e.g. Marshall N."
            value={form.name}
            onChange={(event) => update("name")(event.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="v-contact">
            Phone or email
          </label>
          <input
            className="form-input"
            id="v-contact"
            type="text"
            placeholder="Best way to reach you"
            value={form.contact}
            onChange={(event) => update("contact")(event.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="v-group">
            Home group
          </label>
          <input
            className="form-input"
            id="v-group"
            type="text"
            placeholder="e.g. Tuesday Night Baton Rouge"
            value={form.homeGroup}
            onChange={(event) => update("homeGroup")(event.target.value)}
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="form-label mb-2.5">Where can you help? (choose any)</div>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((label) => (
            <label
              key={label}
              className="area7-role flex min-h-11 cursor-pointer items-center gap-2.5 rounded-[6px] border border-[#e2e2e2] bg-white px-3.5 py-3"
            >
              <input
                type="checkbox"
                checked={!!picked[label]}
                onChange={() =>
                  setPicked((current) => ({
                    ...current,
                    [label]: !current[label],
                  }))
                }
                className="size-[18px] shrink-0 accent-[#6B92B0]"
              />
              <span className="text-base">{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="form-label" htmlFor="v-role-other">
          Something else you can offer?
        </label>
        <input
          className="form-input"
          id="v-role-other"
          type="text"
          placeholder="Fundraising, literature, transportation, treasurer — name it"
          value={form.otherRole}
          onChange={(event) => update("otherRole")(event.target.value)}
        />
      </div>

      <div id="ideas" className="mt-6">
        <label className="form-label" htmlFor="v-ideas">
          Workshop or speaker ideas
        </label>
        <textarea
          className="form-textarea"
          id="v-ideas"
          rows={4}
          placeholder="A topic you'd love to see, a speaker who moved you, a workshop the fellowship needs."
          value={form.ideas}
          onChange={(event) => update("ideas")(event.target.value)}
        />
      </div>

      <div className="mt-[26px] flex flex-wrap items-center gap-4">
        <button type="submit" className="area7-btn area7-btn-primary">
          SEND IT IN
        </button>
        <span className="text-[15px] text-[#555]">
          We share your info with the host committee only.
        </span>
      </div>
      {error ? (
        <div className="form-error-box mt-4">
          Please add your name and a phone number or email so we can reach you.
        </div>
      ) : null}
    </form>
  );
}
