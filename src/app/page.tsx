import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>くらしの百貨おくも｜丹波篠山の小さな百貨店</title>
        <meta
          name="description"
          content="丹波篠山市の80代夫婦が営む地域密着の小売店。飲料・食品・日用品・衣料・農業用品など幅広く取り扱っています。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="くらしの百貨おくも" />
        <meta
          property="og:description"
          content="丹波篠山の地域に根ざした暮らしの百貨店。"
        />
        <meta property="og:image" content="/images/hero.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://okumo-hyakka.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* ヘッダー */}
        <header className="p-4 bg-white shadow">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">くらしの百貨おくも</h1>
            <nav>
              <ul className="flex gap-4">
                <li>
                  <a href="#about" className="hover:underline">
                    お店について
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:underline">
                    商品一覧
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* ヒーローセクション */}
        <section
          className="bg-cover bg-center h-[75vh] relative"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        >
          <div className="relative z-10 h-full flex items-end">
            <div className="m-10 text-white max-w-xl text-left">
              <h2 className="text-3xl md:text-3xl font-semibold tracking-wide leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                <span className="block sm:inline">日常に寄り添う、</span>
                <span className="block sm:inline sm:ml-0 ml-6">小さなこだわり。</span>
              </h2>
            </div>
          </div>
        </section>

        {/* お店についてセクション */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* 写真エリア */}
            <div className="w-full md:w-1/2">
              <img
                src="/images/about.png"
                alt="お店の外観や様子"
                className="max-w-full md:max-w-md rounded-xl shadow-lg"
              />
            </div>

            {/* テキストエリア */}
            <div className="w-full md:w-1/2 text-gray-800">
              <h3 className="text-3xl font-bold mb-4">お店について</h3>
              <p className="text-lg leading-relaxed mb-4">
                くらしの百貨おくもは、<strong>丹波篠山市にある小さな小売店</strong>です。
                現在も<strong>80代の夫婦が元気に働きながら</strong>、地域のお客様とともにお店を続けています。
              </p>
              <p className="text-lg leading-relaxed mb-4">
                飲料、アルコール、衣料品、文房具、日用品、食品、お菓子、靴、農業用品、たばこ、くすりなど、<strong>小さいながらも幅広い商品</strong>を取り揃えています。
              </p>
              <p className="text-lg leading-relaxed">
                「このお店があって助かる」「ちょっと寄ってみよう」──
                そんな声に支えられながら、今日もお客様をお迎えしています。
              </p>
            </div>
          </div>
        </section>


        {/* 商品一覧セクション */}
        <section id="products" className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">おすすめ商品</h3>

            {/* 1列～3列のレスポンシブなグリッド */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              {/* 商品カード1 */}
              <div className="bg-white p-4 rounded shadow">
                <Image
                  src="/images/product1.jpg"
                  alt="商品1"
                  width={400}
                  height={300}
                  className="rounded"
                />
                <h4 className="mt-4 font-semibold text-xl">商品名1</h4>
                <p className="mt-2">こちらは商品の説明文です。</p>
                <p className="mt-2 font-bold">¥1,000</p>
              </div>

              {/* 商品カード2 */}
              <div className="bg-white p-4 rounded shadow">
                <Image
                  src="/images/product2.jpg"
                  alt="商品2"
                  width={400}
                  height={300}
                  className="rounded"
                />
                <h4 className="mt-4 font-semibold text-xl">商品名2</h4>
                <p className="mt-2">こちらは商品の説明文です。</p>
                <p className="mt-2 font-bold">¥2,000</p>
              </div>

              {/* 商品カード3 */}
              <div className="bg-white p-4 rounded shadow">
                <Image
                  src="/images/product3.jpg"
                  alt="商品3"
                  width={400}
                  height={300}
                  className="rounded"
                />
                <h4 className="mt-4 font-semibold text-xl">商品名3</h4>
                <p className="mt-2">こちらは商品の説明文です。</p>
                <p className="mt-2 font-bold">¥3,000</p>
              </div>

            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section id="contact" className="py-12 container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">お問い合わせ</h3>
          <p className="text-center text-lg mb-6">
            ご質問やご意見がございましたら、下記の方法でお問い合わせください。
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:info@okumo.jp"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded uppercase tracking-wider font-semibold"
            >
              メールでお問い合わせ
            </a>
          </div>
        </section>

        {/* フッター */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>
              &copy; {new Date().getFullYear()} くらしの百貨おくも. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
