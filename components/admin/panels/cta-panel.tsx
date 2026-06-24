"use client";

import { AdminAlert, AdminSaveBar, AdminSectionCard, AdminTextField } from "@/components/admin/form-fields";
import { useSiteAdmin } from "@/components/admin/site-admin-provider";

export function CtaPanel() {
  const { site, setSite, saveSite, loading, message, error } = useSiteAdmin();

  return (
    <div className="space-y-6">
      {message ? <AdminAlert message={message} tone="success" /> : null}
      {error ? <AdminAlert message={error} tone="error" /> : null}
      <AdminSectionCard
        title="CTA bölümü"
        description="Sayfa altlarında görünen teklif ve WhatsApp çağrısı."
      >
        <AdminTextField
          label="Üst etiket"
          value={site.cta.eyebrow}
          onChange={(value) => setSite((current) => ({ ...current, cta: { ...current.cta, eyebrow: value } }))}
        />
        <AdminTextField
          label="Başlık"
          value={site.cta.title}
          onChange={(value) => setSite((current) => ({ ...current, cta: { ...current.cta, title: value } }))}
          multiline
        />
        <AdminTextField
          label="Açıklama"
          value={site.cta.description}
          onChange={(value) => setSite((current) => ({ ...current, cta: { ...current.cta, description: value } }))}
          multiline
        />
        <AdminTextField
          label="Birincil buton"
          value={site.cta.primaryButton}
          onChange={(value) =>
            setSite((current) => ({ ...current, cta: { ...current.cta, primaryButton: value } }))
          }
        />
        <AdminTextField
          label="WhatsApp butonu"
          value={site.cta.secondaryButton}
          onChange={(value) =>
            setSite((current) => ({ ...current, cta: { ...current.cta, secondaryButton: value } }))
          }
        />
        <AdminSaveBar onSave={saveSite} loading={loading} />
      </AdminSectionCard>
    </div>
  );
}
