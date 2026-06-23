type WhatsAppButtonProps = {
  whatsapp: string;
};

export function WhatsAppButton({ whatsapp }: WhatsAppButtonProps) {
  return (
    <a
      href={whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-lg font-black text-white shadow-2xl shadow-emerald-500/30 transition hover:scale-105"
    >
      WA
    </a>
  );
}
