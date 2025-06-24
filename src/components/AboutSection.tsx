import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* 写真エリア */}
                <div className="flex justify-center items-center">
                    <Image
                        src="/images/about.png"
                        alt="80代夫婦の写真"
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
    );
}
