import { company } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-5 py-3 text-sm font-black text-white shadow-2xl shadow-emerald-900/30 transition hover:-translate-y-1 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300/40"
      aria-label="Egemen Makine ile WhatsApp üzerinden iletişime geçin"
    >
      <span className="grid size-7 place-items-center rounded-full bg-white/18">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
          <path d="M20.52 3.48A11.76 11.76 0 0 0 12.16 0C5.72 0 .47 5.24.47 11.69c0 2.06.54 4.07 1.56 5.85L.38 23.55l6.15-1.61a11.7 11.7 0 0 0 5.62 1.43h.01c6.45 0 11.7-5.24 11.7-11.69 0-3.12-1.22-6.06-3.34-8.2Zm-8.36 17.92h-.01a9.74 9.74 0 0 1-4.96-1.36l-.36-.21-3.65.96.97-3.56-.23-.37a9.72 9.72 0 0 1-1.49-5.17c0-5.36 4.37-9.73 9.74-9.73a9.66 9.66 0 0 1 6.88 2.86 9.68 9.68 0 0 1 2.85 6.87c0 5.37-4.37 9.72-9.74 9.72Zm5.34-7.28c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.19.29-.77.95-.94 1.14-.17.2-.35.22-.64.08-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.06.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.73-.71 1.98-1.39.24-.68.24-1.26.17-1.39-.07-.12-.27-.2-.56-.34Z" />
        </svg>
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
