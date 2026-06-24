import { revalidatePath } from "next/cache";

export function revalidateAllSitePaths() {
  revalidatePath("/");
  revalidatePath("/services");
  revalidatePath("/projects");
  revalidatePath("/about");
  revalidatePath("/contact");
}
