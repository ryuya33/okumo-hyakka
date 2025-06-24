export default function ContactSection() {
    return (
        <section id="contact" className="py-12 container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-4">お問い合わせ</h3>
            <p className="text-center text-lg mb-6">
                商品の在庫やご相談など、お気軽にお電話ください。
            </p>
            <div className="flex justify-center">
                <a
                    href="tel:079-558-0031"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded uppercase tracking-wider font-semibold transition-transform transform hover:scale-105"
                >
                    📞 079-558-0031 に電話する
                </a>
            </div>
        </section>
    );
}
