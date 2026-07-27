export type PageKey =
  | "global"
  | "home"
  | "signup"
  | "login"
  | "pricing"
  | "checkout"
  | "dashboard"
  | "account";

type Text = { en: string; pt: string };

export type Pattern = {
  id: string;
  name: Text;
  category: Text;
  description: Text;
  why: Text;
  pages: PageKey[];
};

export const PAGE_LABELS: Record<PageKey, Text> = {
  global: { en: "Every page", pt: "Toda página" },
  home: { en: "Home", pt: "Início" },
  signup: { en: "Sign up", pt: "Cadastro" },
  login: { en: "Log in", pt: "Login" },
  pricing: { en: "Pricing", pt: "Preços" },
  checkout: { en: "Checkout", pt: "Finalização" },
  dashboard: { en: "Dashboard", pt: "Painel" },
  account: { en: "Account / Cancel", pt: "Conta / Cancelamento" },
};

export const PATTERNS: Pattern[] = [
  {
    id: "cookie-consent-bias",
    name: { en: "Asymmetric cookie consent", pt: "Consentimento de cookies assimétrico" },
    category: { en: "Interface interference", pt: "Interferência de interface" },
    description: {
      en: "\"Accept All\" is a huge colored button. \"Manage preferences\" is a tiny grey link nobody notices.",
      pt: "\"Aceitar tudo\" é um botão enorme e colorido. \"Gerenciar preferências\" é um linkzinho cinza que ninguém nota.",
    },
    why: {
      en: "Unequal visual weight nudges you toward the option that benefits the site, exploiting the path-of-least-resistance bias instead of giving a real choice.",
      pt: "O peso visual desigual empurra você para a opção que beneficia o site, explorando o viés do caminho de menor resistência em vez de dar uma escolha real.",
    },
    pages: ["global"],
  },
  {
    id: "chat-widget-nag",
    name: { en: "Unsolicited chat nudges", pt: "Cutucadas de chat não solicitadas" },
    category: { en: "Attention hijacking", pt: "Sequestro de atenção" },
    description: {
      en: "A chat bubble pops a new message every few seconds, whether or not you engaged with it.",
      pt: "Um balão de chat solta mensagem nova a cada poucos segundos, tenha você interagido ou não.",
    },
    why: {
      en: "Repeated interruption exploits the mere-exposure effect and breaks task focus, pulling attention away from what you came to do.",
      pt: "A interrupção repetida explora o efeito de mera exposição e quebra o foco, puxando a atenção do que você veio fazer.",
    },
    pages: ["global"],
  },
  {
    id: "fake-urgency-countdown",
    name: { en: "Fake countdown timer", pt: "Cronômetro falso" },
    category: { en: "False urgency", pt: "Urgência falsa" },
    description: {
      en: "A \"deal ends in 04:59\" timer that resets to 5:00 on every page refresh.",
      pt: "Um cronômetro \"a oferta acaba em 04:59\" que reseta pra 5:00 a cada atualização da página.",
    },
    why: {
      en: "Manufactured time pressure triggers loss-aversion and rushes decisions before you can think them through.",
      pt: "Pressão de tempo fabricada aciona a aversão à perda e apressa decisões antes que você consiga pensar direito.",
    },
    pages: ["home"],
  },
  {
    id: "fake-social-proof",
    name: { en: "Fabricated activity counter", pt: "Contador de atividade fabricado" },
    category: { en: "False social proof", pt: "Prova social falsa" },
    description: {
      en: "\"14 people signed up in the last hour\" — a number that never changes and isn't tied to real data.",
      pt: "\"14 pessoas se cadastraram na última hora\" — um número que nunca muda e não vem de dado real nenhum.",
    },
    why: {
      en: "Social proof is one of the strongest persuasion levers; faking it borrows trust the product hasn't earned.",
      pt: "Prova social é uma das alavancas de persuasão mais fortes; forjar ela empresta uma confiança que o produto não conquistou.",
    },
    pages: ["home"],
  },
  {
    id: "disguised-ad",
    name: { en: "Disguised advertisement", pt: "Anúncio disfarçado" },
    category: { en: "Misdirection", pt: "Direcionamento enganoso" },
    description: {
      en: "A sponsored block styled identically to editorial content, with \"Ad\" in 8px grey text.",
      pt: "Um bloco patrocinado com o mesmo estilo do conteúdo editorial, com \"Anúncio\" escrito em cinza minúsculo.",
    },
    why: {
      en: "Readers apply less scrutiny to what looks like organic content, so the ad borrows credibility it didn't earn.",
      pt: "Leitores prestam menos atenção crítica ao que parece conteúdo orgânico, então o anúncio pega emprestada uma credibilidade que não é dele.",
    },
    pages: ["home"],
  },
  {
    id: "confirmshaming-newsletter",
    name: { en: "Confirmshaming exit popup", pt: "Popup de saída com confirmshaming" },
    category: { en: "Confirmshaming", pt: "Confirmshaming" },
    description: {
      en: "Closing a popup means clicking \"No thanks, I enjoy overpaying.\"",
      pt: "Fechar o popup significa clicar em \"Não, prefiro pagar mais caro mesmo\".",
    },
    why: {
      en: "Framing the decline as a personal flaw uses guilt/shame to override a simple no.",
      pt: "Enquadrar a recusa como um defeito pessoal usa culpa/vergonha pra sobrepor um simples não.",
    },
    pages: ["home"],
  },
  {
    id: "visual-clutter-cta",
    name: { en: "Competing calls to action", pt: "Chamadas para ação competindo entre si" },
    category: { en: "Choice overload", pt: "Sobrecarga de escolha" },
    description: {
      en: "Six buttons of the same size and color surround the one action that actually matters.",
      pt: "Seis botões do mesmo tamanho e cor cercam a única ação que realmente importa.",
    },
    why: {
      en: "Without visual hierarchy, decision fatigue sets in and users default to the easiest thing to notice — often not what they intended.",
      pt: "Sem hierarquia visual, a fadiga de decisão entra em ação e o usuário clica no que nota primeiro — geralmente não era o que pretendia.",
    },
    pages: ["home"],
  },
  {
    id: "information-overload-form",
    name: { en: "Overloaded sign-up form", pt: "Formulário de cadastro sobrecarregado" },
    category: { en: "Cognitive overload", pt: "Sobrecarga cognitiva" },
    description: {
      en: "The sign-up form asks for 12 fields up front while a sidebar of testimonials, badges and a promo banner compete for the same screen.",
      pt: "O formulário pede 12 campos de uma vez, enquanto uma barra lateral de depoimentos, selos e banner promocional disputa a mesma tela.",
    },
    why: {
      en: "Every extra field and distraction is a chance to lose focus on the one task (finishing the form) — classic decision fatigue engineered right into the layout.",
      pt: "Cada campo extra e cada distração é uma chance de perder o foco na única tarefa (terminar o formulário) — fadiga de decisão construída direto no layout.",
    },
    pages: ["signup"],
  },
  {
    id: "preticked-marketing-optin",
    name: { en: "Pre-ticked marketing opt-in", pt: "Opt-in de marketing pré-marcado" },
    category: { en: "Default bias", pt: "Viés do padrão" },
    description: {
      en: "\"Send me offers and partner emails\" ships checked by default, easy to miss.",
      pt: "\"Quero receber ofertas e emails de parceiros\" já vem marcado por padrão, fácil de não perceber.",
    },
    why: {
      en: "Most people keep the default option even when it doesn't match their preference — the status-quo bias does the persuading for you.",
      pt: "A maioria mantém a opção padrão mesmo quando não é o que prefere — o viés do status quo faz a persuasão por você.",
    },
    pages: ["signup"],
  },
  {
    id: "hidden-required-field",
    name: { en: "Buried validation rules", pt: "Regras de validação escondidas" },
    category: { en: "Poor error prevention", pt: "Prevenção de erro deficiente" },
    description: {
      en: "Required-field asterisks sit in 10px grey text; the actual error only shows up after you hit submit.",
      pt: "Os asteriscos de campo obrigatório ficam em cinza minúsculo; o erro só aparece depois que você envia o formulário.",
    },
    why: {
      en: "Failing late instead of guiding early wastes user effort and creates frustration that a visible hint would have prevented.",
      pt: "Falhar tarde em vez de orientar cedo desperdiça o esforço do usuário e cria uma frustração que uma dica visível teria evitado.",
    },
    pages: ["signup"],
  },
  {
    id: "fake-scarcity-signup",
    name: { en: "Fake seat scarcity", pt: "Escassez de vagas falsa" },
    category: { en: "False urgency", pt: "Urgência falsa" },
    description: {
      en: "\"Only 3 spots left this month!\" on a SaaS sign-up form with no real capacity limit.",
      pt: "\"Só restam 3 vagas este mês!\" num formulário de SaaS que não tem limite real de capacidade nenhum.",
    },
    why: {
      en: "Manufactured scarcity triggers FOMO to rush a decision that has no actual deadline.",
      pt: "Escassez fabricada aciona o FOMO pra apressar uma decisão que não tem prazo real nenhum.",
    },
    pages: ["signup"],
  },
  {
    id: "password-rules-after-fact",
    name: { en: "Password rules revealed after rejection", pt: "Regras de senha reveladas só depois do erro" },
    category: { en: "Poor error prevention", pt: "Prevenção de erro deficiente" },
    description: {
      en: "Password requirements aren't shown until after you submit and get rejected once.",
      pt: "Os requisitos de senha só aparecem depois que você envia e leva um erro.",
    },
    why: {
      en: "Hiding constraints until failure turns a one-shot task into a guessing game, adding friction with zero benefit.",
      pt: "Esconder as regras até a falha transforma uma tarefa simples num jogo de adivinhação, adicionando atrito sem benefício nenhum.",
    },
    pages: ["signup"],
  },
  {
    id: "roach-motel-login",
    name: { en: "Vague login errors", pt: "Erros de login vagos" },
    category: { en: "Roach motel", pt: "Roach motel" },
    description: {
      en: "Wrong password and \"no such account\" show the identical vague message, and password reset is buried four clicks deep.",
      pt: "Senha errada e \"conta inexistente\" mostram a mesma mensagem vaga, e recuperar senha fica enterrado a quatro cliques de distância.",
    },
    why: {
      en: "Ambiguous errors and hidden recovery paths turn a routine login into a maze — easy to get lost in, hard to get out of.",
      pt: "Erros ambíguos e caminhos de recuperação escondidos transformam um login rotineiro num labirinto — fácil de se perder, difícil de sair.",
    },
    pages: ["login"],
  },
  {
    id: "social-login-dark-pattern",
    name: { en: "Oversized social login", pt: "Login social superdimensionado" },
    category: { en: "Interface interference", pt: "Interferência de interface" },
    description: {
      en: "\"Continue with Google\" is a giant colored button; the plain email option is a thin grey link underneath.",
      pt: "\"Continuar com Google\" é um botão gigante e colorido; o login por email é um linkzinho cinza fino embaixo.",
    },
    why: {
      en: "Steering you toward the option that shares more of your data exploits visual hierarchy, not genuine preference.",
      pt: "Empurrar você pra opção que compartilha mais dados seus explora a hierarquia visual, não uma preferência genuína.",
    },
    pages: ["login"],
  },
  {
    id: "decoy-pricing",
    name: { en: "Decoy pricing tier", pt: "Plano isca" },
    category: { en: "Decoy effect", pt: "Efeito isca" },
    description: {
      en: "A middle plan priced almost the same as the top plan but with far less value, just to make the top plan look like a bargain.",
      pt: "Um plano do meio com preço quase igual ao do plano top, mas com bem menos valor, só pra fazer o plano top parecer uma pechincha.",
    },
    why: {
      en: "The decoy doesn't need to sell itself — it only exists to shift your reference point so the real target plan looks cheap by comparison.",
      pt: "A isca não precisa se vender sozinha — ela só existe pra deslocar sua referência e fazer o plano alvo parecer barato por comparação.",
    },
    pages: ["pricing"],
  },
  {
    id: "anchoring-high-price",
    name: { en: "Fake original price anchor", pt: "Preço original falso como âncora" },
    category: { en: "Anchoring bias", pt: "Viés de ancoragem" },
    description: {
      en: "A crossed-out \"original price\" sits next to the real one, though the item never actually sold at that price.",
      pt: "Um \"preço original\" riscado fica ao lado do preço real, mesmo que o item nunca tenha sido vendido por aquele valor.",
    },
    why: {
      en: "The first number you see anchors your sense of value, making any lower number feel like a deal even if it isn't one.",
      pt: "O primeiro número que você vê ancora sua noção de valor, fazendo qualquer número menor parecer uma pechincha mesmo sem ser.",
    },
    pages: ["pricing"],
  },
  {
    id: "drip-pricing",
    name: { en: "Drip pricing", pt: "Preço gotejado" },
    category: { en: "Hidden costs", pt: "Custos escondidos" },
    description: {
      en: "The advertised price excludes taxes and \"platform fees,\" which only appear at the very last checkout step.",
      pt: "O preço anunciado exclui impostos e \"taxa de plataforma\", que só aparecem na última etapa da finalização.",
    },
    why: {
      en: "Revealing costs gradually keeps you anchored to the low number you already committed to mentally, past the point you'd walk away.",
      pt: "Revelar custos aos poucos mantém você ancorado no número baixo que já aceitou mentalmente, passado o ponto em que desistiria.",
    },
    pages: ["pricing", "checkout"],
  },
  {
    id: "false-recommended-badge",
    name: { en: "Fake \"Most popular\" badge", pt: "Selo falso de \"Mais popular\"" },
    category: { en: "False social proof", pt: "Prova social falsa" },
    description: {
      en: "The \"Most Popular\" ribbon always sits on the most expensive plan, regardless of actual sales data.",
      pt: "O selo \"Mais popular\" sempre fica no plano mais caro, independente do que os dados de venda realmente mostram.",
    },
    why: {
      en: "Borrowing the authority of the crowd nudges you toward the highest-margin option, not the one people actually chose most.",
      pt: "Pegar emprestada a autoridade da multidão empurra você pra opção de maior margem, não pra que as pessoas realmente mais escolheram.",
    },
    pages: ["pricing"],
  },
  {
    id: "sneak-into-basket",
    name: { en: "Sneak into basket", pt: "Item enfiado no carrinho" },
    category: { en: "Sneaking", pt: "Sneaking" },
    description: {
      en: "Trip insurance or an \"express processing\" fee is added to the cart automatically before you reach checkout.",
      pt: "Um seguro viagem ou taxa de \"processamento expresso\" é adicionado ao carrinho automaticamente antes de você chegar na finalização.",
    },
    why: {
      en: "Opt-out instead of opt-in relies on you not noticing the extra line item, banking on inattention rather than consent.",
      pt: "Opt-out em vez de opt-in aposta que você não vai notar o item extra, contando com desatenção em vez de consentimento.",
    },
    pages: ["checkout"],
  },
  {
    id: "forced-account-creation",
    name: { en: "Forced account creation", pt: "Criação de conta forçada" },
    category: { en: "Forced continuity", pt: "Continuidade forçada" },
    description: {
      en: "There is no guest checkout — you only discover an account is mandatory after filling in your card details.",
      pt: "Não existe finalização como convidado — você só descobre que a conta é obrigatória depois de preencher os dados do cartão.",
    },
    why: {
      en: "Sinking cost into the flow makes you more likely to push through the extra friction rather than abandon and restart elsewhere.",
      pt: "Afundar custo no fluxo faz você mais propenso a enfrentar o atrito extra em vez de abandonar e recomeçar em outro lugar.",
    },
    pages: ["checkout"],
  },
  {
    id: "hidden-fees-last-step",
    name: { en: "Fees revealed at the last step", pt: "Taxas reveladas na última etapa" },
    category: { en: "Hidden costs", pt: "Custos escondidos" },
    description: {
      en: "A \"service fee\" and a \"convenience fee\" appear for the first time on the final review screen.",
      pt: "Uma \"taxa de serviço\" e uma \"taxa de conveniência\" aparecem pela primeira vez na tela final de revisão.",
    },
    why: {
      en: "By the last step you've already invested time and attention, so a surprise cost is far less likely to make you abandon the purchase.",
      pt: "Na última etapa você já investiu tempo e atenção, então um custo surpresa tem muito menos chance de fazer você abandonar a compra.",
    },
    pages: ["checkout"],
  },
  {
    id: "fake-checkout-urgency",
    name: { en: "Stacked urgency + social proof", pt: "Urgência empilhada com prova social" },
    category: { en: "False urgency", pt: "Urgência falsa" },
    description: {
      en: "\"Your cart expires in 4:59\" next to \"2 other people are viewing this item right now,\" both fabricated.",
      pt: "\"Seu carrinho expira em 4:59\" ao lado de \"2 outras pessoas estão vendo este item agora\", ambos inventados.",
    },
    why: {
      en: "Combining two persuasion levers at once compounds pressure and leaves less room to pause and reconsider.",
      pt: "Combinar duas alavancas de persuasão de uma vez multiplica a pressão e deixa menos espaço pra parar e repensar.",
    },
    pages: ["checkout"],
  },
  {
    id: "confirmshaming-addon-decline",
    name: { en: "Confirmshaming add-on decline", pt: "Confirmshaming ao recusar adicional" },
    category: { en: "Confirmshaming", pt: "Confirmshaming" },
    description: {
      en: "Declining travel insurance means clicking \"No, I don't want to protect my trip.\"",
      pt: "Recusar o seguro viagem significa clicar em \"Não, não quero proteger minha viagem\".",
    },
    why: {
      en: "Wording the decline as recklessness makes saying no feel like admitting you don't care about your own trip.",
      pt: "Formular a recusa como imprudência faz dizer não parecer admitir que você não se importa com a própria viagem.",
    },
    pages: ["checkout"],
  },
  {
    id: "fake-progress-bar",
    name: { en: "Profile completion bar that never finishes", pt: "Barra de perfil que nunca termina" },
    category: { en: "Goal-gradient exploitation", pt: "Exploração do gradiente de meta" },
    description: {
      en: "\"Profile 72% complete\" — finishing one step nudges the percentage but a new \"step\" always appears before 100%.",
      pt: "\"Perfil 72% completo\" — terminar uma etapa move a porcentagem, mas sempre surge uma \"etapa\" nova antes de chegar em 100%.",
    },
    why: {
      en: "We push harder to finish something as it nears completion; keeping the bar permanently almost-done keeps you engaging indefinitely.",
      pt: "A gente se esforça mais pra terminar algo quanto mais perto do fim; manter a barra sempre quase completa mantém o engajamento indefinidamente.",
    },
    pages: ["dashboard"],
  },
  {
    id: "nagging-upgrade-banner",
    name: { en: "Banner that dodges dismissal", pt: "Banner que foge do fechamento" },
    category: { en: "Interface interference", pt: "Interferência de interface" },
    description: {
      en: "An upgrade banner you close reappears next session, and its close button shifts position to invite a misclick onto the CTA.",
      pt: "Um banner de upgrade que você fecha reaparece na próxima sessão, e o botão de fechar muda de posição pra provocar um clique errado no botão principal.",
    },
    why: {
      en: "Making the unwanted option persistent and the exit hard to hit relies on wearing down your patience instead of earning a yes.",
      pt: "Tornar a opção indesejada persistente e a saída difícil de acertar aposta em desgastar sua paciência em vez de conquistar um sim.",
    },
    pages: ["dashboard"],
  },
  {
    id: "fake-notification-badges",
    name: { en: "Notification badge that lies", pt: "Selo de notificação que mente" },
    category: { en: "Attention hijacking", pt: "Sequestro de atenção" },
    description: {
      en: "A red badge on the bell icon always shows a number, even when there is nothing new to see.",
      pt: "Um selo vermelho no ícone do sino sempre mostra um número, mesmo quando não tem nada novo pra ver.",
    },
    why: {
      en: "Red badges are a learned trigger for \"something needs you\" — faking it hijacks that reflex to drive opens/clicks that aren't actually needed.",
      pt: "Selos vermelhos são um gatilho aprendido de \"algo precisa de você\" — forjar isso sequestra esse reflexo pra gerar cliques que não eram necessários.",
    },
    pages: ["dashboard"],
  },
  {
    id: "roach-motel-cancellation",
    name: { en: "Cancel buried five menus deep", pt: "Cancelamento enterrado cinco menus abaixo" },
    category: { en: "Roach motel", pt: "Roach motel" },
    description: {
      en: "Upgrading is one click from the dashboard; cancelling requires five submenus none of which are labeled \"cancel.\"",
      pt: "Fazer upgrade é um clique a partir do painel; cancelar exige cinco submenus, nenhum deles com o rótulo \"cancelar\".",
    },
    why: {
      en: "Asymmetric friction — easy in, hard out — is the textbook roach motel: getting in is effortless, getting out is not.",
      pt: "Atrito assimétrico — fácil de entrar, difícil de sair — é o roach motel clássico: entrar não custa nada, sair custa muito.",
    },
    pages: ["account"],
  },
  {
    id: "retention-guilt-trip",
    name: { en: "Guilt-trip retention screen", pt: "Tela de retenção por culpa" },
    category: { en: "Emotional manipulation", pt: "Manipulação emocional" },
    description: {
      en: "A sad mascot appears with \"Are you sure you want to leave all your progress behind?\" before you can confirm cancellation.",
      pt: "Um mascote triste aparece com \"Tem certeza que quer deixar todo seu progresso pra trás?\" antes de você poder confirmar o cancelamento.",
    },
    why: {
      en: "Framing a routine choice as an emotional loss borrows guilt to override the actual decision you came to make.",
      pt: "Enquadrar uma escolha rotineira como uma perda emocional pega emprestada a culpa pra sobrepor a decisão que você veio tomar.",
    },
    pages: ["account"],
  },
  {
    id: "forced-phone-call",
    name: { en: "Cancellation requires a phone call", pt: "Cancelamento exige ligação telefônica" },
    category: { en: "Obstruction", pt: "Obstrução" },
    description: {
      en: "Every step of cancelling can be done online except the final one, which requires calling during business hours.",
      pt: "Toda etapa do cancelamento pode ser feita online, exceto a última, que exige ligar em horário comercial.",
    },
    why: {
      en: "Adding a synchronous, effortful channel at the last step raises the cost of leaving far above the cost of signing up.",
      pt: "Adicionar um canal síncrono e trabalhoso na última etapa eleva o custo de sair bem acima do custo de ter entrado.",
    },
    pages: ["account"],
  },
  {
    id: "discount-bait-loop",
    name: { en: "Infinite discount-offer loop", pt: "Loop infinito de ofertas de desconto" },
    category: { en: "Obstruction", pt: "Obstrução" },
    description: {
      en: "Clicking \"cancel\" triggers a discount offer; declining it triggers another, then another, before a real cancel option appears.",
      pt: "Clicar em \"cancelar\" dispara uma oferta de desconto; recusar dispara outra, e mais outra, antes de aparecer uma opção real de cancelar.",
    },
    why: {
      en: "Each extra offer is a fresh chance to change your mind under pressure, turning a two-click task into an endurance test.",
      pt: "Cada oferta extra é uma nova chance de você mudar de ideia sob pressão, transformando uma tarefa de dois cliques num teste de resistência.",
    },
    pages: ["account"],
  },
];

export function getPatternsForPage(page: PageKey): Pattern[] {
  return PATTERNS.filter((p) => p.pages.includes(page) || p.pages.includes("global"));
}

export function pathToPageKey(pathname: string): PageKey {
  const first = pathname.split("/").filter(Boolean)[0];
  switch (first) {
    case "signup":
      return "signup";
    case "login":
      return "login";
    case "pricing":
      return "pricing";
    case "checkout":
      return "checkout";
    case "dashboard":
      return "dashboard";
    case "account":
      return "account";
    default:
      return "home";
  }
}
