"use client";

import { AdminAlert, AdminSaveBar, AdminSectionCard, AdminTextField } from "@/components/admin/form-fields";
import { useSiteAdmin } from "@/components/admin/site-admin-provider";

export function PageServicesPanel() {
  const { site, setSite, saveSite, loading, message, error } = useSiteAdmin();

  return (
    <div className="space-y-6">
      {message ? <AdminAlert message={message} tone="success" /> : null}
      {error ? <AdminAlert message={error} tone="error" /> : null}
      <AdminSectionCard title="Hizmetler sayfası metinleri">
        <AdminTextField
          label="SEO açıklaması"
          value={site.servicesPage.metaDescription}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              servicesPage: { ...current.servicesPage, metaDescription: value },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Hero üst etiket"
          value={site.servicesPage.heroEyebrow}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              servicesPage: { ...current.servicesPage, heroEyebrow: value },
            }))
          }
        />
        <AdminTextField
          label="Hero başlık"
          value={site.servicesPage.heroTitle}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              servicesPage: { ...current.servicesPage, heroTitle: value },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Liste üst etiket"
          value={site.servicesPage.listSection.eyebrow}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              servicesPage: {
                ...current.servicesPage,
                listSection: { ...current.servicesPage.listSection, eyebrow: value },
              },
            }))
          }
        />
        <AdminTextField
          label="Liste başlık"
          value={site.servicesPage.listSection.title}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              servicesPage: {
                ...current.servicesPage,
                listSection: { ...current.servicesPage.listSection, title: value },
              },
            }))
          }
        />
        <AdminTextField
          label="Liste açıklama"
          value={site.servicesPage.listSection.description}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              servicesPage: {
                ...current.servicesPage,
                listSection: { ...current.servicesPage.listSection, description: value },
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
