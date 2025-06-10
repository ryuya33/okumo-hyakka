import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  // サイトのタイトル
  title: {
    default: "くらしの百貨おくも｜丹波篠山の小さな百貨店",
    template: "%s | くらしの百貨おくも",
  },
  // サイトの説明文
  description: "丹波篠山市の80代夫婦が営む地域密着の小売店。食品・飲料・日用品・衣料・農業用品など幅広く取り扱っています。",
  // OGP（SNSでシェアされたときに表示される情報）設定
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Webサイトの言語を日本語に設定
    <html lang="ja">
      {/* bodyタグにフォントのクラスを適用 */}
      <body className={`${notoSansJp.variable} font-sans antialiased`}>
        <Header />

        {/* children（各ページの内容）は<main>タグで囲むと、
            検索エンジンが「ここがメインコンテンツだ」と理解しやすくなる */}
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
