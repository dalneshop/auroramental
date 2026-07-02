# Carrossel de depoimentos em loop infinito

Vou reformular o carrossel da seção "Depoimentos" para que a navegação seja um **loop infinito**: ao avançar além do último depoimento, ele volta ao primeiro automaticamente (e o contrário ao voltar do primeiro).

## Comportamento

- Botões **‹ anterior** e **próximo ›** para navegar depoimento a depoimento.
- Ao clicar em "próximo" no último card → volta ao primeiro sem parar (looping contínuo).
- Ao clicar em "anterior" no primeiro card → vai para o último.
- Os **dots** continuam funcionando (clicar leva direto ao depoimento) e ficam sincronizados com o card ativo.
- Avanço automático opcional a cada ~6s (paro quando o usuário interage). *Confirmo abaixo se você quer o autoplay.*

## Abordagem técnica

Hoje o carrossel usa scroll nativo (`overflow-x: auto` + `scroll-snap`), que não faz wrap. Vou trocar por um controle baseado em índice em React:

- **`src/routes/index.tsx`**
  - Substituir `handleScroll`/`scrollTo` por um estado `activeDot` com funções `next()` / `prev()` que fazem `(i + 1) % total` e `(i - 1 + total) % total`.
  - O `.depo-track` passa a ser posicionado por `transform: translateX(...)` conforme o índice ativo, em vez de scroll.
  - Adicionar os botões de seta ao lado dos dots.
  - Manter os dots clicáveis apontando para o índice.

- **`src/styles/aurora.css`**
  - Ajustar `.depo-track-wrap` para `overflow: hidden` e `.depo-track` com `transition: transform .5s ease`.
  - Estilizar os botões de seta (‹ ›) na mesma paleta (caramelo/creme) junto da navegação de dots.
  - Manter responsividade mobile.

## Observação

O visual (cards, cores, tipografia) permanece idêntico — muda apenas a mecânica de navegação para o loop infinito. Nenhuma mudança de backend.
