import { NextResponse } from "next/server";
import { getAdminPassword, isAdminPasswordValid, setAdminSessionCookie } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const body = (await request.json()) as { password?: string };

  if (!getAdminPassword()) {
    return NextResponse.json(
      { error: "ADMIN_PASSWORD ortam değişkeni tanımlı değil. .env.local dosyasını kontrol edin." },
      { status: 500 },
    );
  }

  if (!body.password || !isAdminPasswordValid(body.password)) {
    return NextResponse.json({ error: "Şifre hatalı." }, { status: 401 });
  }

  await setAdminSessionCookie();

  return NextResponse.json({ success: true });
}
