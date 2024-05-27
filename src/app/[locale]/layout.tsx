import type { Metadata } from "next";
import "./globals.css";
import {
  Inter as FontSans,
  DM_Mono as FontMono,
  Orbitron,
} from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400", // Example: setting weight to "400"
});

export const metadata: Metadata = {
  title: "Hitachi Coin",
  description: "HTCH Coin",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-mono antialiased",
          fontSans.variable
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
