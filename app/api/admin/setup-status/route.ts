import { NextResponse } from "next/server";
import { getAdminPassword } from "@/lib/admin-auth";

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const password = getAdminPassword();

  return NextResponse.json({
    passwordConfigured: password.length > 0,
    passwordLength: password.length,
    projectRoot: process.cwd(),
    message: password.length
      ? `ADMIN_PASSWORD okunuyor (${password.length} karakter). Panele aynı uzunlukta şifre yazın.`
      : "ADMIN_PASSWORD bulunamadı. package.json ile aynı klasörde .env.local oluşturun.",
  });
}
