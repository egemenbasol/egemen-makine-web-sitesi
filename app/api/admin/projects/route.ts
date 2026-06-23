import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { createProject, loadProjects } from "@/lib/content-store";
import type { ProjectInput } from "@/lib/projects";

export async function GET() {
  const projects = await loadProjects();
  return NextResponse.json({ projects });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ProjectInput;
    const project = await createProject(body);

    revalidatePath("/");
    revalidatePath("/projects");

    return NextResponse.json({
      project,
      message: "Proje kaydedildi.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Proje kaydedilemedi.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
