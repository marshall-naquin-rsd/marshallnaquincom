const CONSENT_COOKIE = "pep_consent";
const READ_COOKIE = "pep_read";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year in seconds

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

function setCookie(name: string, value: string): void {
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

function deleteCookie(name: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; max-age=0; path=/; SameSite=Lax`;
}

export function getConsent(): "granted" | "declined" | null {
  const value = getCookie(CONSENT_COOKIE);
  if (value === "granted" || value === "declined") return value;
  return null;
}

export function setConsent(value: "granted" | "declined"): void {
  setCookie(CONSENT_COOKIE, value);
}

export function getReadSlugs(): string[] {
  const value = getCookie(READ_COOKIE);
  if (!value) return [];
  return value.split(",").filter(Boolean);
}

export function markAsRead(slug: string): void {
  if (getConsent() !== "granted") return;
  const current = getReadSlugs();
  if (current.includes(slug)) return;
  setCookie(READ_COOKIE, [...current, slug].join(","));
}

export function clearReadSlugs(): void {
  deleteCookie(READ_COOKIE);
}

export function isRead(slug: string): boolean {
  return getReadSlugs().includes(slug);
}
