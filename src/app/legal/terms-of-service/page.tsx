import React from "react";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Kullanım Koşulları</h1>

                <div className="prose prose-lg text-gray-600">
                    <p className="mb-6">
                        Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
                    </p>

                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mt-8 mb-4">1. Kabul Edilme</h2>
                    <p className="mb-4">
                        Gentogen web sitesini ve hizmetlerini kullanarak, bu Kullanım Koşullarını kabul etmiş sayılırsınız. Eğer bu koşulları kabul etmiyorsanız, lütfen hizmetlerimizi kullanmayınız.
                    </p>

                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mt-8 mb-4">2. Hizmet Kullanımı</h2>
                    <p className="mb-4">
                        Sitemiz üzerinden sunulan hizmetler sadece yasal amaçlar için kullanılabilir. Aşağıdaki eylemler kesinlikle yasaktır:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Yasadışı içerik paylaşımı</li>
                        <li>Sistem güvenliğini tehdit edici davranışlar</li>
                        <li>Başkalarının haklarını ihlal edici eylemler</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mt-8 mb-4">3. Fikri Mülkiyet</h2>
                    <p className="mb-4">
                        Bu sitede yer alan tüm içerik, tasarımlar, logolar ve yazılımlar Gentogen'e aittir ve telif hakkı kanunları ile korunmaktadır. İzinsiz kullanımı yasaktır.
                    </p>

                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mt-8 mb-4">4. Değişiklikler</h2>
                    <p>
                        Gentogen, bu kullanım koşullarını dilediği zaman değiştirme hakkını saklı tutar. Değişiklikler sitede yayınlandığı tarihte yürürlüğe girer.
                    </p>
                </div>
            </div>
        </div>
    );
}
