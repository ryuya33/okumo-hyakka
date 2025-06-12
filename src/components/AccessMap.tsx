export default function AccessMap() {
    return (
        <section id="access" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-8">アクセスマップ</h3>
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2207.427106977722!2d135.33536647192085!3d35.11642345035726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600040f636930673%3A0x2c08257957fba278!2z44Ok44Oe44K244Kt44K344On44OD44OXIOOBj-OCieOBl-OBrueZvuiyqOOBiuOBj-OCgg!5e0!3m2!1sja!2sjp!4v1749761335579!5m2!1sja!2sjp"
                        className="w-full h-full border-0"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="text-center mt-4">
                    <p className="text-lg">〒669-2603 兵庫県丹波篠山市福井31-1</p>
                </div>
            </div>
        </section>
    );
}
