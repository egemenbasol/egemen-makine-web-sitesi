"use client";

import { AdminAlert, AdminSaveBar, AdminSectionCard, AdminTextField } from "@/components/admin/form-fields";
import { useSiteAdmin } from "@/components/admin/site-admin-provider";

export function CompanyPanel() {
  const { site, setSite, saveSite, loading, message, error } = useSiteAdmin();

  return (
    <div className="space-y-6">
      {message ? <AdminAlert message={message} tone="success" /> : null}
      {error ? <AdminAlert message={error} tone="error" /> : null}

      <AdminSectionCard
        title="Şirket bilgileri"
        description="Logo altı metin, iletişim bilgileri ve harita ayarları."
      >
        <AdminTextField
          label="Şirket adı"
          value={site.company.name}
          onChange={(value) => setSite((current) => ({ ...current, company: { ...current.company, name: value } }))}
        />
        <AdminTextField
          label="Yasal unvan"
          value={site.company.legalName}
          onChange={(value) =>
            setSite((current) => ({ ...current, company: { ...current.company, legalName: value } }))
          }
        />
        <AdminTextField
          label="Slogan (tagline)"
          value={site.company.tagline}
          onChange={(value) =>
            setSite((current) => ({ ...current, company: { ...current.company, tagline: value } }))
          }
        />
        <AdminTextField
          label="Şirket açıklaması"
          value={site.company.description}
          onChange={(value) =>
            setSite((current) => ({ ...current, company: { ...current.company, description: value } }))
          }
          multiline
        />
        <AdminTextField
          label="Telefon"
          value={site.company.phone}
          onChange={(value) =>
            setSite((current) => ({ ...current, company: { ...current.company, phone: value } }))
          }
        />
        <AdminTextField
          label="E-posta"
          value={site.company.email}
          onChange={(value) =>
            setSite((current) => ({ ...current, company: { ...current.company, email: value } }))
          }
        />
        <AdminTextField
          label="Adres"
          value={site.company.address}
          onChange={(value) =>
            setSite((current) => ({ ...current, company: { ...current.company, address: value } }))
          }
          multiline
        />
        <AdminTextField
          label="WhatsApp mesajı"
          value={site.company.whatsappMessage}
          onChange={(value) =>
            setSite((current) => ({
              ...current,
              company: { ...current.company, whatsappMessage: value },
            }))
          }
          multiline
        />
        <AdminTextField
          label="Harita paylaşım linki"
          value={site.company.mapLink}
          onChange={(value) =>
            setSite((current) => ({ ...current, company: { ...current.company, mapLink: value } }))
          }
        />
        <AdminTextField
          label="Harita embed URL"
          value={site.company.mapEmbed}
          onChange={(value) =>
            setSite((current) => ({ ...current, company: { ...current.company, mapEmbed: value } }))
          }
        />
        <AdminSaveBar onSave={saveSite} loading={loading} />
      </AdminSectionCard>
    </div>
  );
}
