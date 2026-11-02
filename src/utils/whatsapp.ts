import {
  PRODUCTS,
  ProductCategory,
  ProductItem,
  WHATSAPP_NUMBER,
} from '../data/coutureData';

export interface WhatsAppOrderParams {
  productName?: string;
  size?: string;
  color?: string;
  notes?: string;
}

/**
 * Generates an official wa.me URL with properly encoded Arabic message text.
 * Always uses the centralized WHATSAPP_NUMBER configuration variable.
 */
export function buildWhatsAppOrderUrl(params: WhatsAppOrderParams = {}): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const trimmedProduct = params.productName?.trim();

  const lines: string[] = [];

  if (trimmedProduct) {
    lines.push('السلام عليكم، أرغب في طلب:');
    lines.push(trimmedProduct);
    if (params.size?.trim()) {
      lines.push(`المقاس: ${params.size.trim()}`);
    }
    if (params.color?.trim()) {
      lines.push(`اللون / المواصفات: ${params.color.trim()}`);
    }
    if (params.notes?.trim()) {
      lines.push(`ملاحظات: ${params.notes.trim()}`);
    }
    lines.push('أرجو إرسال تفاصيل المقاسات والألوان والسعر.');
  } else {
    lines.push('السلام عليكم، أرغب في الاستفسار عن تشكيلة أبو هريرة للأزياء السودانية.');
    lines.push('أرجو إرسال تفاصيل المقاسات والألوان والأسعار المتوفرة.');
  }

  const message = lines.join('\n');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats an integer SDG amount into a clean tabular currency string.
 */
export function formatPriceSDG(amount: number): string {
  const safeAmount = Number.isFinite(amount) && amount >= 0 ? Math.round(amount) : 0;
  return `SDG ${safeAmount.toLocaleString('en-US')}`;
}

/**
 * Filters the centralized product catalog by category.
 */
export function filterProductsByCategory(
  products: readonly ProductItem[],
  category: ProductCategory
): ProductItem[] {
  if (category === 'all') {
    return [...products];
  }
  return products.filter((item) => item.category === category);
}

/**
 * Validates that the centralized product catalog meets all visual and data integrity rules.
 */
export function validateCatalogIntegrity(products: readonly ProductItem[] = PRODUCTS): {
  valid: boolean;
  uniqueImagesCount: number;
  totalProducts: number;
} {
  const imageSet = new Set(products.map((p) => p.image));
  const allHaveNamesAndPrices = products.every(
    (p) =>
      p.nameAr.trim().length > 0 &&
      p.nameEn.trim().length > 0 &&
      p.priceSDG > 0 &&
      p.image.trim().length > 0
  );

  return {
    valid: allHaveNamesAndPrices && imageSet.size === products.length && products.length >= 8,
    uniqueImagesCount: imageSet.size,
    totalProducts: products.length,
  };
}
