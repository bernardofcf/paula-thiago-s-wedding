import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import monogramaBranco from "@/assets/monograma-branco.png";
import monogramaPreto from "@/assets/monograma-preto.png";
import iconeIgreja from "@/assets/icons/igreja.png";
import iconeMapa from "@/assets/icons/mapa.png";
import casal1 from "@/assets/casal-1.jpg";
import casal2 from "@/assets/casal-2.jpg";
import { presentes, type Presente } from "@/data/presentes";
import { formatarBRL } from "@/lib/pix";
import { PresenteDialog } from "@/components/PresenteDialog";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paula & Thiago — Casamento 24.10.2026" },
      {
        name: "description",
        content:
          "Paula e Thiago se casam em 24 de outubro de 2026, na Catedral Metropolitana de Belém. Veja a lista de presentes com PIX.",
      },
      { property: "og:title", content: "Paula & Thiago — Casamento 24.10.2026" },
      {
        property: "og:description",
        content:
          "Cerimônia às 20h na Igreja da Sé e recepção na Usina 265. Lista de presentes com PIX.",
      },
    ],
  }),
  component: Home,
});

function Ornamento({
  src,
  className,
  invertido = false,
}: {
  src: string;
  className?: string;
  invertido?: boolean;
}) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      loading="lazy"
      decoding="async"
      className={`pointer-events-none absolute select-none ${
        invertido ? "opacity-25 invert" : "opacity-25"
      } ${className ?? ""}`}
    />
  );
}

function Home() {
  const [selecionado, setSelecionado] = useState<Presente | null>(null);

  return (
    <main className="bg-background">
      {/* Capa */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-foreground px-6 py-20 text-center">
        <div className="relative">
          <Reveal>
            <img
              src={monogramaBranco}
              alt="Monograma Paula e Thiago"
              width={200}
              height={160}
              fetchPriority="high"
              className="mx-auto w-24 opacity-95 md:w-40"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-[0.6rem] tracking-wide-caps text-background/60">
              Vamos nos casar
            </p>
          </Reveal>
          <Reveal delay={220}>
            <h1 className="mt-5 font-script text-5xl leading-[1.1] text-background sm:text-6xl md:text-8xl">
              Paula <span className="font-display italic">e</span> Thiago
            </h1>
          </Reveal>
          <Reveal delay={340}>
            <p className="mt-8 text-[0.6rem] leading-relaxed tracking-wide-caps text-background/70 sm:text-[0.7rem]">
              24 · Outubro · 2026
              <span className="mt-2 block">Belém, Pará</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Convite */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[0.6rem] tracking-wide-caps text-muted-foreground">
              O nosso convite
            </p>
            <div className="rule-line" />
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-2xl leading-relaxed italic md:text-3xl">
              “Há encontros que parecem combinados muito antes da gente nascer.
              O nosso foi assim.”
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-sm leading-loose text-muted-foreground">
              Depois de tantos caminhos, escolhemos um só — e ele passa por você.
              Será uma alegria imensa ter quem amamos por perto no dia em que
              dissermos sim diante de Deus. Venha celebrar, rir, chorar um pouco e
              dançar até o fim da noite conosco.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Fotos */}
      <section className="mx-auto max-w-4xl px-6 pb-20 md:pb-28">
        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal>
            <img
              src={casal1}
              alt="Paula e Thiago abraçados"
              width={1200}
              height={1500}
              loading="lazy"
              decoding="async"
              className="h-64 w-full object-cover md:h-80"
            />
          </Reveal>
          <Reveal delay={120}>
            <img
              src={casal2}
              alt="Paula e Thiago de mãos dadas"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-64 w-full object-cover md:h-80"
            />
          </Reveal>
        </div>
        <Reveal delay={100} className="mt-4 block">
          <div className="bg-secondary px-8 py-12 text-center">
            <p className="text-[0.6rem] tracking-wide-caps text-muted-foreground">
              O nosso tempo
            </p>
            <div className="rule-line" />
            <p className="mx-auto max-w-md font-display text-xl leading-relaxed italic">
              Uma história que veio devagar, virou casa — e agora vira promessa.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Cerimônia e recepção */}
      <section className="relative overflow-hidden bg-foreground px-6 py-20 text-background md:py-28">
        <Ornamento
          src={iconeIgreja}
          className="left-4 top-10 w-14 md:left-16 md:w-20"
          invertido
        />
        <Ornamento
          src={iconeMapa}
          className="bottom-10 right-4 w-16 md:right-16 md:w-24"
          invertido
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-[0.65rem] tracking-wide-caps text-background/60">
              Sábado, 24 de outubro de 2026
            </p>
            <h2 className="mt-6 font-script text-5xl text-background md:text-6xl">
              Onde e quando
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-14">
            <Reveal delay={120}>
              <p className="text-[0.65rem] tracking-wide-caps text-background/60">
                Cerimônia · 20h
              </p>
              <h3 className="mt-4 font-display text-2xl text-background">
                Catedral Metropolitana de Belém
              </h3>
              <p className="mt-2 text-sm text-background/70">
                Igreja da Sé — Cidade Velha, Belém/PA
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="text-[0.65rem] tracking-wide-caps text-background/60">
                Recepção · logo após
              </p>
              <h3 className="mt-4 font-display text-2xl text-background">
                Usina 265
              </h3>
              <p className="mt-2 text-sm text-background/70">
                R. Municipalidade, 265 — Reduto, Belém/PA
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <p className="mt-16 text-[0.65rem] tracking-wide-caps text-background/60">
              Traje · Passeio completo
            </p>
          </Reveal>
        </div>
      </section>

      {/* Lista de presentes */}
      <section
        id="presentes"
        className="relative mx-auto max-w-6xl overflow-hidden px-6 py-20 md:py-28"
      >
        <Reveal className="relative block text-center">
          <p className="text-[0.65rem] tracking-wide-caps text-muted-foreground">
            Lista de presentes
          </p>
          <h2 className="mt-6 font-script text-5xl md:text-6xl">
            Presentear é abençoar
          </h2>
          <div className="rule-line" />
          <p className="mx-auto max-w-xl text-sm leading-loose text-muted-foreground">
            Sua presença já é o maior presente. Mas, se quiser fazer parte do
            nosso começo, escolha um item abaixo: um QR Code PIX com o valor
            exato será gerado na hora.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {presentes.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90}>
              <button
                onClick={() => setSelecionado(p)}
                className="group w-full text-left"
              >
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={p.imagem}
                    alt={p.nome}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl">{p.nome}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {p.descricao}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-display text-lg">
                    {formatarBRL(p.valor)}
                  </span>
                  <span className="text-[0.6rem] tracking-wide-caps text-muted-foreground transition-colors group-hover:text-foreground">
                    Presentear
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mural de Mensagens */}
      <section className="bg-secondary/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-xl">
          <Reveal className="text-center">
            <p className="text-[0.65rem] tracking-wide-caps text-muted-foreground">
              Deixe seu carinho
            </p>
            <h2 className="mt-6 font-script text-5xl md:text-6xl">
              Mensagens aos Noivos
            </h2>
            <div className="rule-line" />
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <MensagemForm />
          </Reveal>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border px-6 py-20 text-center">
        <Reveal>
          <img
            src={monogramaPreto}
            alt="Monograma Paula e Thiago"
            width={140}
            height={112}
            loading="lazy"
            className="mx-auto w-20"
          />
          <p className="mt-8 font-script text-3xl">Com amor, Paula e Thiago</p>
          <p className="mt-6 text-[0.6rem] tracking-wide-caps text-muted-foreground">
            Belém · 24.10.2026
          </p>
        </Reveal>
      </footer>

      <PresenteDialog
        presente={selecionado}
        onClose={() => setSelecionado(null)}
      />
    </main>
  );
}
