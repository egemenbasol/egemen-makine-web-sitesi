import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { createService, loadServices } from "@/lib/services-store";
import type { ServiceInput } from "@/lib/site-types";

export async function GET() {
  const services = await loadServices();
  return NextResponse.json({ services });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ServiceInput;
    const service = await createService(body);

    revalidatePath("/services");
    revalidatePath("/contact");

    return NextResponse.json({
      service,
      message: "Hizmet kaydedildi.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Hizmet kaydedilemedi.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
