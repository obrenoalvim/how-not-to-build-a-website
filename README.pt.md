[English](README.md) | Português

# How Not To Build A Website

Um falso SaaS ("Flowly") funcional, construído para mostrar práticas ruins (mas comuns) de UX,
dark patterns e os vieses cognitivos que eles exploram, no contexto, em páginas reais, em vez de
como uma lista de tópicos.

Cada página tem um botão **?** no canto inferior direito explicando exatamente quais padrões
estão ativos naquela página e por que funcionam. Uma página `/patterns` lista o catálogo completo
de 30 padrões, agrupados por mecanismo.

## Páginas

| Rota | O que está sendo demonstrado |
|---|---|
| `/` | contador regressivo falso, contador de atividade falso, anúncio disfarçado, confirmshaming no exit-intent, CTAs competindo entre si |
| `/signup` | formulário com sobrecarga de informação, opt-in pré-marcado, validação escondida, escassez falsa, regras de senha ocultas |
| `/login` | login social superdimensionado, erros vagos, reset de senha escondido |
| `/pricing` | plano isca (decoy), preço-âncora falso, drip pricing, selo "mais popular" falso |
| `/checkout` | add-on inserido sem aviso, criação de conta forçada, taxas de última hora, urgência empilhada, confirmshaming |
| `/dashboard` | barra de progresso falsa, banner de upgrade evasivo, badge de notificação falso |
| `/account` | cancelamento escondido em menus, tela de retenção por culpa, ligação telefônica forçada, loop infinito de oferta de desconto |
| `/patterns` | o catálogo completo, navegável independente das páginas de demo |

Global (em toda página): banner de consentimento de cookies assimétrico, insistência de chat não solicitado.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS. Sem back-end, sem banco de dados — toda
"conta" e "pagamento" no site é UI inerte.

## Rodando

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Por quê

Projeto educacional/portfólio. Nada aqui tem a intenção de manipular de verdade um visitante
real — o objetivo é que clicar no **?** mostre imediatamente o que está errado e por que
funciona, o oposto de como esses padrões se comportam no mundo real.
