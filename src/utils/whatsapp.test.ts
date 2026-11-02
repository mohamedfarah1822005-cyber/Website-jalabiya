import test from 'node:test';
import assert from 'node:assert/strict';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/coutureData';
import {
  buildWhatsAppOrderUrl,
  filterProductsByCategory,
  formatPriceSDG,
  validateCatalogIntegrity,
} from './whatsapp';

test('WHATSAPP_NUMBER is centralized and set to demonstration number 249900000000', () => {
  assert.equal(WHATSAPP_NUMBER, '249900000000');
});

test('buildWhatsAppOrderUrl encodes Arabic product order message correctly', () => {
  const url = buildWhatsAppOrderUrl({ productName: 'جلابية مناسبات (Occasion Jalabiya)' });
  assert.equal(url.startsWith('https://wa.me/249900000000?text='), true);

  const decoded = decodeURIComponent(url.replace('https://wa.me/249900000000?text=', ''));
  assert.equal(decoded.includes('السلام عليكم، أرغب في طلب:'), true);
  assert.equal(decoded.includes('جلابية مناسبات (Occasion Jalabiya)'), true);
  assert.equal(decoded.includes('أرجو إرسال تفاصيل المقاسات والألوان والسعر.'), true);
});

test('buildWhatsAppOrderUrl includes size, color, and custom notes when provided', () => {
  const url = buildWhatsAppOrderUrl({
    productName: 'طقم على الله',
    size: '58 (L)',
    color: 'أبيض ملكي مع شال ذهبي',
    notes: 'توصيل للخرطوم',
  });
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.equal(decoded.includes('طقم على الله'), true);
  assert.equal(decoded.includes('المقاس: 58 (L)'), true);
  assert.equal(decoded.includes('اللون / المواصفات: أبيض ملكي مع شال ذهبي'), true);
  assert.equal(decoded.includes('ملاحظات: توصيل للخرطوم'), true);
});

test('PRODUCTS catalog contains 8 distinct items with unique real images', () => {
  const integrity = validateCatalogIntegrity(PRODUCTS);
  assert.equal(integrity.totalProducts, 8);
  assert.equal(integrity.uniqueImagesCount, 8);
  assert.equal(integrity.valid, true);
});

test('filterProductsByCategory filters royal, sets, and classic categories accurately', () => {
  const all = filterProductsByCategory(PRODUCTS, 'all');
  const royal = filterProductsByCategory(PRODUCTS, 'royal');
  const sets = filterProductsByCategory(PRODUCTS, 'sets');
  const classic = filterProductsByCategory(PRODUCTS, 'classic');

  assert.equal(all.length, 8);
  assert.equal(royal.length + sets.length + classic.length, 8);
  assert.equal(royal.every((p) => p.category === 'royal'), true);
});

test('formatPriceSDG formats SDG currency cleanly', () => {
  assert.equal(formatPriceSDG(120000), 'SDG 120,000');
  assert.equal(formatPriceSDG(75000), 'SDG 75,000');
});
