import { Suspense } from "react";
import AdminLoginForm from "@/components/admin/admin-login-form";

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 text-sm text-slate-500">
          Giriş ekranı yükleniyor...
        </div>
      }
    >
      <AdminLoginForm />
    </Suspense>
  );
}
