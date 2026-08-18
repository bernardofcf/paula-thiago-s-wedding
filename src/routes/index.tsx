import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

const monogramaBranco = "/img/monograma-branco.png";
const monogramaPreto = "/img/monograma-preto.png";
const iconeIgreja = "/icons/igreja.png";
const iconeMapa = "/icons/mapa.png";
const casal1 = "/img/casal-1.jpeg";
const casal2 = "/img/casal-2.jpeg";
const casal3 = "/img/casal-3.jpeg";
const casal4 = "/img/casal-4.jpeg";
const casalIlustracao = "/img/casal-ilustracao.jpeg";

import { formatarBRL } from "@/lib/pix";
import { Reveal } from "@/components/Reveal";
import QRCode from "qrcode";
import { useEffect } from "react";
import { gerarPixPayload } from "@/lib/pix";

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
              alt="Paula e Thiago"
              width={1200}
              height={1500}
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover md:h-96"
            />
          </Reveal>
          <Reveal delay={120}>
            <img
              src={casal2}
              alt="Paula e Thiago"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover md:h-96"
            />
          </Reveal>
          <Reveal delay={240}>
            <img
              src={casal3}
              alt="Paula e Thiago"
              width={1200}
              height={1500}
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover md:h-96"
            />
          </Reveal>
          <Reveal delay={360}>
            <img
              src={casal4}
              alt="Paula e Thiago"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover md:h-96"
            />
          </Reveal>
        </div>
        
        <Reveal delay={100} className="mt-12 block">
          <div className="flex flex-col items-center">
            <img 
              src={casalIlustracao} 
              alt="Ilustração do casal" 
              className="mx-auto mb-8 w-48 rounded-full border-4 border-secondary grayscale md:w-64"
            />
          </div>
          <div className="w-full bg-secondary px-8 py-12 text-center">
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

      {/* Sobre presentes */}
      <section
        id="presentes"
        className="relative mx-auto max-w-6xl overflow-hidden px-6 py-20 md:py-28"
      >
        <Reveal className="relative block text-center">
          <p className="text-[0.65rem] tracking-wide-caps text-muted-foreground">
            Sobre presentes
          </p>
          <h2 className="mt-6 font-script text-5xl md:text-6xl">
            Sobre presentes
          </h2>
          <div className="rule-line" />
          <p className="mx-auto max-w-xl text-sm leading-loose text-muted-foreground">
            Se desejarem nos presentear, disponibilizamos uma opção prática
            através do pix ❤️
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-12 flex flex-col items-center">
          <PixGenerico />
        </Reveal>
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

        <Reveal delay={200} className="mx-auto mt-20 max-w-5xl">
          <MuralMensagens />
        </Reveal>
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
    </main>
  );
}


function PixGenerico() {
  const [qr, setQr] = useState<string | null>(null);
  const [copiado, setCopiado] = useState(false);
  const payload = gerarPixPayload(0, "PRESENTE");

  useEffect(() => {
    QRCode.toDataURL(payload, {
      margin: 1,
      width: 640,
      color: { dark: "#111111", light: "#ffffff" },
    }).then(setQr);
  }, [payload]);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(payload);
      toast.success("Código PIX copiado! ❤️");
    } catch {
      toast.error("Não foi possível copiar o código.");
    }
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  return (
    <div className="w-full max-w-sm border border-border bg-card p-8 text-center shadow-sm">
      <div className="mx-auto flex h-64 w-64 items-center justify-center border border-border bg-secondary p-4">
        {qr ? (
          <img
            src={qr}
            alt="QR Code PIX"
            className="h-full w-full object-contain"
          />
        ) : (
          <span className="text-xs tracking-wide-caps text-muted-foreground">
            Gerando...
          </span>
        )}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        Escaneie o QR Code acima ou copie o código PIX abaixo para presentear
        com o valor que desejar.
      </p>

      <button
        onClick={copiar}
        className="mt-6 w-full bg-foreground py-4 text-[0.65rem] tracking-wide-caps text-background transition-opacity hover:opacity-90"
      >
        {copiado ? "Código copiado" : "Copiar código PIX"}
      </button>
    </div>
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
      const response = await fetch("https://script.google.com/macros/s/AKfycbwnth7NN2S1SPOYDkdrLYZFhLPvXWnZ-tkUf_ymuGEwlsL5uUv1S52GUzKkypGisSJAPg/exec", {
        method: "POST",
        mode: "no-cors",
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          nome: nome,
          mensagem: mensagem,
        }),
      });

      // Google Apps Script with no-cors will return an opaque response, 
      // but if it doesn't throw, it likely succeeded.
      toast.success("Mensagem enviada com sucesso! ❤️");
      setNome("");
      setMensagem("");
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


function MuralMensagens() {
  const [mensagens, setMensagens] = useState<{ nome: string; mensagem: string; data?: string }[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbwnth7NN2S1SPOYDkdrLYZFhLPvXWnZ-tkUf_ymuGEwlsL5uUv1S52GUzKkypGisSJAPg/exec")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // A API já filtra no backend
          setMensagens(data);
        }
      })
      .catch(() => toast.error("Não foi possível carregar o mural."))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) {
    return (
      <div className="flex justify-center py-10">
        <span className="text-[0.65rem] tracking-wide-caps text-muted-foreground animate-pulse">
          Carregando mensagens...
        </span>
      </div>
    );
  }

  if (mensagens.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {mensagens.map((msg, index) => (
        <Reveal key={index} delay={index * 50} className="h-full">
          <div className="flex h-full flex-col border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
            <div className="mb-4 text-secondary-foreground opacity-20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 6.79086 11.8079 5 14.017 5H19.017C21.2261 5 23.017 6.79086 23.017 9V15C23.017 17.2091 21.2261 19 19.017 19H17.017C16.4647 19 16.017 19.4477 16.017 20V21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H2.017C1.46472 8 1.017 8.44772 1.017 9V12C1.017 12.5523 0.569282 13 0.017 13H-1.983C-2.53528 13 -2.983 12.5523 -2.983 12V9C-2.983 6.79086 -1.19214 5 1.017 5H6.017C8.22614 5 10.017 6.79086 10.017 9V15C10.017 17.2091 8.22614 19 6.017 19H4.017C3.46472 19 3.017 19.4477 3.017 20V21H1.017Z" />
              </svg>
            </div>
            <p className="flex-grow font-display text-base leading-relaxed italic text-foreground/90">
              "{msg.mensagem}"
            </p>
            <div className="mt-6 border-t border-border pt-4">
              <p className="text-[0.65rem] font-bold tracking-wide-caps text-foreground">
                {msg.nome}
              </p>
              {msg.data && (
                <p className="mt-1 text-[0.6rem] text-muted-foreground">
                  {msg.data}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
