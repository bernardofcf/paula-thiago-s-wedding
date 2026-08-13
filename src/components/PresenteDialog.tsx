import { useEffect, useState } from "react";
import QRCode from "qrcode";
import type { Presente } from "@/data/presentes";
import { formatarBRL, gerarPixPayload } from "@/lib/pix";

type Props = {
  presente: Presente | null;
  onClose: () => void;
};

export function PresenteDialog({ presente, onClose }: Props) {
  const [qr, setQr] = useState<string | null>(null);
  const [copiado, setCopiado] = useState(false);

  const payload = presente ? gerarPixPayload(presente.valor, presente.id) : "";

  useEffect(() => {
    setCopiado(false);
    setQr(null);
    if (!presente) return;
    QRCode.toDataURL(payload, {
      margin: 1,
      width: 640,
      color: { dark: "#111111", light: "#ffffff" },
    }).then(setQr);
  }, [presente, payload]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!presente) return null;

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(payload);
    } catch {
      const el = document.createElement("textarea");
      el.value = payload;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-foreground/70 px-4 py-10 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Presentear ${presente.nome}`}
    >
      <div
        className="animate-fade-up w-full max-w-md border border-border bg-card p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="ml-auto block text-xs tracking-wide-caps text-muted-foreground transition-colors hover:text-foreground"
        >
          Fechar
        </button>

        <p className="mt-2 text-[0.65rem] tracking-wide-caps text-muted-foreground">
          Presente escolhido
        </p>
        <h3 className="mt-3 font-display text-3xl">{presente.nome}</h3>
        <p className="mt-1 font-display text-xl text-muted-foreground">
          {formatarBRL(presente.valor)}
        </p>

        <div className="rule-line" />

        <div className="mx-auto flex h-56 w-56 items-center justify-center border border-border bg-secondary p-3">
          {qr ? (
            <img
              src={qr}
              alt={`QR Code PIX de ${formatarBRL(presente.valor)}`}
              width={224}
              height={224}
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="text-xs tracking-wide-caps text-muted-foreground">
              Gerando…
            </span>
          )}
        </div>

        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
          Escaneie o QR Code no app do seu banco ou copie o código PIX abaixo.
          O valor já vem preenchido.
        </p>

        <p className="mt-4 max-h-24 overflow-y-auto border border-border bg-secondary p-3 text-left font-mono text-[0.6rem] leading-relaxed break-all text-muted-foreground">
          {payload}
        </p>

        <button
          onClick={copiar}
          className="mt-4 w-full bg-primary px-6 py-3 text-[0.7rem] tracking-wide-caps text-primary-foreground transition-opacity hover:opacity-85"
        >
          {copiado ? "Código copiado" : "Copiar código PIX"}
        </button>
      </div>
    </div>
  );
}
