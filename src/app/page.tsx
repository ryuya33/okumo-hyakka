import Image from "next/image";

export default function Home() {
  return (
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
        className="bg-cover bg-center h-[60vh] relative"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto flex flex-col justify-center h-full text-white">
          <h2 className="text-5xl font-extrabold mb-4">くらしの百貨おくもへようこそ</h2>
          <p className="text-xl mb-6">
            日常を彩るこだわりの商品をお届けします
          </p>
          <a
            href="#products"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded uppercase tracking-wider font-semibold"
          >
            商品を見る
          </a>
        </div>
      </section>

      {/* お店についてセクション */}
      <section id="about" className="py-12 container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-4">お店について</h3>
        <p className="text-center text-lg max-w-2xl mx-auto">
          くらしの百貨おくもは、地元に根差した温かみあるサービスと、こだわりの商品を通して、皆さまの暮らしを豊かにするお店です。
        </p>
      </section>

      {/* 商品一覧セクション */}
      <section id="products" className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">おすすめ商品</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* 商品カード例 */}
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
  );
}
