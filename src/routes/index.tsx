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
              Casamento
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
              “PARA QUE TODOS VEJAM, SAIBAM, CONSIDEREM E JUNTAMENTE ENTENDAM QUE A
              MÃO DO SENHOR FEZ ISSO.
              <span className="mt-2 block text-sm font-sans not-italic tracking-normal opacity-70">
                Isaías 41:20
              </span>
              ”
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-sm leading-loose text-muted-foreground">
              O que vivemos até aqui não foi acaso. Foi cuidado, encontro e
              propósito. Entre tantos caminhos possíveis, Deus conduziu os nossos
              passos até que nossas histórias se encontrassem.
              <br />
              <br />
              Agora, diante d’Ele e cercados por aqueles que amamos, vamos celebrar
              o início de um novo capítulo: a nossa vida a dois.
              <br />
              <br />
              Este espaço foi criado para compartilhar um pouquinho desse momento
              tão especial e, principalmente, para que você faça parte dele.
              Porque algumas histórias são ainda mais bonitas quando celebradas ao
              lado de quem amamos.
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
              NOSSA HISTÓRIA
            </p>
            <div className="rule-line" />
            <div className="mx-auto max-w-lg space-y-4 text-sm leading-loose text-muted-foreground">
              <p className="font-display text-xl italic text-foreground">
                Uma história que se iniciou na época colegial.
              </p>
              <p>
                O que começou com um pirulito de chocolate e uma mensagem no
                Facebook, aos poucos, ganhou novos capítulos, cresceu com o tempo
                e se transformou em uma história que hoje escolhemos viver para
                sempre.
              </p>
              <p>
                E aquilo que um dia começou de um jeito tão simples nos trouxe até
                aqui: ao nosso sim, à nossa casa e à vida que estamos construindo
                juntos.
              </p>
              <p>
                Hoje, estamos prontos para escrever o capítulo mais bonito da
                nossa história: o nosso matrimônio.
              </p>
            </div>
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
              Onde e quando?
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
                Recepção · 22h
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

function MensagemForm() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome || !mensagem) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    setCarregando(true);
    try {
      const response = await fetch("https://sheetdb.io/api/v1/qowq2p70t611u", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Nome: nome,
              Mensagem: mensagem,
              Data: new Date().toLocaleString("pt-BR"),
            },
          ],
        }),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso! ❤️");
        setNome("");
        setMensagem("");
      } else {
        throw new Error("Erro ao enviar");
      }
    } catch (error) {
      toast.error("Não foi possível enviar sua mensagem. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="nome"
          className="block text-[0.65rem] tracking-wide-caps text-muted-foreground"
        >
          Seu Nome
        </label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Como quer ser identificado?"
          className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm focus:border-foreground focus:outline-none"
          disabled={carregando}
        />
      </div>
      <div>
        <label
          htmlFor="mensagem"
          className="block text-[0.65rem] tracking-wide-caps text-muted-foreground"
        >
          Sua Mensagem
        </label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Escreva algo bonito para os noivos..."
          rows={4}
          className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm focus:border-foreground focus:outline-none"
          disabled={carregando}
        />
      </div>
      <button
        type="submit"
        disabled={carregando}
        className="group relative w-full overflow-hidden bg-foreground py-4 text-[0.65rem] tracking-wide-caps text-background transition-all hover:opacity-90 disabled:opacity-50"
      >
        <span className={carregando ? "opacity-0" : "opacity-100"}>
          Enviar Mensagem
        </span>
        {carregando && (
          <span className="absolute inset-0 flex items-center justify-center">
            Carregando...
          </span>
        )}
      </button>
    </form>
  );
}
