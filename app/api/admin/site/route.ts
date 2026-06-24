import { NextResponse } from "next/server";
import { loadSiteContent, saveSiteContent } from "@/lib/site-content";
import { revalidateAllSitePaths } from "@/lib/revalidate-site";
import type { SiteContent } from "@/lib/site-types";

export async function GET() {
  const site = await loadSiteContent();
  return NextResponse.json({ site });
}

export async function PUT(request: Request) {
  try {
    const body = (await request.json()) as SiteContent;
    await saveSiteContent(body);
    revalidateAllSitePaths();

    return NextResponse.json({
      message: "Site içeriği kaydedildi.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Site içeriği kaydedilemedi.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
