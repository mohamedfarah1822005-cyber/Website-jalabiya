export type Language = 'ar' | 'en';

export type ProductCategory = 'all' | 'royal' | 'sets' | 'classic';

/**
 * Centralized WhatsApp Configuration
 * Easy to replace with the actual business number when going live.
 */
export const WHATSAPP_NUMBER = '249900000000';
export const WHATSAPP_DISPLAY = '+249 90 000 0000';

export interface ProductItem {
  id: string;
  slug: string;
  category: Exclude<ProductCategory, 'all'>;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  fabricAr: string;
  fabricEn: string;
  /** Temporary sample price in SDG - centralized for easy editing */
  priceSDG: number;
  image: string;
  fallbackImage: string;
  tagAr: string;
  tagEn: string;
  colorsAr: string[];
  colorsEn: string[];
  sizes: string[];
}

/**
 * Centralized Products Data Array (8 Distinct Luxury Garments)
 * Prices are temporary sample figures in SDG and can be updated from this single array.
 */
export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    slug: 'occasion-jalabiya',
    category: 'royal',
    nameAr: 'جلابية مناسبات',
    nameEn: 'Occasion Jalabiya',
    descAr: 'تصميم فاخر للمناسبات الخاصة مزود بشال سوداني مطرز بعناية فائقة.',
    descEn: 'Bespoke ceremonial jalabiya paired with an intricately embroidered Sudanese shawl.',
    fabricAr: 'توتال سويسري أصلي 100% · تطريز خيوط حريرية',
    fabricEn: '100% Authentic Swiss Totall · Silk Thread Embroidery',
    priceSDG: 120000,
    image: '/assets/couture/prod-occasion-jalabiya.jpg',
    fallbackImage: '/assets/couture/hero-sudanese-model.jpg',
    tagAr: 'الأكثر طلباً',
    tagEn: 'Signature Look',
    colorsAr: ['أبيض ملكي مع شال رملي', 'عاجي كلاسيكي', 'أبيض ناصع'],
    colorsEn: ['Royal White & Sand Shawl', 'Classic Ivory', 'Pure White'],
    sizes: ['54 (S)', '56 (M)', '58 (L)', '60 (XL)', '62 (XXL)', 'تفصيل خاص / Custom'],
  },
  {
    id: 'prod-2',
    slug: 'classic-jalabiya',
    category: 'classic',
    nameAr: 'جلابية سادة كلاسيك',
    nameEn: 'Classic Jalabiya',
    descAr: 'أناقة يومية بخامة مريحة وفاخرة تحافظ على الوقار السوداني الأصيل.',
    descEn: 'Timeless everyday poise tailored from breathable, crisp luxury cotton.',
    fabricAr: 'قطن سويسري معالج ضد التجعد · حياكة مخفية',
    fabricEn: 'Crease-Resistant Swiss Cotton · Concealed Stitching',
    priceSDG: 75000,
    image: '/assets/couture/prod-classic-jalabiya.jpg',
    fallbackImage: '/assets/couture/prod-occasion-jalabiya.jpg',
    tagAr: 'أصالة يومية',
    tagEn: 'Essential Classic',
    colorsAr: ['أبيض ناصع', 'سكري هادئ', 'رمادي فاتح'],
    colorsEn: ['Crisp White', 'Soft Cream', 'Light Mist Grey'],
    sizes: ['54 (S)', '56 (M)', '58 (L)', '60 (XL)', '62 (XXL)', 'تفصيل خاص / Custom'],
  },
  {
    id: 'prod-3',
    slug: 'ala-allah-set',
    category: 'sets',
    nameAr: 'طقم على الله',
    nameEn: 'Ala Allah Set',
    descAr: 'طقم متكامل للمناسبات الرسمية يجمع بين الجلابية، السروال، والشال الملكي المطرز.',
    descEn: 'Complete ceremonial ensemble combining tunic, tailored trousers, and embroidered shawl.',
    fabricAr: 'توتال سويسري فاخر · شال كشميري مطرز يدوياً',
    fabricEn: 'Luxury Swiss Totall · Hand-Embroidered Cashmere-Blend Shawl',
    priceSDG: 150000,
    image: '/assets/couture/prod-ala-allah-set.jpg',
    fallbackImage: '/assets/couture/prod-moroccan-cut.jpg',
    tagAr: 'طقم متكامل',
    tagEn: 'Complete Ensemble',
    colorsAr: ['أزرق سماوي مع شال كحلي', 'أبيض ملكي مع شال ذهبي', 'فضي هادئ'],
    colorsEn: ['Sky Blue & Navy Shawl', 'Royal White & Gold Shawl', 'Muted Silver'],
    sizes: ['54 (S)', '56 (M)', '58 (L)', '60 (XL)', '62 (XXL)', 'تفصيل خاص / Custom'],
  },
  {
    id: 'prod-4',
    slug: 'moroccan-cut',
    category: 'sets',
    nameAr: 'قصة مغربي',
    nameEn: 'Moroccan Cut',
    descAr: 'جلابية فاخرة بتفصيل مغربي أنيق وياقة محددة بالسفيفه المغربية المتقنة.',
    descEn: 'Architectural Moroccan-cut silhouette framed with artisanal contrast sfifa trim.',
    fabricAr: 'قطن مخلوط فاخر · تطريز سفيفة مغربية يدوية',
    fabricEn: 'Premium Blended Cotton · Hand-Braided Sfifa Placket',
    priceSDG: 85000,
    image: '/assets/couture/prod-moroccan-cut.jpg',
    fallbackImage: '/assets/couture/prod-ala-allah-set.jpg',
    tagAr: 'قصّة خاصة',
    tagEn: 'Artisanal Cut',
    colorsAr: ['عاجي بتحديد بني داكن', 'أبيض بتحديد ذهبي', 'بيج صحراوي'],
    colorsEn: ['Ivory with Espresso Trim', 'White with Gold Trim', 'Desert Beige'],
    sizes: ['54 (S)', '56 (M)', '58 (L)', '60 (XL)', '62 (XXL)', 'تفصيل خاص / Custom'],
  },
  {
    id: 'prod-5',
    slug: 'royal-jalabiya',
    category: 'royal',
    nameAr: 'جلابية ملكية',
    nameEn: 'Royal Jalabiya',
    descAr: 'إصدار ملكي فاخر بقصة معمارية راقية وأزرار معدنية مصقولة للمحافل الكبرى.',
    descEn: 'Regal champagne-toned couture silhouette with sculpted collar and burnished buttons.',
    fabricAr: 'جاكار وقطن ملكي إيطالي-سويسري · أزرار مطلية',
    fabricEn: 'Swiss-Italian Royal Cotton Jacquard · Burnished Buttons',
    priceSDG: 165000,
    image: '/assets/couture/prod-royal-jalabiya.jpg',
    fallbackImage: '/assets/couture/editorial-right-duo.jpg',
    tagAr: 'إصدار ملكي',
    tagEn: 'Royal Edition',
    colorsAr: ['شامبين ذهبي', 'عاجي ملكي', 'أبيض لؤلؤي'],
    colorsEn: ['Champagne Gold', 'Royal Ivory', 'Pearl White'],
    sizes: ['54 (S)', '56 (M)', '58 (L)', '60 (XL)', '62 (XXL)', 'تفصيل خاص / Custom'],
  },
  {
    id: 'prod-6',
    slug: 'premium-cotton-jalabiya',
    category: 'classic',
    nameAr: 'جلابية قطن فاخر',
    nameEn: 'Premium Cotton Jalabiya',
    descAr: 'تصميم يجمع بين الجلابية القطنية الناعمة والصديري المنسوج بنقوش هندسية راقية.',
    descEn: 'Long-staple luxury cotton tunic layered with a geometric woven waistcoat.',
    fabricAr: 'قطن طويل التيلة 100% · ملمس حريري بارد',
    fabricEn: '100% Long-Staple Cotton · Cool Silky Handfeel',
    priceSDG: 95000,
    image: '/assets/couture/prod-premium-cotton.jpg',
    fallbackImage: '/assets/couture/editorial-left-duo.jpg',
    tagAr: 'خامة استثنائية',
    tagEn: 'Finest Cotton',
    colorsAr: ['أبيض مع صديري منقوش', 'أبيض خالص', 'كريمي فاخر'],
    colorsEn: ['White with Woven Vest', 'Pure White', 'Luxury Cream'],
    sizes: ['54 (S)', '56 (M)', '58 (L)', '60 (XL)', '62 (XXL)', 'تفصيل خاص / Custom'],
  },
  {
    id: 'prod-7',
    slug: 'embroidered-jalabiya',
    category: 'royal',
    nameAr: 'جلابية مطرزة',
    nameEn: 'Embroidered Jalabiya',
    descAr: 'تطريز هندسي متقن على الصدر والياقة مستوحى من الزخارف السودانية التراثية.',
    descEn: 'Hand-guided geometric chest and collar embroidery inspired by Nubian-Sudanese motifs.',
    fabricAr: 'توتال سويسري درجة أولى · تطريز يدوي بارز',
    fabricEn: 'First-Grade Swiss Totall · Raised Artisanal Embroidery',
    priceSDG: 135000,
    image: '/assets/couture/prod-embroidered-jalabiya.jpg',
    fallbackImage: '/assets/couture/poster-walk.jpg',
    tagAr: 'تطريز يدوي',
    tagEn: 'Hand Embroidered',
    colorsAr: ['أبيض عاجي بتطريز ملون هادئ', 'أبيض بتطريز فضي', 'أبيض بتطريز ذهبي'],
    colorsEn: ['Ivory with Heritage Motif', 'White with Silver Thread', 'White with Gold Thread'],
    sizes: ['54 (S)', '56 (M)', '58 (L)', '60 (XL)', '62 (XXL)', 'تفصيل خاص / Custom'],
  },
  {
    id: 'prod-8',
    slug: 'modern-sudanese-set',
    category: 'sets',
    nameAr: 'طقم سوداني عصري',
    nameEn: 'Modern Sudanese Set',
    descAr: 'رؤية معاصرة للزي السوداني بطبقات متناسقة وبريق خيوط ذهبية هادئة للعرسان والمناسبات.',
    descEn: 'Contemporary Sudanese evening ensemble with subtle gold-threaded texture for grooms and galas.',
    fabricAr: 'نسيج فاخر مطعم بخيوط القصب · بطانة قطنية ناعمة',
    fabricEn: 'Metallic-Spun Couture Weave · Soft Breathable Cotton Lining',
    priceSDG: 140000,
    image: '/assets/couture/prod-modern-sudanese-set.jpg',
    fallbackImage: '/assets/couture/poster-tailoring.jpg',
    tagAr: 'تصميم عصري',
    tagEn: 'Modern Couture',
    colorsAr: ['ذهبي رملي فاتح', 'عاجي لامع', 'أبيض ملكي'],
    colorsEn: ['Sandstone Gold', 'Luminous Ivory', 'Royal White'],
    sizes: ['54 (S)', '56 (M)', '58 (L)', '60 (XL)', '62 (XXL)', 'تفصيل خاص / Custom'],
  },
];

export interface HeroSlide {
  id: string;
  image: string;
  kickerEn: string;
  titleEn: string;
  titleAr: string;
  subtitleAr: string;
  subtitleEn: string;
  featuredProductNameAr: string;
  featuredProductNameEn: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    image: '/assets/couture/hero-sudanese-model.jpg',
    kickerEn: 'ABU HURAIRA PRESENTS',
    titleEn: 'RESURGENCE',
    titleAr: 'إحياء أصالة الهيبة السودانية',
    subtitleAr: 'تصاميم استثنائية تجمع بين أصالة الزي السوداني وفخامة التفاصيل العصرية من أفخر أنواع التوتال والقطن الطبيعي.',
    subtitleEn: 'Exceptional creations uniting the noble heritage of Sudanese attire with contemporary haute craftsmanship.',
    featuredProductNameAr: 'جلابية مناسبات ملكية - تشكيلة إحياء الأصالة',
    featuredProductNameEn: 'Royal Occasion Jalabiya — Resurgence Collection',
  },
  {
    id: 'slide-2',
    image: '/assets/couture/hero-slide-2-models.jpg',
    kickerEn: 'ROYAL BESPOKE EDITION',
    titleEn: 'SOVEREIGNTY',
    titleAr: 'فخامة تليق بالمناسبات الكبرى',
    subtitleAr: 'قصّات ملكية مفصلة يدوياً بدقة المليمتر، تمنحك حضوراً مهيباً في الأعياد والمحافل الرسمية.',
    subtitleEn: 'Hand-tailored regal silhouettes engineered to millimeter precision for ceremonial presence.',
    featuredProductNameAr: 'الجلابية الملكية الفاخرة',
    featuredProductNameEn: 'The Royal Couture Jalabiya',
  },
  {
    id: 'slide-3',
    image: '/assets/couture/hero-slide-3-models.jpg',
    kickerEn: 'SWISS TOTALL & HERITAGE EMBROIDERY',
    titleEn: 'CRAFTSMANSHIP',
    titleAr: 'إتقان الحياكة ورفاهية الخامة',
    subtitleAr: 'ننتقي أجود الأقمشة السويسرية والمصرية لنصنع منها قطعاً فنية تدوم طويلاً بلمسة لا تضاهى.',
    subtitleEn: 'Curating the world’s finest Swiss Totall and long-staple cottons into enduring sartorial heirlooms.',
    featuredProductNameAr: 'جلابية مطرزة وطقم قطن فاخر',
    featuredProductNameEn: 'Embroidered Jalabiya & Luxury Cotton Ensemble',
  },
];

export interface CraftItem {
  id: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  specAr: string;
  specEn: string;
  image: string;
}

export const CRAFT_ITEMS: CraftItem[] = [
  {
    id: 'craft-1',
    titleAr: 'قطن طبيعي فاخر',
    titleEn: 'Premium Cotton Fabric',
    subtitleAr: 'قطن طويل التيلة بنعومة فائقة وتهوية مثالية للأجواء الدافئة.',
    subtitleEn: 'Extra-long staple cotton offering unmatched breathability and a crisp, cool drape.',
    specAr: 'نقاء طبيعي 100%',
    specEn: '100% Pure Long-Staple',
    image: '/assets/couture/craft-premium-cotton.jpg',
  },
  {
    id: 'craft-2',
    titleAr: 'توتال سويسري أصلي',
    titleEn: 'Swiss Totall Fabric',
    subtitleAr: 'الخامة الأشهر في الزي السوداني الفاخر ببريقها الهادئ وثبات قوامها.',
    subtitleEn: 'The hallmark of Sudanese luxury attire, prized for its subtle luster and structural poise.',
    specAr: 'توتال سويسري درجة أولى',
    specEn: 'First-Grade Swiss Weave',
    image: '/assets/couture/craft-swiss-totall.jpg',
  },
  {
    id: 'craft-3',
    titleAr: 'تطريز الياقات الملكي',
    titleEn: 'Embroidered Collars',
    subtitleAr: 'زخارف هندسية دقيقة حول الياقة والصدر بخيوط حريرية ثابتة اللون.',
    subtitleEn: 'Intricate geometric collar and placket motifs stitched with colorfast silk threads.',
    specAr: 'غرز عالية الكثافة',
    specEn: 'High-Density Silk Stitch',
    image: '/assets/couture/craft-embroidered-collar.jpg',
  },
  {
    id: 'craft-4',
    titleAr: 'حياكة يدوية متقنة',
    titleEn: 'Hand Stitching',
    subtitleAr: 'مراحل تفصيل يدوية يشرف عليها أمهر الخياطين لضمان استقامة الدرزات.',
    subtitleEn: 'Meticulous hand-guided seam construction executed by master Sudanese tailors.',
    specAr: 'تفصيل حسب المقاس',
    specEn: 'Bespoke Seam Mastery',
    image: '/assets/couture/craft-hand-stitching.jpg',
  },
  {
    id: 'craft-5',
    titleAr: 'أزرار وتشطيبات خاصة',
    titleEn: 'Buttons & Finishing',
    subtitleAr: 'أزرار مختارة بعناية وعراوي محبوكة تمنح الجلابية طابعاً ملكياً متكاملاً.',
    subtitleEn: 'Custom-selected buttons and reinforced buttonholes for a refined architectural finish.',
    specAr: 'تشطيب نهائي فاخر',
    specEn: 'Signature Hardware',
    image: '/assets/couture/craft-buttons-finishing.jpg',
  },
  {
    id: 'craft-6',
    titleAr: 'ملمس القماش وانسيابيته',
    titleEn: 'Fabric Texture',
    subtitleAr: 'انسدال متوازن يمنح الرجل السوداني الهيبة والراحة في كل خطوة.',
    subtitleEn: 'Balanced weight and fluid movement engineered for effortless dignity in motion.',
    specAr: 'مقاوم للتجعد',
    specEn: 'Fluid Crease Recovery',
    image: '/assets/couture/craft-fabric-texture.jpg',
  },
];

export interface ReelItem {
  id: string;
  titleAr: string;
  titleEn: string;
  captionAr: string;
  captionEn: string;
  duration: string;
  videoUrl: string;
  posterImage: string;
  relatedProductAr: string;
  relatedProductEn: string;
}

export const REEL_ITEMS: ReelItem[] = [
  {
    id: 'reel-1',
    titleAr: 'ملمس الخامة وجودتها',
    titleEn: 'Fabric Texture & Quality',
    captionAr: 'انسيابية التوتال السويسري والقطن الطبيعي مع نقوش الشال السوداني الأصيل.',
    captionEn: 'Close-up drape of authentic Swiss Totall and hand-woven Sudanese shawl border.',
    duration: '0:24',
    videoUrl: '/assets/couture/reel-fabric.mp4',
    posterImage: '/assets/couture/poster-fabric.jpg',
    relatedProductAr: 'جلابية مناسبات - توتال سويسري',
    relatedProductEn: 'Occasion Jalabiya — Swiss Totall',
  },
  {
    id: 'reel-2',
    titleAr: 'تفاصيل الياقة والتطريز',
    titleEn: 'Collar & Embroidery Details',
    captionAr: 'دقة الغرز الهندسية على الصدر والياقة بأيدي أمهر الحرفيين.',
    captionEn: 'Precision geometric embroidery framing the neckline and chest placket.',
    duration: '0:31',
    videoUrl: '/assets/couture/reel-collar.mp4',
    posterImage: '/assets/couture/poster-collar.jpg',
    relatedProductAr: 'جلابية مطرزة ملكية',
    relatedProductEn: 'Royal Embroidered Jalabiya',
  },
  {
    id: 'reel-3',
    titleAr: 'حركة الجلابية أثناء المشي',
    titleEn: 'Garment Movement in Motion',
    captionAr: 'ثبات القوام وانسيابية القصة عند الحركة يمنحان حضوراً واثقاً.',
    captionEn: 'Architectural poise and graceful flow in full-length motion.',
    duration: '0:28',
    videoUrl: '/assets/couture/reel-walk.mp4',
    posterImage: '/assets/couture/poster-walk.jpg',
    relatedProductAr: 'جلابية سادة كلاسيك ومطرزة',
    relatedProductEn: 'Classic & Embroidered Jalabiya',
  },
  {
    id: 'reel-4',
    titleAr: 'مراحل التفصيل والخياطة',
    titleEn: 'Tailoring & Stitching Process',
    captionAr: 'عناية فائقة بكل درزة وتشطيب نهائي يرتقي لمعايير دور الأزياء العالمية.',
    captionEn: 'Inside the atelier: bespoke seamwork, metallic thread weaving, and final pressing.',
    duration: '0:19',
    videoUrl: '/assets/couture/reel-tailoring.mp4',
    posterImage: '/assets/couture/poster-tailoring.jpg',
    relatedProductAr: 'طقم سوداني عصري ملكي',
    relatedProductEn: 'Modern Sudanese Royal Set',
  },
];

export const UI_TEXT = {
  ar: {
    brandName: 'أبو هريرة',
    brandSub: 'للأزياء السودانية',
    brandEnSub: 'ABU HURAIRA SUDANESE COUTURE',
    nav: {
      home: 'الرئيسية',
      collection: 'التشكيلة الجديدة',
      editorial: 'الأزياء',
      fabrics: 'الخامات',
      reels: 'مقاطع الفيديو',
      contact: 'تواصل معنا',
      whatsappCta: 'تواصل واتساب',
    },
    hero: {
      shopNow: 'اطلب الآن | SHOP NOW',
      explore: 'استكشف التشكيلة',
      prevSlide: 'الشريحة السابقة',
      nextSlide: 'الشريحة التالية',
    },
    trust: [
      { title: 'قطن وتوتال سويسري 100%', subtitle: 'خامات أصلية منتقاة بعناية' },
      { title: 'تفصيل يدوي متقن', subtitle: 'إشراف أمهر الخياطين السودانيين' },
      { title: 'مقاسات مضبوطة ومريحة', subtitle: 'قياسات جاهزة أو تفصيل خاص' },
      { title: 'توصيل لجميع المناطق', subtitle: 'تغليف فاخر وشحن سريع وموثوق' },
    ],
    collection: {
      titleAr: 'التشكيلة الجديدة',
      titleEn: 'THE COLLECTION',
      subtitle: 'Crafted with Heritage. Designed for Elegance.',
      subtitleAr: 'تصاميم تجمع بين عراقة التراث السوداني وأناقة التفصيل المعاصر.',
      priceNote: 'الأسعار الموضحة تقديرية بالعملة السودانية (SDG) وقابلة للتحديث حسب الخامة والمقاس.',
      filters: {
        all: 'جميع التصاميم',
        royal: 'جلابيات ملكية ومناسبات',
        sets: 'أطقم وقصات خاصة',
        classic: 'كلاسيك وقطن فاخر',
      },
      orderBtn: 'اطلب الآن عبر واتساب',
      quickViewBtn: 'تخصيص المقاس والطلب',
      fabricLabel: 'الخامة:',
    },
    editorial: {
      kicker: 'EDITORIAL CAMPAIGN 2026',
      titleEn: 'BEYOND TRADITION',
      titleAr: 'الأناقة تتجاوز الزمن',
      description: 'نحتفي بالزي السوداني بروح معاصرة، ونمنح كل تفصيلة حقها من الإبداع والإتقان. كل جلابية تخرج من مشغل أبو هريرة هي شهادة على الأصالة والذوق الرفيع.',
      cta: 'احجز تفصيلك الخاص عبر واتساب',
      caption1: 'تناغم الأبيض الملكي مع دفء الشال المطرز',
      caption2: 'قصات معمارية تبرز الهيبة والوقار في المحافل الرسمية',
      caption3: 'تفاصيل دقيقة تجمع بين التراث السوداني وروح العصر',
    },
    fabrics: {
      titleEn: 'THE ART OF CRAFTSMANSHIP',
      titleAr: 'فن التفاصيل',
      subtitle: 'تبدأ فخامة الجلابية من نقاء الخيط وجودة النسيج ودقة اللمسة اليدوية.',
      inquireBtn: 'استفسر عن الخامات المتوفرة',
    },
    reels: {
      titleAr: 'مقاطع الفيديو والريلز',
      titleEn: 'VIDEOS & REELS',
      description: 'شاهد تفاصيل الخامات وجودة التفصيل من قرب، واكتشف حركة الجلابية وأناقتها على الطبيعة.',
      watchMore: 'اطلب الإطلالة عبر واتساب',
      playLabel: 'تشغيل الفيديو',
      pauseLabel: 'إيقاف مؤقت',
      orderThisLook: 'اطلب هذه الإطلالة',
    },
    story: {
      titleEn: 'MORE THAN A GARMENT. A LEGACY.',
      titleAr: 'أكثر من مجرد زي... إنها هوية.',
      content: 'أبو هريرة للأزياء السودانية، حيث تلتقي أصالة الزي السوداني مع دقة التفصيل وفخامة الخامات، لنقدم تجربة تليق بالرجل السوداني في كل مناسبة.',
      highlights: [
        {
          key: 'Heritage',
          titleEn: 'HERITAGE',
          titleAr: 'الأصالة والتراث',
          desc: 'نحافظ على الهوية السودانية العريقة في كل تفصيلة، من الشال المطرز إلى قصة الجلابية الأصيلة.',
          image: '/assets/couture/hero-sudanese-model.jpg',
        },
        {
          key: 'Craftsmanship',
          titleEn: 'CRAFTSMANSHIP',
          titleAr: 'إتقان التفصيل',
          desc: 'حياكة يدوية دقيقة وتشطيبات متقنة تضمن ثبات القوام وراحة الارتداء طوال اليوم.',
          image: '/assets/couture/craft-embroidered-collar.jpg',
        },
        {
          key: 'Elegance',
          titleEn: 'ELEGANCE',
          titleAr: 'الفخامة العصرية',
          desc: 'خامات سويسرية ومصرية فاخرة تمنحك حضوراً ملكياً يجمع بين البساطة والهيبة.',
          image: '/assets/couture/editorial-right-duo.jpg',
        },
      ],
    },
    concierge: {
      title: 'خدمة التفصيل والطلب المباشر عبر واتساب',
      subtitle: 'اختر التصميم والمقاس واللون المفضل لديك، وسنقوم بتجهيز رسالتك مباشرة لفريق خدمة العملاء.',
      productLabel: 'اختر التصميم',
      sizeLabel: 'المقاس المطلوب',
      colorLabel: 'اللون المفضل',
      notesLabel: 'ملاحظات إضافية (اختياري)',
      notesPlaceholder: 'مثال: الطول بالإنش، نوع التطريز، أو موعد المناسبة...',
      submitBtn: 'إرسال الطلب عبر واتساب الآن',
    },
    footer: {
      aboutTitle: 'عن أبو هريرة',
      aboutText: 'علامة سودانية متخصصة في تصميم وتفصيل الجلابيات الرجالية الفاخرة، تجمع بين أصالة الزي السوداني واللمسة العصرية الراقية.',
      quickLinksTitle: 'روابط سريعة',
      contactTitle: 'تواصل معنا',
      madeInSudan: 'صمم بفخر في السودان',
      copyright: '© 2026 Abu Huraira Sudanese Couture. جميع الحقوق محفوظة.',
    },
    modal: {
      close: 'إغلاق',
      selectSize: 'اختر المقاس:',
      selectColor: 'اختر اللون / الإصدار:',
      estimatedPrice: 'السعر التقديري:',
      whatsappOrder: 'إتمام الطلب عبر واتساب',
    },
  },
  en: {
    brandName: 'ABU HURAIRA',
    brandSub: 'SUDANESE COUTURE',
    brandEnSub: 'أبو هريرة للأزياء السودانية',
    nav: {
      home: 'Home',
      collection: 'New Collection',
      editorial: 'Editorial',
      fabrics: 'Craftsmanship',
      reels: 'Videos & Reels',
      contact: 'Contact Us',
      whatsappCta: 'WhatsApp Concierge',
    },
    hero: {
      shopNow: 'SHOP NOW | اطلب الآن',
      explore: 'EXPLORE COLLECTION',
      prevSlide: 'Previous Slide',
      nextSlide: 'Next Slide',
    },
    trust: [
      { title: '100% Swiss Totall & Cotton', subtitle: 'Certified luxury natural fibers' },
      { title: 'Master Hand Tailoring', subtitle: 'Crafted by senior Sudanese artisans' },
      { title: 'Precision Comfort Fit', subtitle: 'Standard sizes & bespoke measurements' },
      { title: 'Worldwide & Local Delivery', subtitle: 'Signature packaging & reliable shipping' },
    ],
    collection: {
      titleAr: 'التشكيلة الجديدة',
      titleEn: 'THE COLLECTION',
      subtitle: 'Crafted with Heritage. Designed for Elegance.',
      subtitleAr: 'Sartorial excellence blending Sudanese heritage with modern luxury.',
      priceNote: 'Displayed prices in SDG are temporary sample estimates and vary by bespoke fabric & sizing.',
      filters: {
        all: 'All Creations',
        royal: 'Royal & Occasion',
        sets: 'Ensembles & Cuts',
        classic: 'Classic & Pure Cotton',
      },
      orderBtn: 'Order via WhatsApp',
      quickViewBtn: 'Customize Size & Order',
      fabricLabel: 'Fabric:',
    },
    editorial: {
      kicker: 'EDITORIAL CAMPAIGN 2026',
      titleEn: 'BEYOND TRADITION',
      titleAr: 'الأناقة تتجاوز الزمن',
      description: 'We celebrate authentic Sudanese attire through a contemporary lens, devoting uncompromising artistry to every seam, collar, and drape.',
      cta: 'Book Bespoke Consultation via WhatsApp',
      caption1: 'Royal White Totall paired with hand-embroidered heritage shawl',
      caption2: 'Architectural silhouettes crafted for distinguished ceremonial presence',
      caption3: 'Timeless details uniting Sudanese identity with modern refinement',
    },
    fabrics: {
      titleEn: 'THE ART OF CRAFTSMANSHIP',
      titleAr: 'فن التفاصيل',
      subtitle: 'True luxury begins with thread purity, textile structure, and master hand-finishing.',
      inquireBtn: 'Inquire About Available Fabrics',
    },
    reels: {
      titleAr: 'مقاطع الفيديو والريلز',
      titleEn: 'VIDEOS & REELS',
      description: 'Experience the drape, embroidery precision, and fluid movement of Abu Huraira garments up close.',
      watchMore: 'Order via WhatsApp',
      playLabel: 'Play Video',
      pauseLabel: 'Pause Video',
      orderThisLook: 'Order This Look',
    },
    story: {
      titleEn: 'MORE THAN A GARMENT. A LEGACY.',
      titleAr: 'أكثر من مجرد زي... إنها هوية.',
      content: 'Abu Huraira Sudanese Couture unites the noble heritage of Sudanese traditional dress with precision bespoke tailoring and the world’s finest textiles.',
      highlights: [
        {
          key: 'Heritage',
          titleEn: 'HERITAGE',
          titleAr: 'الأصالة والتراث',
          desc: 'Preserving authentic Sudanese sartorial identity across every embroidered shawl and tunic silhouette.',
          image: '/assets/couture/hero-sudanese-model.jpg',
        },
        {
          key: 'Craftsmanship',
          titleEn: 'CRAFTSMANSHIP',
          titleAr: 'إتقان التفصيل',
          desc: 'Meticulous hand-stitching and structural finishing that guarantee lasting poise and all-day comfort.',
          image: '/assets/couture/craft-embroidered-collar.jpg',
        },
        {
          key: 'Elegance',
          titleEn: 'ELEGANCE',
          titleAr: 'الفخامة العصرية',
          desc: 'First-grade Swiss Totall and Egyptian cottons curated for an unmistakable sovereign presence.',
          image: '/assets/couture/editorial-right-duo.jpg',
        },
      ],
    },
    concierge: {
      title: 'Bespoke Sizing & Direct WhatsApp Order',
      subtitle: 'Select your preferred garment, size, and colorway to generate an instant WhatsApp order for our atelier team.',
      productLabel: 'Select Garment',
      sizeLabel: 'Preferred Size',
      colorLabel: 'Preferred Colorway',
      notesLabel: 'Additional Measurements / Notes (Optional)',
      notesPlaceholder: 'E.g. Length in inches, collar preference, or occasion date...',
      submitBtn: 'Send Order via WhatsApp Now',
    },
    footer: {
      aboutTitle: 'About Abu Huraira',
      aboutText: 'A premier Sudanese fashion house specializing in bespoke luxury men’s jalabiyas, uniting timeless Sudanese heritage with contemporary refinement.',
      quickLinksTitle: 'Quick Links',
      contactTitle: 'Contact Us',
      madeInSudan: 'Proudly Designed in Sudan',
      copyright: '© 2026 Abu Huraira Sudanese Couture. All Rights Reserved.',
    },
    modal: {
      close: 'Close',
      selectSize: 'Select Size:',
      selectColor: 'Select Color / Edition:',
      estimatedPrice: 'Estimated Price:',
      whatsappOrder: 'Complete Order on WhatsApp',
    },
  },
} as const;
