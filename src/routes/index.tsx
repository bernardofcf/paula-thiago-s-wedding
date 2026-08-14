import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import monogramaBranco from "@/assets/monograma-branco.png.asset.json";
import monogramaPreto from "@/assets/monograma-preto.png.asset.json";
import patternPreto from "@/assets/pattern-preto.png.asset.json";
import patternChampanhe from "@/assets/pattern-champanhe.png.asset.json";
import casal1 from "@/assets/casal-1.jpg";
import casal2 from "@/assets/casal-2.jpg";
import { presentes, type Presente } from "@/data/presentes";
import { formatarBRL } from "@/lib/pix";
import { PresenteDialog } from "@/components/PresenteDialog";

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

function Home() {
  const [selecionado, setSelecionado] = useState<Presente | null>(null);

  return (
    <main className="bg-background">
      {/* Capa */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-foreground px-6 py-20 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 opacity-[0.18] invert md:h-56 md:w-56"
          style={{
            backgroundImage: `url(${patternPreto.url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            maskImage:
              "radial-gradient(closest-side, black 40%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-12 left-1/2 h-40 w-40 -translate-x-1/2 rotate-180 opacity-[0.18] invert md:h-56 md:w-56"
          style={{
            backgroundImage: `url(${patternPreto.url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            maskImage:
              "radial-gradient(closest-side, black 40%, transparent 100%)",
          }}
        />
        <div className="relative">
          <img
            src={monogramaBranco.url}
            alt="Monograma Paula e Thiago"
            width={200}
            height={160}
            fetchPriority="high"
            className="mx-auto w-24 opacity-95 md:w-40"
          />
          <p className="mt-8 text-[0.6rem] tracking-wide-caps text-background/60">
            Vamos nos casar
          </p>
          <h1 className="mt-5 font-script text-5xl leading-[1.1] text-background sm:text-6xl md:text-8xl">
            Paula <span className="font-display italic">e</span> Thiago
          </h1>
          <p className="mt-8 text-[0.6rem] leading-relaxed tracking-wide-caps text-background/70 sm:text-[0.7rem]">
            24 · Outubro · 2026
            <span className="mt-2 block">Belém, Pará</span>
          </p>
        </div>
      </section>

      {/* Convite */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 top-6 h-32 w-32 opacity-40 md:h-48 md:w-48"
          style={{
            backgroundImage: `url(${patternChampanhe.url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            maskImage:
              "radial-gradient(closest-side, black 45%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <p className="text-[0.6rem] tracking-wide-caps text-muted-foreground">
            O nosso convite
          </p>
          <div className="rule-line" />
          <p className="font-display text-2xl leading-relaxed italic md:text-3xl">
            “Há encontros que parecem combinados muito antes da gente nascer.
            O nosso foi assim.”
          </p>
          <p className="mt-8 text-sm leading-loose text-muted-foreground">
            Depois de tantos caminhos, escolhemos um só — e ele passa por você.
            Será uma alegria imensa ter quem amamos por perto no dia em que
            dissermos sim diante de Deus. Venha celebrar, rir, chorar um pouco e
            dançar até o fim da noite conosco.
          </p>
        </div>
      </section>


      {/* Fotos */}
      <section className="mx-auto max-w-4xl px-6 pb-20 md:pb-28">
        <div className="grid gap-4 sm:grid-cols-2">
          <img
            src={casal1}
            alt="Paula e Thiago abraçados"
            width={1200}
            height={1500}
            loading="lazy"
            decoding="async"
            className="h-64 w-full object-cover md:h-80"
          />
          <img
            src={casal2}
            alt="Paula e Thiago de mãos dadas"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-64 w-full object-cover md:h-80"
          />
        </div>
        <div className="mt-4 bg-secondary px-8 py-12 text-center">
          <p className="text-[0.6rem] tracking-wide-caps text-muted-foreground">
            O nosso tempo
          </p>
          <div className="rule-line" />
          <p className="mx-auto max-w-md font-display text-xl leading-relaxed italic">
            Uma história que veio devagar, virou casa — e agora vira promessa.
          </p>
        </div>
      </section>


      {/* Cerimônia e recepção */}
      <section className="relative overflow-hidden bg-foreground px-6 py-20 text-background md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-12 bottom-0 h-36 w-36 opacity-[0.15] invert md:h-52 md:w-52"
          style={{
            backgroundImage: `url(${patternPreto.url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            maskImage:
              "radial-gradient(closest-side, black 45%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl text-center">

          <p className="text-[0.65rem] tracking-wide-caps text-background/60">
            Sábado, 24 de outubro de 2026
          </p>
          <h2 className="mt-6 font-script text-5xl text-background md:text-6xl">
            Onde e quando
          </h2>

          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-14">
            <div>
              <p className="text-[0.65rem] tracking-wide-caps text-background/60">
                Cerimônia · 20h
              </p>
              <h3 className="mt-4 font-display text-2xl text-background">
                Catedral Metropolitana de Belém
              </h3>
              <p className="mt-2 text-sm text-background/70">
                Igreja da Sé — Cidade Velha, Belém/PA
              </p>
            </div>
            <div>
              <p className="text-[0.65rem] tracking-wide-caps text-background/60">
                Recepção · logo após
              </p>
              <h3 className="mt-4 font-display text-2xl text-background">
                Usina 265
              </h3>
              <p className="mt-2 text-sm text-background/70">
                R. Municipalidade, 265 — Reduto, Belém/PA
              </p>
            </div>
          </div>

          <p className="mt-16 text-[0.65rem] tracking-wide-caps text-background/60">
            Traje · Passeio completo
          </p>
        </div>
      </section>

      {/* Lista de presentes */}
      <section id="presentes" className="mx-auto max-w-6xl px-6 py-28">
        <div className="text-center">
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
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {presentes.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelecionado(p)}
              className="group text-left"
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
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border px-6 py-20 text-center">
        <img
          src={monogramaPreto.url}
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
      </footer>

      <PresenteDialog
        presente={selecionado}
        onClose={() => setSelecionado(null)}
      />
    </main>
  );
}
