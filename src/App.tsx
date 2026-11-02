/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Language, ProductItem } from './data/coutureData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Collection } from './components/Collection';
import { EditorialSection } from './components/EditorialSection';
import { FabricsSection } from './components/FabricsSection';
import { ReelsSection } from './components/ReelsSection';
import { BrandStory } from './components/BrandStory';
import { Footer, FloatingWhatsApp } from './components/Footer';
import { ProductModal } from './components/ProductModal';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    const htmlEl = document.documentElement;
    htmlEl.lang = lang;
    htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#0B0B0E] text-[#F4EFE6] flex flex-col selection:bg-[#C6A46A] selection:text-[#0B0B0E]"
    >
      <Navbar lang={lang} onToggleLang={setLang} />

      <main className="flex-1">
        <Hero lang={lang} />
        <TrustBar lang={lang} />
        <Collection lang={lang} onSelectProduct={setSelectedProduct} />
        <EditorialSection lang={lang} />
        <FabricsSection lang={lang} />
        <ReelsSection lang={lang} />
        <BrandStory lang={lang} />
      </main>

      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />

      <ProductModal
        product={selectedProduct}
        lang={lang}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
