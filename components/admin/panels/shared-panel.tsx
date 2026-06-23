"use client";

import { AdminAlert, AdminSaveBar, AdminSectionCard, AdminTextField } from "@/components/admin/form-fields";
import { useSiteAdmin } from "@/components/admin/site-admin-provider";

export function SharedPanel() {
  const { site, setSite, saveSite, loading, message, error } = useSiteAdmin();

  function updateStringList(key: "serviceDeliverables" | "servicePrinciples" | "contactTips", value: string) {
    setSite((current) => ({
      ...current,
      [key]: value
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
    }));
  }

  return (
    <div className="space-y-6">
      {message ? <AdminAlert message={message} tone="success" /> : null}
      {error ? <AdminAlert message={error} tone="error" /> : null}

      <AdminSectionCard title="İstatistikler" description="Ana sayfa ve hakkımızda sayfasında görünür.">
        {site.stats.map((stat, index) => (
          <div key={`stat-${index}`} className="grid gap-4 rounded-2xl border border-slate-200 p-4 md:grid-cols-2">
            <AdminTextField
              label={`İstatistik ${index + 1} değer`}
              value={stat.value}
              onChange={(value) =>
                setSite((current) => ({
                  ...current,
                  stats: current.stats.map((item, itemIndex) =>
                    itemIndex === index ? { ...item, value } : item,
                  ),
                }))
              }
            />
            <AdminTextField
              label={`İstatistik ${index + 1} etiket`}
              value={stat.label}
              onChange={(value) =>
                setSite((current) => ({
                  ...current,
                  stats: current.stats.map((item, itemIndex) =>
                    itemIndex === index ? { ...item, label: value } : item,
                  ),
                }))
              }
            />
          </div>
        ))}
      </AdminSectionCard>

      <AdminSectionCard title="Üretim süreci adımları">
        {site.processSteps.map((step, index) => (
          <div key={`step-${index}`} className="rounded-2xl border border-slate-200 p-4">
            <AdminTextField
              label={`Adım ${index + 1} başlık`}
              value={step.title}
              onChange={(value) =>
                setSite((current) => ({
                  ...current,
                  processSteps: current.processSteps.map((item, itemIndex) =>
                    itemIndex === index ? { ...item, title: value } : item,
                  ),
                }))
              }
            />
            <div className="mt-4">
              <AdminTextField
                label={`Adım ${index + 1} açıklama`}
                value={step.detail}
                onChange={(value) =>
                  setSite((current) => ({
                    ...current,
                    processSteps: current.processSteps.map((item, itemIndex) =>
                      itemIndex === index ? { ...item, detail: value } : item,
                    ),
                  }))
                }
                multiline
              />
            </div>
          </div>
        ))}
      </AdminSectionCard>

      <AdminSectionCard title="Şirket ilkeleri">
        {site.principles.map((principle, index) => (
          <div key={`principle-${index}`} className="rounded-2xl border border-slate-200 p-4">
            <AdminTextField
              label={`İlke ${index + 1} başlık`}
              value={principle.title}
              onChange={(value) =>
                setSite((current) => ({
                  ...current,
                  principles: current.principles.map((item, itemIndex) =>
                    itemIndex === index ? { ...item, title: value } : item,
                  ),
                }))
              }
            />
            <div className="mt-4">
              <AdminTextField
                label={`İlke ${index + 1} metin`}
                value={principle.text}
                onChange={(value) =>
                  setSite((current) => ({
                    ...current,
                    principles: current.principles.map((item, itemIndex) =>
                      itemIndex === index ? { ...item, text: value } : item,
                    ),
                  }))
                }
                multiline
              />
            </div>
          </div>
        ))}
      </AdminSectionCard>

      <AdminSectionCard title="Proje metrikleri">
        {site.projectMetrics.map((metric, index) => (
          <div key={`metric-${index}`} className="grid gap-4 rounded-2xl border border-slate-200 p-4 md:grid-cols-2">
            <AdminTextField
              label={`Metrik ${index + 1} değer`}
              value={metric.value}
              onChange={(value) =>
                setSite((current) => ({
                  ...current,
                  projectMetrics: current.projectMetrics.map((item, itemIndex) =>
                    itemIndex === index ? { ...item, value } : item,
                  ),
                }))
              }
            />
            <AdminTextField
              label={`Metrik ${index + 1} etiket`}
              value={metric.label}
              onChange={(value) =>
                setSite((current) => ({
                  ...current,
                  projectMetrics: current.projectMetrics.map((item, itemIndex) =>
                    itemIndex === index ? { ...item, label: value } : item,
                  ),
                }))
              }
            />
          </div>
        ))}
      </AdminSectionCard>

      <AdminSectionCard title="Liste içerikleri" description="Her satıra bir madde yazın.">
        <AdminTextField
          label="Hizmet teslimatları"
          value={site.serviceDeliverables.join("\n")}
          onChange={(value) => updateStringList("serviceDeliverables", value)}
          multiline
        />
        <AdminTextField
          label="Hizmet ilkeleri"
          value={site.servicePrinciples.join("\n")}
          onChange={(value) => updateStringList("servicePrinciples", value)}
          multiline
        />
        <AdminTextField
          label="İletişim ipuçları"
          value={site.contactTips.join("\n")}
          onChange={(value) => updateStringList("contactTips", value)}
          multiline
        />
        <AdminSaveBar onSave={saveSite} loading={loading} />
      </AdminSectionCard>
    </div>
  );
}
