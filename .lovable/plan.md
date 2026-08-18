# Mural de recados dos convidados

Sim, dá para os convidados deixarem mensagens no site. Duas rotas possíveis: WhatsApp (sem registro, mensagens perdidas em conversas soltas) ou um mural próprio com banco de dados. Escolhi o mural, porque as mensagens ficam guardadas, aparecem no site e continuam funcionando no deploy do Cloudflare — o site só conversa com o backend do Lovable Cloud.

## O que será feito

1. **Ativar o Lovable Cloud** (banco de dados + login), sem contas externas.
2. **Seção "Deixe seu recado"** na página, logo antes do rodapé, no mesmo estilo visual (Cormorant/Jost, fundo marfim, filete decorativo, animação de entrada por scroll).
   - Campos: nome e mensagem (limite de caracteres), botão "Enviar recado".
   - Confirmação carinhosa após o envio: "Recebemos seu recado — obrigado!".
3. **Moderação**: a mensagem entra como pendente e só aparece publicamente depois que os noivos aprovarem. Isso evita spam e recado indevido num site que fica aberto na internet.
4. **Mural público**: lista das mensagens aprovadas abaixo do formulário, com nome, texto e data, em cartões discretos.
5. **Página dos noivos** (`/recados`, protegida por login): lista de recados pendentes com botões Aprovar / Excluir, e a lista dos já aprovados. Só quem tiver conta de administrador enxerga.

## Detalhes técnicos

- Tabela `recados` no Lovable Cloud: `id`, `nome`, `mensagem`, `aprovado` (bool, default false), `created_at`.
- GRANTs explícitos + RLS:
  - `anon`/`authenticated` podem inserir (com validação de tamanho no banco);
  - leitura pública apenas de linhas com `aprovado = true`;
  - leitura de tudo e update/delete só para quem tem papel `admin`.
- Papéis em tabela separada `user_roles` + função `has_role` (security definer) — nunca papel no perfil.
- Leitura pública via server function com chave publicável; envio pelo cliente; moderação via server functions autenticadas sob `_authenticated`.
- Página de login em `/auth` (email + senha) só para os noivos; nada de cadastro aberto de admin.
- Rota `/recados` fica sob o layout autenticado e é marcada como `noindex`.

## Observação sobre o deploy

O mural exige que o site chame o backend, então continua funcionando no Cloudflare normalmente. O único ponto: as variáveis de ambiente do Lovable Cloud precisam estar configuradas no deploy do Cloudflare — te passo os valores quando estiver pronto.
