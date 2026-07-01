# Recriar a landing page "Aurora Mental"

Vou reconstruir fielmente a landing page do arquivo HTML enviado como a página inicial do app, adaptada para a stack do projeto (TanStack Start + React).

## O que será construído

Uma página única (rota `/`) em português, com todas as seções do original:

1. **Navbar fixa** — logo + botão CTA ("Agendar")
2. **Hero** — eyebrow, título em 3 linhas animadas, subtítulo, botões (primário/secundário), badges e imagem lateral
3. **Identificação** — fundo escuro, grade de sintomas com ícones e frase de destaque
4. **Como funciona** — 4 passos numerados + card de destaque "Encontro Aurora"
5. **Sobre a Larissa** — foto com moldura arredondada + badge, texto e credenciais
6. **Depoimentos** — carrossel horizontal deslizável com indicadores (dots) clicáveis
7. **Objeções** — respostas às hesitações comuns
8. **CTA final** — fundo escuro, logo, título e botão
9. **Footer**

## Detalhes técnicos

- **Fontes**: Playfair Display + Inter, carregadas via `<link>` no `head` da rota raiz (`src/routes/__root.tsx`), conforme a convenção do projeto (não via `@import` no CSS).
- **Cores/estilo**: a paleta do original (creme, caramelo, sage, verde-escuro) será mantida. Para fidelidade máxima ao design, vou usar CSS próprio (um arquivo de estilos da página com as classes originais) em vez de reescrever tudo em tokens Tailwind — assim o resultado fica idêntico ao HTML enviado.
- **Imagens**: o HTML traz 4 imagens embutidas em base64 (logo da nav, hero, foto da Larissa, logo do CTA final). Vou extrair essas imagens e registrá-las como assets do projeto, referenciando-as por import. Se alguma vier em baixa resolução/placeholder, aviso e posso regenerar.
- **Interações em React**:
  - Reveal ao rolar → hook com `IntersectionObserver`
  - Carrossel de depoimentos → estado React com scroll suave e dots ativos sincronizados ao scroll
- **SEO**: `title`, `description` e tags Open Graph da rota `/` preenchidas com o conteúdo do original (Aurora Mental — Psicologia Online).
- **Responsivo**: manter os breakpoints/mobile do CSS original.

## Estrutura de arquivos

```text
src/routes/index.tsx          -> página completa (componentes das seções)
src/routes/__root.tsx         -> adicionar <link> das fontes
src/styles/aurora.css (ou similar) -> CSS da página
src/assets/                   -> imagens extraídas do base64
```

## Observações

- Os links de CTA (WhatsApp/agendamento) no original são âncoras/`#`. Vou manter como estão; se você tiver um número de WhatsApp ou link de agendamento real, me passe que eu conecto os botões.
