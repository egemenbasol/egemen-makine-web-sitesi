import { cookies } from "next/headers";

const SESSION_COOKIE = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;
const encoder = new TextEncoder();

function getAdminSecret(): string {
  return process.env.ADMIN_SECRET ?? process.env.ADMIN_PASSWORD ?? "egemen-makine-admin";
}

async function importSigningKey() {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(getAdminSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
}

async function signPayload(payload: string): Promise<string> {
  const key = await importSigningKey();
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));

  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function safeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;

  for (let index = 0; index < a.length; index += 1) {
    result |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }

  return result === 0;
}

export async function createAdminSessionToken(): Promise<string> {
  const expiresAt = Date.now() + SESSION_MAX_AGE * 1000;
  const payload = `admin:${expiresAt}`;
  const signature = await signPayload(payload);
  return `${payload}.${signature}`;
}

export async function verifyAdminSessionToken(token: string | undefined): Promise<boolean> {
  if (!token) {
    return false;
  }

  const [payload, signature] = token.split(".");

  if (!payload || !signature) {
    return false;
  }

  const expectedSignature = await signPayload(payload);

  if (!safeCompare(signature, expectedSignature)) {
    return false;
  }

  const [, expiresAtValue] = payload.split(":");
  const expiresAt = Number(expiresAtValue);

  return Number.isFinite(expiresAt) && expiresAt > Date.now();
}

export function isAdminPasswordValid(password: string): boolean {
  const configuredPassword = process.env.ADMIN_PASSWORD;

  if (!configuredPassword) {
    return false;
  }

  return safeCompare(password, configuredPassword);
}

export async function setAdminSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, await createAdminSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function clearAdminSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return verifyAdminSessionToken(cookieStore.get(SESSION_COOKIE)?.value);
}

export { SESSION_COOKIE };
