# Animações de scroll (leves e otimizadas)

Adicionar revelações suaves conforme a pessoa rola a página, funcionando igual no desktop e no celular, sem pesar o carregamento.

## Abordagem

Sem instalar Framer Motion (≈50 kB). Usar `IntersectionObserver` + transições CSS já existentes no design system — resultado visual muito parecido, custo próximo de zero e ótimo desempenho em celulares antigos.

## O que muda

- Novo hook `src/hooks/use-reveal.ts`: observa o elemento e adiciona a classe de "visível" quando ele entra na tela (uma única vez, depois desconecta o observer).
- Novo componente `src/components/Reveal.tsx`: envolve um bloco e aplica a animação, com prop opcional de atraso para efeito escalonado.
- `src/styles.css`: utilitários `reveal` / `reveal-visible` com `opacity` + `translateY(16px)`, duração ~0.7s, easing suave. Anima apenas `opacity` e `transform` (compositor da GPU, sem reflow).
- `src/routes/index.tsx`: aplicar nos blocos que fazem sentido —
  - Capa: monograma, nomes e data aparecem em sequência ao carregar.
  - Convite: título, frase e parágrafo.
  - Fotos e o bloco "O nosso tempo".
  - Cerimônia/recepção: título e os dois cartões.
  - Presentes: cabeçalho e cada card com atraso escalonado curto (limitado, para não atrasar itens da lista longa).
  - Rodapé.
- Ornamentos (ícones do pattern) ganham um fade-in bem sutil, sem deslocamento.

## Cuidados de performance e acessibilidade

- `prefers-reduced-motion: reduce` → conteúdo aparece direto, sem animação.
- Deslocamento menor no mobile (8–10px) para evitar sensação de travamento.
- `rootMargin` negativo pequeno para disparar um pouco antes do elemento entrar totalmente.
- Nada de animação em `height`/`top`, nenhum listener de `scroll`, nenhum re-render em cada frame.
- Sem impacto no SSR: estado inicial visível caso o JS não execute (fallback via `noscript`-safe: a classe base só esconde quando o hook monta).
