import { readJsonFile, writeJsonFile } from "@/lib/content-files";
import { createProjectId } from "@/lib/projects";
import type { Service, ServiceInput } from "@/lib/site-types";

const SERVICES_FILE = "content/services.json";

function sortServices(services: Service[]): Service[] {
  return [...services].sort((a, b) => a.order - b.order);
}

export async function loadServices(): Promise<Service[]> {
  const services = await readJsonFile<Service[]>(SERVICES_FILE);
  return sortServices(services);
}

export async function loadPublishedServices(): Promise<Service[]> {
  const services = await loadServices();
  return services.filter((service) => service.published);
}

async function saveServices(services: Service[], message: string): Promise<void> {
  await writeJsonFile(SERVICES_FILE, sortServices(services), message);
}

function normalizeServiceInput(input: ServiceInput, existingIds: string[]): Service {
  const id = input.id ?? createProjectId(input.title, existingIds);
  const slug = input.slug.trim() || id;

  return {
    id,
    title: input.title.trim(),
    slug,
    summary: input.summary.trim(),
    details: input.details.trim(),
    metrics: input.metrics.trim(),
    published: input.published,
    order: input.order ?? existingIds.length + 1,
  };
}

export async function createService(input: ServiceInput): Promise<Service> {
  const services = await loadServices();
  const service = normalizeServiceInput(
    { ...input, order: input.order ?? services.length + 1 },
    services.map((item) => item.id),
  );

  await saveServices([...services, service], `Admin: ${service.title} hizmeti eklendi`);
  return service;
}

export async function updateService(id: string, input: ServiceInput): Promise<Service> {
  const services = await loadServices();
  const index = services.findIndex((service) => service.id === id);

  if (index === -1) {
    throw new Error("Hizmet bulunamadı.");
  }

  const existingIds = services.map((service) => service.id).filter((serviceId) => serviceId !== id);
  const updated = normalizeServiceInput(
    { ...input, id, order: input.order ?? services[index].order },
    existingIds,
  );

  const nextServices = [...services];
  nextServices[index] = updated;
  await saveServices(nextServices, `Admin: ${updated.title} hizmeti güncellendi`);
  return updated;
}

export async function deleteService(id: string): Promise<void> {
  const services = await loadServices();
  const service = services.find((item) => item.id === id);

  if (!service) {
    throw new Error("Hizmet bulunamadı.");
  }

  const nextServices = services
    .filter((item) => item.id !== id)
    .map((item, index) => ({ ...item, order: index + 1 }));

  await saveServices(nextServices, `Admin: ${service.title} hizmeti silindi`);
}
