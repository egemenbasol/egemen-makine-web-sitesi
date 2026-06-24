"use client";

import { AdminAlert, AdminSaveBar, AdminSectionCard, AdminTextField } from "@/components/admin/form-fields";
import { useSiteAdmin } from "@/components/admin/site-admin-provider";

export function PageContactPanel() {
  const { site, setSite, saveSite, loading, message, error } = useSiteAdmin();

  return (
    <div className="space-y-6">
      {message ? <AdminAlert message={message} tone="success" /> : null}
      {error ? <AdminAlert message={error} tone="error" /> : null}
      <AdminSectionCard title="İletişim sayfası metinleri">
        <AdminTextField
          label="SEO açıklaması"
          value={site.contactPage.metaDescription}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              contactPage: { ...current.contactPage, metaDescription: value },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Hero üst etiket"
          value={site.contactPage.heroEyebrow}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              contactPage: { ...current.contactPage, heroEyebrow: value },
            }))
          }
        />
        <AdminTextField
          label="Hero başlık"
          value={site.contactPage.heroTitle}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              contactPage: { ...current.contactPage, heroTitle: value },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Hero açıklama"
          value={site.contactPage.heroDescription}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              contactPage: { ...current.contactPage, heroDescription: value },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Harita üst etiket"
          value={site.contactPage.mapSection.eyebrow}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              contactPage: {
                ...current.contactPage,
                mapSection: { ...current.contactPage.mapSection, eyebrow: value },
              },
            }))
          }
        />
        <AdminTextField
          label="Harita başlık"
          value={site.contactPage.mapSection.title}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              contactPage: {
                ...current.contactPage,
                mapSection: { ...current.contactPage.mapSection, title: value },
              },
            }))
          }
        />
        <AdminTextField
          label="Harita açıklama"
          value={site.contactPage.mapSection.description}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              contactPage: {
                ...current.contactPage,
                mapSection: { ...current.contactPage.mapSection, description: value },
              },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Hizmet listesi başlığı"
          value={site.contactPage.servicesListTitle}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              contactPage: { ...current.contactPage, servicesListTitle: value },
            }))
          }
        />
        <AdminSaveBar onSave={saveSite} loading={loading} />
      </AdminSectionCard>
    </div>
  );
}
