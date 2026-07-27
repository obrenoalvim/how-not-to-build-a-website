import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HelpBubble from "@/components/HelpBubble";
import CookieBanner from "@/components/CookieBanner";
import ChatNag from "@/components/ChatNag";
import { LocaleProvider } from "@/components/LocaleProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "How Not To Build A Website",
  description:
    "A working fake SaaS riddled with common-but-bad UX practices and dark patterns — click the ? on any page to see what's wrong with it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <LocaleProvider>
          <SiteHeader />
          <main className="flex-1 pb-20">{children}</main>
          <SiteFooter />
          <HelpBubble />
          <CookieBanner />
          <ChatNag />
        </LocaleProvider>
      </body>
    </html>
  );
}
