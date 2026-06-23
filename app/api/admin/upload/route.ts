import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { buildImageFileName, saveProjectImage } from "@/lib/content-store";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const projectId = String(formData.get("projectId") ?? "proje");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Görsel dosyası bulunamadı." }, { status: 400 });
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: "Yalnızca JPG, PNG veya WEBP yükleyebilirsiniz." },
        { status: 400 },
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "Görsel boyutu en fazla 5 MB olabilir." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = buildImageFileName(projectId, file.name);
    const imageUrl = await saveProjectImage(fileName, buffer);

    revalidatePath("/");
    revalidatePath("/projects");

    return NextResponse.json({
      imageUrl,
      message: "Görsel yüklendi.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Görsel yüklenemedi.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
