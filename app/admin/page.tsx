import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export default async function AdminIndexPage() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    redirect("/admin/login");
  }

  redirect("/admin/projects");
}
