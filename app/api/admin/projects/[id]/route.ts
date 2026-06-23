import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { deleteProject, updateProject } from "@/lib/content-store";
import type { ProjectInput } from "@/lib/projects";

function revalidateProjectPaths() {
  revalidatePath("/");
  revalidatePath("/projects");
}

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PUT(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = (await request.json()) as ProjectInput;
    const project = await updateProject(id, body);

    revalidateProjectPaths();

    return NextResponse.json({
      project,
      message: "Proje güncellendi.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Proje güncellenemedi.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    await deleteProject(id);

    revalidateProjectPaths();

    return NextResponse.json({ message: "Proje silindi." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Proje silinemedi.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
