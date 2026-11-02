# أبو هريرة للأزياء السودانية | Abu Huraira Sudanese Couture

موقع إلكتروني وكتالوج أزياء فاخر لعلامة **أبو هريرة للأزياء السودانية (Abu Huraira Sudanese Couture)**، مبني باستخدام **React 19 + TypeScript + Tailwind CSS v4 + Vite**.

---

## 1. كيفية التعديل السريع على الموقع (الدليل المختصر)

تم تصميم الكود بحيث يمكنك تعديل **رقم الواتساب، الأسعار، المنتجات، الصور، والفيديوهات** من ملف واحد فقط دون الحاجة لتعديل كود الواجهات:

📂 **الملف الرئيسي للبيانات:**  
`src/data/coutureData.ts`

### أ) تغيير رقم الواتساب:
افتح الملف `src/data/coutureData.ts` وعدّل المتغيرين في أعلى الملف:
```ts
export const WHATSAPP_NUMBER = '249900000000'; // اكتب رقمك هنا بصيغة دولية بدون علامة + أو أصفار في البداية
export const WHATSAPP_DISPLAY = '+249 90 000 0000'; // الشكل الذي يظهر في أسفل الموقع (Footer)
```
سيتم تحديث جميع أزرار الطلب في الموقع تلقائياً.

### ب) تعديل المنتجات والأسعار والصور:
داخل نفس الملف `src/data/coutureData.ts` ستجد مصفوفة `PRODUCTS`:
```ts
{
  id: 'prod-1',
  slug: 'occasion-jalabiya',
  category: 'royal', // التصنيفات: 'royal' | 'sets' | 'classic'
  nameAr: 'جلابية مناسبات',
  nameEn: 'Occasion Jalabiya',
  descAr: 'تصميم فاخر للمناسبات الخاصة...',
  descEn: 'Bespoke ceremonial jalabiya...',
  fabricAr: 'توتال سويسري أصلي 100%',
  fabricEn: '100% Authentic Swiss Totall',
  priceSDG: 120000, // 👈 عدّل السعر هنا بالعملة السودانية
  image: '/assets/couture/prod-occasion-jalabiya.jpg', // 👈 مسار الصورة داخل public/assets/couture/ أو رابط مباشر
  ...
}
```

### ج) إضافة صور أو فيديوهات جديدة:
1. ضع صورك أو فيديوهاتك الجديدة داخل المجلد:  
   `public/assets/couture/`
2. اكتب مسارها في `src/data/coutureData.ts` بالشكل التالي:  
   `'/assets/couture/اسم-الصورة.jpg'`  
   أو بالنسبة لمقاطع الريلز في مصفوفة `REEL_ITEMS`:  
   `videoUrl: '/assets/couture/اسم-الفيديو.mp4'`

---

## 2. تشغيل المشروع على جهازك (Local Development)

تأكد من تثبيت [Node.js](https://nodejs.org/) (الإصدار 18 أو أحدث)، ثم شغّل الأوامر التالية في موجه الأوامر (Terminal):

```bash
# 1. تثبيت الحزم والمكتبات
npm install

# 2. تشغيل الموقع محلياً للتعديل والمعاينة الفورية
npm run dev
```
ثم افتح المتصفح على الرابط: `http://localhost:3000`

لبناء النسخة النهائية الجاهزة للنشر (Production Build):
```bash
npm run build
```

---

## 3. هيكل الملفات (Project Structure)

```text
├── public/
│   └── assets/
│       └── couture/            # جميع صور الموديلات، الشعار، الخامات، ومقاطع الفيديو (MP4)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # شريط التنقل العلوي ومبدل اللغة (عربي / EN)
│   │   ├── Hero.tsx            # القسم الترحيبي الرئيسي وعرض الشرائح
│   │   ├── TrustBar.tsx        # شريط مزايا العلامة (4 أيقونات ذهبية)
│   │   ├── Collection.tsx      # قسم التشكيلة الجديدة وأزرار الفلترة
│   │   ├── ProductCard.tsx     # بطاقة المنتج الفردية
│   │   ├── ProductModal.tsx    # نافذة اختيار المقاس واللون والطلب عبر واتساب
│   │   ├── EditorialSection.tsx# قسم الحملة التحريرية (Beyond Tradition)
│   │   ├── FabricsSection.tsx  # قسم الخامات والحرفية (فن التفاصيل)
│   │   ├── ReelsSection.tsx    # معرض الفيديوهات العمودية (Reels 9:16)
│   │   ├── BrandStory.tsx      # قصة العلامة + نموذج تفصيل الطلب المباشر
│   │   └── Footer.tsx          # التذييل السفلي + زر الواتساب العائم
│   ├── data/
│   │   └── coutureData.ts      # ⭐ مركز البيانات (رقم الواتساب، المنتجات، الأسعار، النصوص)
│   ├── utils/
│   │   └── whatsapp.ts         # دوال توليد روابط واتساب وتنسيق الأسعار
│   ├── App.tsx                 # المكون الرئيسي للموقع
│   └── index.css               # إعدادات الألوان والخطوط (Tailwind CSS)
└── index.html                  # إعدادات الصفحة والخطوط وبيانات SEO
```

---

## 4. النشر المجاني (Vercel أو Netlify)

بعد رفع المشروع على حسابك في **GitHub**:
1. ادخل إلى موقع [Vercel](https://vercel.com) أو [Netlify](https://netlify.com) وسجّل الدخول بحساب GitHub.
2. اختر **Add New Project** وحدد مستودع المشروع (Repository).
3. اضغط **Deploy** (الإعدادات جاهزة تلقائياً لـ Vite)، وخلال أقل من دقيقة ستحصل على رابط مباشر سريع ومجاني للموقع يتحدث تلقائياً كلما عدّلت الكود على GitHub.
