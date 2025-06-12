"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="p-4 bg-white shadow sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image
                        src="/images/logo.png"
                        alt="くらしの百貨おくも ロゴ"
                        width={32}
                        height={32}
                        className="h-8 w-auto"
                    />
                    <span>くらしの百貨おくも</span>
                </Link>
                <nav aria-label="メインナビゲーション">
                    <ul className="flex gap-4">
                        <li>
                            <Link href="#about" className="hover:underline">
                                お店について
                            </Link>
                        </li>
                        <li>
                            <Link href="#products" className="hover:underline">
                                商品一覧
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="hover:underline">
                                お問い合わせ
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
