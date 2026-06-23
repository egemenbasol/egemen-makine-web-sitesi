"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import type { Service, SiteContent } from "@/lib/site-types";

type SiteAdminContextValue = {
  site: SiteContent;
  setSite: React.Dispatch<React.SetStateAction<SiteContent>>;
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  githubEnabled: boolean;
  message: string;
  error: string;
  loading: boolean;
  setMessage: (value: string) => void;
  setError: (value: string) => void;
  setLoading: (value: boolean) => void;
  saveSite: () => Promise<void>;
};

const SiteAdminContext = createContext<SiteAdminContextValue | null>(null);

export function SiteAdminProvider({
  initialSite,
  initialServices,
  initialProjects,
  githubEnabled,
  children,
}: {
  initialSite: SiteContent;
  initialServices: Service[];
  initialProjects: Project[];
  githubEnabled: boolean;
  children: React.ReactNode;
}) {
  const [site, setSite] = useState(initialSite);
  const [services, setServices] = useState(initialServices);
  const [projects, setProjects] = useState(initialProjects);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const value = useMemo<SiteAdminContextValue>(
    () => ({
      site,
      setSite,
      services,
      setServices,
      projects,
      setProjects,
      githubEnabled,
      message,
      error,
      loading,
      setMessage,
      setError,
      setLoading,
      saveSite: async () => {
        setLoading(true);
        setError("");
        setMessage("");

        const response = await fetch("/api/admin/site", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(site),
        });

        const data = (await response.json()) as { error?: string; message?: string };
        setLoading(false);

        if (!response.ok) {
          setError(data.error ?? "Kayıt başarısız.");
          return;
        }

        setMessage(data.message ?? "Site içeriği kaydedildi.");
      },
    }),
    [site, services, projects, githubEnabled, message, error, loading],
  );

  return <SiteAdminContext.Provider value={value}>{children}</SiteAdminContext.Provider>;
}

export function useSiteAdmin() {
  const context = useContext(SiteAdminContext);

  if (!context) {
    throw new Error("useSiteAdmin yalnızca SiteAdminProvider içinde kullanılabilir.");
  }

  return context;
}
