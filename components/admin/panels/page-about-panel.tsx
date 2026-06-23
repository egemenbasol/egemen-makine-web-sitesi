"use client";

import { AdminAlert, AdminSaveBar, AdminSectionCard, AdminTextField } from "@/components/admin/form-fields";
import { useSiteAdmin } from "@/components/admin/site-admin-provider";

export function PageAboutPanel() {
  const { site, setSite, saveSite, loading, message, error } = useSiteAdmin();

  return (
    <div className="space-y-6">
      {message ? <AdminAlert message={message} tone="success" /> : null}
      {error ? <AdminAlert message={error} tone="error" /> : null}
      <AdminSectionCard title="Hakkımızda sayfası metinleri">
        <AdminTextField
          label="SEO açıklaması"
          value={site.aboutPage.metaDescription}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: { ...current.aboutPage, metaDescription: value },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Hero üst etiket"
          value={site.aboutPage.heroEyebrow}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: { ...current.aboutPage, heroEyebrow: value },
            }))
          }
        />
        <AdminTextField
          label="Hero başlık"
          value={site.aboutPage.heroTitle}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: { ...current.aboutPage, heroTitle: value },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Kart başlık"
          value={site.aboutPage.cardTitle}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: { ...current.aboutPage, cardTitle: value },
            }))
          }
        />
        <AdminTextField
          label="Kart açıklama"
          value={site.aboutPage.cardDescription}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: { ...current.aboutPage, cardDescription: value },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Profil üst etiket"
          value={site.aboutPage.profileSection.eyebrow}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: {
                ...current.aboutPage,
                profileSection: { ...current.aboutPage.profileSection, eyebrow: value },
              },
            }))
          }
        />
        <AdminTextField
          label="Profil başlık"
          value={site.aboutPage.profileSection.title}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: {
                ...current.aboutPage,
                profileSection: { ...current.aboutPage.profileSection, title: value },
              },
            }))
          }
        />
        <AdminTextField
          label="Profil açıklama"
          value={site.aboutPage.profileSection.description}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: {
                ...current.aboutPage,
                profileSection: { ...current.aboutPage.profileSection, description: value },
              },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Süreç üst etiket"
          value={site.aboutPage.processSection.eyebrow}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: {
                ...current.aboutPage,
                processSection: { ...current.aboutPage.processSection, eyebrow: value },
              },
            }))
          }
        />
        <AdminTextField
          label="Süreç başlık"
          value={site.aboutPage.processSection.title}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: {
                ...current.aboutPage,
                processSection: { ...current.aboutPage.processSection, title: value },
              },
            }))
          }
        />
        <AdminTextField
          label="Süreç açıklama"
          value={site.aboutPage.processSection.description}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: {
                ...current.aboutPage,
                processSection: { ...current.aboutPage.processSection, description: value },
              },
            }))
          }
          multiline
        />
        <AdminTextField
          label="CTA kutusu başlık"
          value={site.aboutPage.ctaBox.title}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: {
                ...current.aboutPage,
                ctaBox: { ...current.aboutPage.ctaBox, title: value },
              },
            }))
          }
          multiline
        />
        <AdminTextField
          label="CTA kutusu açıklama"
          value={site.aboutPage.ctaBox.description}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: {
                ...current.aboutPage,
                ctaBox: { ...current.aboutPage.ctaBox, description: value },
              },
            }))
          }
          multiline
        />
        <AdminTextField
          label="CTA kutusu buton"
          value={site.aboutPage.ctaBox.buttonLabel}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              aboutPage: {
                ...current.aboutPage,
                ctaBox: { ...current.aboutPage.ctaBox, buttonLabel: value },
              },
            }))
          }
        />
        <AdminSaveBar onSave={saveSite} loading={loading} />
      </AdminSectionCard>
    </div>
  );
}
