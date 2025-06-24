// app/head.tsx
export default function Head() {
    return (
        <>
            {/* エンコーディング & レスポンシブ */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* ファビコン設定 */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

            {/* PWAやSEO補助 */}
            <meta name="theme-color" content="#ffffff" />
            <meta name="format-detection" content="telephone=no" />
        </>
    );
}
