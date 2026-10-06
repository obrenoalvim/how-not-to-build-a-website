<div align="center">

<img src=".github/logo.svg" alt="Logo do How Not To Build A Website" width="120" height="120">

# How Not To Build A Website

**Um falso SaaS funcional que ensina 30 dark patterns mostrando eles no contexto.**<br>
Cada página tem um botão **?** que explica quais padrões estão ativos e por que funcionam.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/obrenoalvim/how-not-to-build-a-website?style=flat&logo=github&color=ff6b6b)](https://github.com/obrenoalvim/how-not-to-build-a-website/stargazers)
[![30 padrões](https://img.shields.io/badge/dark_patterns-30-ff6b6b)](#páginas)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)](#stack)

[English](README.md) · **Português**

[Páginas](#páginas) · [Stack](#stack) · [Rodando](#rodando) · [Por quê](#por-quê) · [Perguntas frequentes](#perguntas-frequentes)

</div>

---

Um falso SaaS ("Flowly") funcional, construído para mostrar práticas ruins (mas comuns) de UX, dark patterns e os vieses cognitivos que eles exploram, no contexto, em páginas reais, em vez de como uma lista de tópicos.

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

Next.js (App Router) + TypeScript + Tailwind CSS. Sem back-end, sem banco de dados. Toda
"conta" e "pagamento" no site é UI inerte.

## Rodando

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Por quê

Projeto educacional/portfólio. Nada aqui tem a intenção de manipular de verdade um visitante
real. O objetivo é que clicar no **?** mostre imediatamente o que está errado e por que
funciona, o oposto de como esses padrões se comportam no mundo real.

---

## Perguntas frequentes

**Isso é um produto de verdade?**
Não. O "Flowly" é um SaaS falso. Toda "conta" e "pagamento" no site é UI inerte, sem back-end e sem banco de dados.

**Quais dark patterns ele cobre?**
30, agrupados por mecanismo na página `/patterns`. Exemplos: contadores regressivos falsos, confirmshaming, opt-ins pré-marcados, plano isca, drip pricing, cancelamento escondido e um banner de cookies assimétrico.

**Como vejo quais padrões uma página usa?**
Clique no botão **?** no canto inferior direito de qualquer página. Ele lista os padrões ativos naquela página e por que funcionam.

**Dá pra usar numa aula de UX?**
É um projeto educacional. Rode localmente e percorra as páginas na ordem listada em [Páginas](#páginas).

## Mais do mesmo autor

- [**diff-viewer**](https://github.com/obrenoalvim/diff-viewer): compare dois textos e veja o que mudou, no navegador.
- [**status-hub**](https://github.com/obrenoalvim/status-hub): um grid só para toda página de status que você confere.

## Contribuindo

Conhece um dark pattern que o catálogo não tem? Abra uma issue ou um PR. Veja o [CONTRIBUTING.pt-BR.md](CONTRIBUTING.pt-BR.md) e o [changelog](CHANGELOG.md).

## Licença

[MIT](LICENSE)

---

<div align="center">

Se isso te fez reconhecer um dark pattern, uma ⭐ ajuda outras pessoas a encontrá-lo.

<sub>**Tópicos:** dark-patterns · deceptive-design · ux · ux-education · cognitive-bias · confirmshaming · demo-site · nextjs · typescript · tailwindcss</sub>

</div>
