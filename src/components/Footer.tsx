export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p>
                    &copy; {new Date().getFullYear()} くらしの百貨おくも. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
