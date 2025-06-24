// src/components/ProductSection.tsx
import Image from "next/image";

export default function ProductSection() {
    const items = [
        {
            src: "/images/product1.JPG",
            alt: "食品エリア",
            title: "Food Market",
            desc: "お菓子、パン、弁当、惣菜、ドリンク、調味料、果物など、毎日の食を支えるアイテムが並んでいます。",
        },
        {
            src: "/images/product2.JPG",
            alt: "衣料品エリア",
            title: "Fashion Market",
            desc: "靴や衣料品が揃ったエリアは、機能性とスタイルを両立したアイテムをご用意。制服の注文も受け付けています。",
        },
        {
            src: "/images/product3.JPG",
            alt: "日用品エリア",
            title: "Daily Market",
            desc: "日用品や便利グッズが整ったエリア。毎日の暮らしを彩る商品が並びます。薬も種類は少ないですが取り扱っています。",
        },
    ];

    return (
        <section id="products" className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold text-center mb-8">売り場の様子</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white p-4 rounded shadow transition-transform transform hover:-translate-y-1 hover:shadow-lg flex flex-col items-center"
                        >
                            <Image src={item.src} alt={item.alt} width={400} height={300} className="rounded" />
                            <h4 className="mt-4 font-semibold text-xl">{item.title}</h4>
                            <p className="mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
