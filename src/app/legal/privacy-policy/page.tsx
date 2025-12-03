import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Gizlilik Politikası</h1>

                <div className="prose prose-lg text-gray-600">
                    <p className="mb-6">
                        Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
                    </p>

                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mt-8 mb-4">1. Veri Toplama ve Kullanım</h2>
                    <p className="mb-4">
                        Gentogen ("Şirket") olarak, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu bilinçle, Şirket olarak ürün ve hizmetlerimizden faydalanan kişiler dahil, Şirket ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVK Kanunu")'na uygun olarak işlenerek, muhafaza edilmesine büyük önem atfetmekteyiz.
                    </p>

                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mt-8 mb-4">2. Toplanan Bilgiler</h2>
                    <p className="mb-4">
                        Hizmetlerimizi kullandığınızda aşağıdaki bilgileri toplayabiliriz:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Kimlik Bilgileri (Ad, Soyad)</li>
                        <li>İletişim Bilgileri (E-posta, Telefon, Adres)</li>
                        <li>İşlem Güvenliği Bilgileri (IP Adresi, Log Kayıtları)</li>
                        <li>Müşteri İşlem Bilgileri (Sipariş Bilgisi, Talep Bilgisi)</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mt-8 mb-4">3. Çerezler (Cookies)</h2>
                    <p className="mb-4">
                        Web sitemizde kullanıcı deneyimini geliştirmek amacıyla çerezler kullanılmaktadır. Çerez tercihlerinizi tarayıcı ayarlarınızdan değiştirebilirsiniz.
                    </p>

                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mt-8 mb-4">4. İletişim</h2>
                    <p>
                        Gizlilik politikamızla ilgili sorularınız için <a href="mailto:info@gentogen.com" className="text-blue-600 hover:underline">info@gentogen.com</a> adresinden bize ulaşabilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    );
}
