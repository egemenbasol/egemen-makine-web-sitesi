export function normalizeEnvValue(value: string | undefined): string {
  if (!value) {
    return "";
  }

  return value
    .replace(/^\uFEFF/, "")
    .trim()
    .replace(/^["']|["']$/g, "");
}
