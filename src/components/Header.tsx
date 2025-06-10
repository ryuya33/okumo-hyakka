"use client";

import Link from 'next/link';

export default function Header() {
    return (
        <header className="p-4 bg-white shadow sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">
                    <Link href="/">くらしの百貨おくも</Link>
                </h1>
                <nav>
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
