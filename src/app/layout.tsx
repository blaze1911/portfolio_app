import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "GIS/AI 포트폴리오",
    template: "%s | GIS/AI 포트폴리오",
  },
  description: "GIS와 AI 전문성을 신뢰감 있게 보여주는 포트폴리오",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "GIS/AI 포트폴리오",
    description: "GIS와 AI 전문성을 신뢰감 있게 보여주는 포트폴리오",
    type: "website",
    url: "/",
  },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }, { media: "(prefers-color-scheme: light)", color: "#ffffff" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>        
        <SiteHeader />
        <main className="mx-auto max-w-6xl px-6">
          {children}
        </main>
        <footer className="mt-16 border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} GIS/AI Portfolio</p>
            <div className="flex gap-4">
              <a className="hover:opacity-80" href="/sitemap.xml">Sitemap</a>
              <a className="hover:opacity-80" href="#">Privacy</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
