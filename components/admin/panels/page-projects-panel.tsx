"use client";

import { AdminAlert, AdminSaveBar, AdminSectionCard, AdminTextField } from "@/components/admin/form-fields";
import { useSiteAdmin } from "@/components/admin/site-admin-provider";

export function PageProjectsPanel() {
  const { site, setSite, saveSite, loading, message, error } = useSiteAdmin();

  return (
    <div className="space-y-6">
      {message ? <AdminAlert message={message} tone="success" /> : null}
      {error ? <AdminAlert message={error} tone="error" /> : null}
      <AdminSectionCard title="Projeler sayfası metinleri">
        <AdminTextField
          label="SEO açıklaması"
          value={site.projectsPage.metaDescription}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              projectsPage: { ...current.projectsPage, metaDescription: value },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Hero üst etiket"
          value={site.projectsPage.heroEyebrow}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              projectsPage: { ...current.projectsPage, heroEyebrow: value },
            }))
          }
        />
        <AdminTextField
          label="Hero başlık"
          value={site.projectsPage.heroTitle}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              projectsPage: { ...current.projectsPage, heroTitle: value },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Hero açıklama"
          value={site.projectsPage.heroDescription}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              projectsPage: { ...current.projectsPage, heroDescription: value },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Liste üst etiket"
          value={site.projectsPage.listSection.eyebrow}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              projectsPage: {
                ...current.projectsPage,
                listSection: { ...current.projectsPage.listSection, eyebrow: value },
              },
            }))
          }
        />
        <AdminTextField
          label="Liste başlık"
          value={site.projectsPage.listSection.title}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              projectsPage: {
                ...current.projectsPage,
                listSection: { ...current.projectsPage.listSection, title: value },
              },
            }))
          }
        />
        <AdminTextField
          label="Liste açıklama"
          value={site.projectsPage.listSection.description}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              projectsPage: {
                ...current.projectsPage,
                listSection: { ...current.projectsPage.listSection, description: value },
              },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Metrik üst etiket"
          value={site.projectsPage.metricsSection.eyebrow}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              projectsPage: {
                ...current.projectsPage,
                metricsSection: { ...current.projectsPage.metricsSection, eyebrow: value },
              },
            }))
          }
        />
        <AdminTextField
          label="Metrik başlık"
          value={site.projectsPage.metricsSection.title}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              projectsPage: {
                ...current.projectsPage,
                metricsSection: { ...current.projectsPage.metricsSection, title: value },
              },
            }))
          }
        />
        <AdminTextField
          label="Metrik açıklama"
          value={site.projectsPage.metricsSection.description}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              projectsPage: {
                ...current.projectsPage,
                metricsSection: { ...current.projectsPage.metricsSection, description: value },
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
