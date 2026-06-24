import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { deleteService, updateService } from "@/lib/services-store";
import type { ServiceInput } from "@/lib/site-types";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PUT(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = (await request.json()) as ServiceInput;
    const service = await updateService(id, body);

    revalidatePath("/services");
    revalidatePath("/contact");

    return NextResponse.json({
      service,
      message: "Hizmet güncellendi.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Hizmet güncellenemedi.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    await deleteService(id);

    revalidatePath("/services");
    revalidatePath("/contact");

    return NextResponse.json({ message: "Hizmet silindi." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Hizmet silinemedi.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
