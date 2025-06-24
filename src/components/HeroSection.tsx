export default function HeroSection() {
    return (
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
    );
}
