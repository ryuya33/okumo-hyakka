import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Googleフォント設定
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

// メタデータ定義（SEO、OGP、Twitter、favicon）
export const metadata: Metadata = {
  title: {
    default: "くらしの百貨おくも｜丹波篠山の小さな百貨店",
    template: "%s | くらしの百貨おくも",
  },
  description: "丹波篠山市の80代夫婦が営む地域密着の小売店。食品・飲料・日用品・衣料・農業用品など幅広く取り扱っています。",

  openGraph: {
    title: "くらしの百貨おくも｜丹波篠山の小さな百貨店",
    description: "丹波篠山の地域に根ざした暮らしの百貨店。",
    url: "https://okumo-hyakka.vercel.app/",
    siteName: "くらしの百貨おくも",
    images: [
      {
        url: "https://okumo-hyakka.vercel.app/images/hero.png",
        width: 1200,
        height: 630,
        alt: "くらしの百貨おくも OGP画像",
      },
    ],
    type: "website",
  },

  // Twitterでシェアされたときの設定
  twitter: {
    card: "summary_large_image",
    title: "くらしの百貨おくも｜丹波篠山の小さな百貨店",
    description: "丹波篠山の地域に根ざした暮らしの百貨店。",
    images: ["https://okumo-hyakka.vercel.app/images/hero.png"],
  },

  icons: {
    icon: [
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicons/apple-touch-icon.png",
    shortcut: "/favicons/favicon.ico",
  },

  manifest: "/favicons/site.webmanifest",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
