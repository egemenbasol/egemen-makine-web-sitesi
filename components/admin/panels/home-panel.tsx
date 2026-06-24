"use client";

import { AdminAlert, AdminSaveBar, AdminSectionCard, AdminTextField } from "@/components/admin/form-fields";
import { useSiteAdmin } from "@/components/admin/site-admin-provider";
import type { SectionContent } from "@/lib/site-types";

function SectionFields({
  label,
  section,
  onChange,
}: {
  label: string;
  section: SectionContent;
  onChange: (section: SectionContent) => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <p className="text-sm font-black text-slate-950">{label}</p>
      <div className="mt-4 space-y-4">
        <AdminTextField
          label="Üst etiket"
          value={section.eyebrow}
          onChange={(value) => onChange({ ...section, eyebrow: value })}
        />
        <AdminTextField
          label="Başlık"
          value={section.title}
          onChange={(value) => onChange({ ...section, title: value })}
        />
        <AdminTextField
          label="Açıklama"
          value={section.description}
          onChange={(value) => onChange({ ...section, description: value })}
          multiline
        />
      </div>
    </div>
  );
}

export function HomePanel() {
  const { site, setSite, saveSite, loading, message, error } = useSiteAdmin();

  return (
    <div className="space-y-6">
      {message ? <AdminAlert message={message} tone="success" /> : null}
      {error ? <AdminAlert message={error} tone="error" /> : null}

      <AdminSectionCard title="Ana sayfa hero" description="Ziyaretçilerin ilk gördüğü bölüm.">
        <AdminTextField
          label="Ana başlık"
          value={site.home.heroTitle}
          onChange={(value) => setSite((current) => ({ ...current, home: { ...current.home, heroTitle: value } }))}
          multiline
        />
        <AdminTextField
          label="Birincil buton"
          value={site.home.heroPrimaryButton}
          onChange={(value) =>
            setSite((current) => ({ ...current, home: { ...current.home, heroPrimaryButton: value } }))
          }
        />
        <AdminTextField
          label="İkincil buton"
          value={site.home.heroSecondaryButton}
          onChange={(value) =>
            setSite((current) => ({ ...current, home: { ...current.home, heroSecondaryButton: value } }))
          }
        />
        <AdminTextField
          label="Görsel rozet"
          value={site.home.visualBadge}
          onChange={(value) =>
            setSite((current) => ({ ...current, home: { ...current.home, visualBadge: value } }))
          }
        />
        <AdminTextField
          label="Görsel üst metin"
          value={site.home.visualEyebrow}
          onChange={(value) =>
            setSite((current) => ({ ...current, home: { ...current.home, visualEyebrow: value } }))
          }
        />
        <AdminTextField
          label="Görsel başlık"
          value={site.home.visualTitle}
          onChange={(value) =>
            setSite((current) => ({ ...current, home: { ...current.home, visualTitle: value } }))
          }
        />
      </AdminSectionCard>

      <AdminSectionCard title="Ana sayfa bölümleri">
        <SectionFields
          label="Projeler bölümü"
          section={site.home.projectsSection}
          onChange={(section) =>
            setSite((current) => ({
              ...current,
              home: { ...current.home, projectsSection: { ...section, buttonLabel: current.home.projectsSection.buttonLabel } },
            }))
          }
        />
        <AdminTextField
          label="Projeler butonu"
          value={site.home.projectsSection.buttonLabel}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              home: {
                ...current.home,
                projectsSection: { ...current.home.projectsSection, buttonLabel: value },
              },
            }))
          }
        />
        <SectionFields
          label="Süreç bölümü"
          section={site.home.processSection}
          onChange={(section) =>
            setSite((current) => ({ ...current, home: { ...current.home, processSection: section } }))
          }
        />
        <AdminSaveBar onSave={saveSite} loading={loading} />
      </AdminSectionCard>
    </div>
  );
}
