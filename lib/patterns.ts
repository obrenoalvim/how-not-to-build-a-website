export type PageKey =
  | "global"
  | "home"
  | "signup"
  | "login"
  | "pricing"
  | "checkout"
  | "dashboard"
  | "account";

export type Pattern = {
  id: string;
  name: string;
  category: string;
  description: string;
  why: string;
  pages: PageKey[];
};

export const PAGE_LABELS: Record<PageKey, string> = {
  global: "Every page",
  home: "Home",
  signup: "Sign up",
  login: "Log in",
  pricing: "Pricing",
  checkout: "Checkout",
  dashboard: "Dashboard",
  account: "Account / Cancel",
};

export const PATTERNS: Pattern[] = [
  {
    id: "cookie-consent-bias",
    name: "Asymmetric cookie consent",
    category: "Interface interference",
    description:
      "\"Accept All\" is a huge colored button. \"Manage preferences\" is a tiny grey link nobody notices.",
    why: "Unequal visual weight nudges you toward the option that benefits the site, exploiting the path-of-least-resistance bias instead of giving a real choice.",
    pages: ["global"],
  },
  {
    id: "chat-widget-nag",
    name: "Unsolicited chat nudges",
    category: "Attention hijacking",
    description:
      "A chat bubble pops a new message every few seconds, whether or not you engaged with it.",
    why: "Repeated interruption exploits the mere-exposure effect and breaks task focus, pulling attention away from what you came to do.",
    pages: ["global"],
  },
  {
    id: "fake-urgency-countdown",
    name: "Fake countdown timer",
    category: "False urgency",
    description: "A \"deal ends in 04:59\" timer that resets to 5:00 on every page refresh.",
    why: "Manufactured time pressure triggers loss-aversion and rushes decisions before you can think them through.",
    pages: ["home"],
  },
  {
    id: "fake-social-proof",
    name: "Fabricated activity counter",
    category: "False social proof",
    description: "\"14 people signed up in the last hour\" — a number that never changes and isn't tied to real data.",
    why: "Social proof is one of the strongest persuasion levers; faking it borrows trust the product hasn't earned.",
    pages: ["home"],
  },
  {
    id: "disguised-ad",
    name: "Disguised advertisement",
    category: "Misdirection",
    description: "A sponsored block styled identically to editorial content, with \"Ad\" in 8px grey text.",
    why: "Readers apply less scrutiny to what looks like organic content, so the ad borrows credibility it didn't earn.",
    pages: ["home"],
  },
  {
    id: "confirmshaming-newsletter",
    name: "Confirmshaming exit popup",
    category: "Confirmshaming",
    description: "Closing a popup means clicking \"No thanks, I enjoy overpaying.\"",
    why: "Framing the decline as a personal flaw uses guilt/shame to override a simple no.",
    pages: ["home"],
  },
  {
    id: "visual-clutter-cta",
    name: "Competing calls to action",
    category: "Choice overload",
    description: "Six buttons of the same size and color surround the one action that actually matters.",
    why: "Without visual hierarchy, decision fatigue sets in and users default to the easiest thing to notice — often not what they intended.",
    pages: ["home"],
  },
  {
    id: "information-overload-form",
    name: "Overloaded sign-up form",
    category: "Cognitive overload",
    description:
      "The sign-up form asks for 12 fields up front while a sidebar of testimonials, badges and a promo banner compete for the same screen.",
    why: "Every extra field and distraction is a chance to lose focus on the one task (finishing the form) — classic decision fatigue engineered right into the layout.",
    pages: ["signup"],
  },
  {
    id: "preticked-marketing-optin",
    name: "Pre-ticked marketing opt-in",
    category: "Default bias",
    description: "\"Send me offers and partner emails\" ships checked by default, easy to miss.",
    why: "Most people keep the default option even when it doesn't match their preference — the status-quo bias does the persuading for you.",
    pages: ["signup"],
  },
  {
    id: "hidden-required-field",
    name: "Buried validation rules",
    category: "Poor error prevention",
    description: "Required-field asterisks sit in 10px grey text; the actual error only shows up after you hit submit.",
    why: "Failing late instead of guiding early wastes user effort and creates frustration that a visible hint would have prevented.",
    pages: ["signup"],
  },
  {
    id: "fake-scarcity-signup",
    name: "Fake seat scarcity",
    category: "False urgency",
    description: "\"Only 3 spots left this month!\" on a SaaS sign-up form with no real capacity limit.",
    why: "Manufactured scarcity triggers FOMO to rush a decision that has no actual deadline.",
    pages: ["signup"],
  },
  {
    id: "password-rules-after-fact",
    name: "Password rules revealed after rejection",
    category: "Poor error prevention",
    description: "Password requirements aren't shown until after you submit and get rejected once.",
    why: "Hiding constraints until failure turns a one-shot task into a guessing game, adding friction with zero benefit.",
    pages: ["signup"],
  },
  {
    id: "roach-motel-login",
    name: "Vague login errors",
    category: "Roach motel",
    description: "Wrong password and \"no such account\" show the identical vague message, and password reset is buried four clicks deep.",
    why: "Ambiguous errors and hidden recovery paths turn a routine login into a maze — easy to get lost in, hard to get out of.",
    pages: ["login"],
  },
  {
    id: "social-login-dark-pattern",
    name: "Oversized social login",
    category: "Interface interference",
    description: "\"Continue with Google\" is a giant colored button; the plain email option is a thin grey link underneath.",
    why: "Steering you toward the option that shares more of your data exploits visual hierarchy, not genuine preference.",
    pages: ["login"],
  },
  {
    id: "decoy-pricing",
    name: "Decoy pricing tier",
    category: "Decoy effect",
    description: "A middle plan priced almost the same as the top plan but with far less value, just to make the top plan look like a bargain.",
    why: "The decoy doesn't need to sell itself — it only exists to shift your reference point so the real target plan looks cheap by comparison.",
    pages: ["pricing"],
  },
  {
    id: "anchoring-high-price",
    name: "Fake original price anchor",
    category: "Anchoring bias",
    description: "A crossed-out \"original price\" sits next to the real one, though the item never actually sold at that price.",
    why: "The first number you see anchors your sense of value, making any lower number feel like a deal even if it isn't one.",
    pages: ["pricing"],
  },
  {
    id: "drip-pricing",
    name: "Drip pricing",
    category: "Hidden costs",
    description: "The advertised price excludes taxes and \"platform fees,\" which only appear at the very last checkout step.",
    why: "Revealing costs gradually keeps you anchored to the low number you already committed to mentally, past the point you'd walk away.",
    pages: ["pricing", "checkout"],
  },
  {
    id: "false-recommended-badge",
    name: "Fake \"Most popular\" badge",
    category: "False social proof",
    description: "The \"Most Popular\" ribbon always sits on the most expensive plan, regardless of actual sales data.",
    why: "Borrowing the authority of the crowd nudges you toward the highest-margin option, not the one people actually chose most.",
    pages: ["pricing"],
  },
  {
    id: "sneak-into-basket",
    name: "Sneak into basket",
    category: "Sneaking",
    description: "Trip insurance or an \"express processing\" fee is added to the cart automatically before you reach checkout.",
    why: "Opt-out instead of opt-in relies on you not noticing the extra line item, banking on inattention rather than consent.",
    pages: ["checkout"],
  },
  {
    id: "forced-account-creation",
    name: "Forced account creation",
    category: "Forced continuity",
    description: "There is no guest checkout — you only discover an account is mandatory after filling in your card details.",
    why: "Sinking cost into the flow makes you more likely to push through the extra friction rather than abandon and restart elsewhere.",
    pages: ["checkout"],
  },
  {
    id: "hidden-fees-last-step",
    name: "Fees revealed at the last step",
    category: "Hidden costs",
    description: "A \"service fee\" and a \"convenience fee\" appear for the first time on the final review screen.",
    why: "By the last step you've already invested time and attention, so a surprise cost is far less likely to make you abandon the purchase.",
    pages: ["checkout"],
  },
  {
    id: "fake-checkout-urgency",
    name: "Stacked urgency + social proof",
    category: "False urgency",
    description: "\"Your cart expires in 4:59\" next to \"2 other people are viewing this item right now,\" both fabricated.",
    why: "Combining two persuasion levers at once compounds pressure and leaves less room to pause and reconsider.",
    pages: ["checkout"],
  },
  {
    id: "confirmshaming-addon-decline",
    name: "Confirmshaming add-on decline",
    category: "Confirmshaming",
    description: "Declining travel insurance means clicking \"No, I don't want to protect my trip.\"",
    why: "Wording the decline as recklessness makes saying no feel like admitting you don't care about your own trip.",
    pages: ["checkout"],
  },
  {
    id: "fake-progress-bar",
    name: "Profile completion bar that never finishes",
    category: "Goal-gradient exploitation",
    description: "\"Profile 72% complete\" — finishing one step nudges the percentage but a new \"step\" always appears before 100%.",
    why: "We push harder to finish something as it nears completion; keeping the bar permanently almost-done keeps you engaging indefinitely.",
    pages: ["dashboard"],
  },
  {
    id: "nagging-upgrade-banner",
    name: "Banner that dodges dismissal",
    category: "Interface interference",
    description: "An upgrade banner you close reappears next session, and its close button shifts position to invite a misclick onto the CTA.",
    why: "Making the unwanted option persistent and the exit hard to hit relies on wearing down your patience instead of earning a yes.",
    pages: ["dashboard"],
  },
  {
    id: "fake-notification-badges",
    name: "Notification badge that lies",
    category: "Attention hijacking",
    description: "A red badge on the bell icon always shows a number, even when there is nothing new to see.",
    why: "Red badges are a learned trigger for \"something needs you\" — faking it hijacks that reflex to drive opens/clicks that aren't actually needed.",
    pages: ["dashboard"],
  },
  {
    id: "roach-motel-cancellation",
    name: "Cancel buried five menus deep",
    category: "Roach motel",
    description: "Upgrading is one click from the dashboard; cancelling requires five submenus none of which are labeled \"cancel.\"",
    why: "Asymmetric friction — easy in, hard out — is the textbook roach motel: getting in is effortless, getting out is not.",
    pages: ["account"],
  },
  {
    id: "retention-guilt-trip",
    name: "Guilt-trip retention screen",
    category: "Emotional manipulation",
    description: "A sad mascot appears with \"Are you sure you want to leave all your progress behind?\" before you can confirm cancellation.",
    why: "Framing a routine choice as an emotional loss borrows guilt to override the actual decision you came to make.",
    pages: ["account"],
  },
  {
    id: "forced-phone-call",
    name: "Cancellation requires a phone call",
    category: "Obstruction",
    description: "Every step of cancelling can be done online except the final one, which requires calling during business hours.",
    why: "Adding a synchronous, effortful channel at the last step raises the cost of leaving far above the cost of signing up.",
    pages: ["account"],
  },
  {
    id: "discount-bait-loop",
    name: "Infinite discount-offer loop",
    category: "Obstruction",
    description: "Clicking \"cancel\" triggers a discount offer; declining it triggers another, then another, before a real cancel option appears.",
    why: "Each extra offer is a fresh chance to change your mind under pressure, turning a two-click task into an endurance test.",
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
