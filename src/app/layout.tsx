import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ilias Hamdaoui | Stageportfolio",
    template: "%s | Ilias Hamdaoui"
  },
  description:
    "Portfolio en stageblog van Ilias Hamdaoui met wekelijkse reflecties, technische highlights en lessons learned tijdens stage bij TheValueChain."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main className="main-content container">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
