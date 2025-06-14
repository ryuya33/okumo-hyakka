import Image from "next/image";

import AccessMap from '@/components/AccessMap';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* ヒーローセクション */}
        <section
          className="bg-cover bg-center h-[75vh] relative"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        >
          <div className="relative z-10 h-full flex items-end">
            <div className="m-10 text-white max-w-xl text-left fade-slide-in">
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
            <div className="flex justify-center items-center">
              <Image
                src="/images/about.png"
                alt="80代のご夫婦の写真"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>

            {/* テキストエリア */}
            <div className="w-full md:w-3/5 text-gray-800 px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold mb-4">お店について</h3>
              <p className="text-lg leading-relaxed mb-4">
                くらしの百貨おくもは、<strong>丹波篠山市にある小さな小売店</strong>です。<br />
                <strong>80代の夫婦が元気に働きながら</strong>、地域のお客様とともにお店を続けています。
              </p>
              <p className="text-lg leading-relaxed mb-4">
                食品、お菓子、飲料、アルコール、衣料品、文房具、日用品、靴、農業用品、たばこ、くすりなど、<strong>小さいながらも幅広い商品</strong>を取り揃えています。
              </p>
              <p className="text-md italic text-gray-600">
                「このお店があって助かる」「ちょっと寄ってみよう」<br />
                — そんな声に支えられながら、今日もお客様をお迎えしています。
              </p>
            </div>
          </div>
        </section>

        {/* 商品一覧セクション */}
        <section id="products" className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">売り場の様子</h3>

            {/* 1列～3列のレスポンシブなグリッド */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">

              {/* 売り場1 */}
              <div className="bg-white p-4 rounded shadow transition-transform transform hover:-translate-y-1 hover:shadow-lg flex justify-center items-center flex-col">
                <Image
                  src="/images/product1.JPG"
                  alt="くらしの百貨おくもの店内（食品等）"
                  width={400}
                  height={300}
                  className="rounded"
                />
                <h4 className="mt-4 font-semibold text-xl">Food Market</h4>
                <p className="mt-2">お菓子やパン、弁当、ドリンクなど、日々の暮らしを支えるアイテムが並ぶエリア。一部果物やアルコールも揃い、便利で心地よい時間をお届けします。</p>
              </div>

              {/* 売り場2 */}
              <div className="bg-white p-4 rounded shadow transition-transform transform hover:-translate-y-1 hover:shadow-lg flex justify-center items-center flex-col">
                <Image
                  src="/images/product2.JPG"
                  alt="商品2"
                  width={400}
                  height={300}
                  className="rounded"
                />
                <h4 className="mt-4 font-semibold text-xl">Fashion Market</h4>
                <p className="mt-2">靴や衣料品が揃ったエリアは、機能性とスタイルを両立したアイテムで、季節にぴったりの選びやすさを提供します。</p>
              </div>

              {/* 売り場3 */}
              <div className="bg-white p-4 rounded shadow transition-transform transform hover:-translate-y-1 hover:shadow-lg flex justify-center items-center flex-col">
                <Image
                  src="/images/product3.JPG"
                  alt="商品3"
                  width={400}
                  height={300}
                  className="rounded"
                />
                <h4 className="mt-4 font-semibold text-xl">Daily Market</h4>
                <p className="mt-2">毎日の暮らしに欠かせない日用品や便利グッズが整ったエリア。実用的で、生活を豊かに彩る商品が並びます。</p>
              </div>
            </div>
          </div>
        </section>

        <AccessMap />

        {/* お問い合わせセクション */}
        <section id="contact" className="py-12 container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">お問い合わせ</h3>
          <p className="text-center text-lg mb-6">
            ご質問やご意見がございましたら、下記の方法でお問い合わせください。
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:info@okumo.jp"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded uppercase tracking-wider font-semibold transition-transform transform hover:scale-105"
            >
              メールでお問い合わせ
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
