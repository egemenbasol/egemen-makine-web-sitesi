"use client";

import { AdminAlert, AdminSaveBar, AdminSectionCard, AdminTextField } from "@/components/admin/form-fields";
import { useSiteAdmin } from "@/components/admin/site-admin-provider";

export function SeoPanel() {
  const { site, setSite, saveSite, loading, message, error } = useSiteAdmin();

  return (
    <div className="space-y-6">
      {message ? <AdminAlert message={message} tone="success" /> : null}
      {error ? <AdminAlert message={error} tone="error" /> : null}

      <AdminSectionCard title="SEO ayarları" description="Site başlığı ve arama motoru anahtar kelimeleri.">
        <AdminTextField
          label="Site URL"
          value={site.seo.siteUrl}
          onChange={(value) => setSite((current) => ({ ...current, seo: { ...current.seo, siteUrl: value } }))}
        />
        <AdminTextField
          label="Başlık eki"
          value={site.seo.titleSuffix}
          onChange={(value) =>
            setSite((current) => ({ ...current, seo: { ...current.seo, titleSuffix: value } }))
          }
        />
        <AdminTextField
          label="Anahtar kelimeler (virgülle)"
          value={site.seo.keywords.join(", ")}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              seo: {
                ...current.seo,
                keywords: value
                  .split(",")
                  .map((item) => item.trim())
                  .filter(Boolean),
              },
            }))
          }
          multiline
        />
        <AdminSaveBar onSave={saveSite} loading={loading} />
      </AdminSectionCard>
    </div>
  );
}
