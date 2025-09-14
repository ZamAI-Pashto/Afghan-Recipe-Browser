export const messages = {
  en: {
    'app.title': 'Afghan Recipe Browser',
    'app.footer': 'Made with love for Afghan cuisine.',
    'search.placeholder': 'Search recipes…',
    'filters.all': 'All',
    'filters.main': 'Main',
    'filters.side': 'Side',
    'filters.dessert': 'Dessert',
    'filters.drink': 'Drink',
    'filters.bread': 'Bread',
    'filters.anyDiet': 'Any diet',
    'filters.vegetarian': 'Vegetarian',
    'filters.vegan': 'Vegan',
    'filters.glutenFree': 'Gluten-free',
    'filters.halal': 'Halal',
    'filters.anyTime': 'Any time',
    'filters.favorites': 'Favorites',
    'recipe.details': 'Details',
    'recipe.ingredients': 'Ingredients',
    'recipe.steps': 'Steps',
    'meta.minutes': 'min',
    'empty': 'No recipes found. Try adjusting your filters.',
  },
  ps: {
    'app.title': 'د افغاني خواړو لټونکی',
    'app.footer': 'د افغاني خوندورو خواړو سره د مینې څخه جوړ شوی.',
    'search.placeholder': 'د خواړو لټون وکړئ…',
    'filters.all': 'ټول',
    'filters.main': 'اصلي',
    'filters.side': 'اضافي',
    'filters.dessert': 'خوږه',
    'filters.drink': 'څښاک',
    'filters.bread': 'ډوډۍ',
    'filters.anyDiet': 'هر ډول خواړه',
    'filters.vegetarian': 'نباتي',
    'filters.vegan': 'کلکه نباتي',
    'filters.glutenFree': 'د ګلوټین پرته',
    'filters.halal': 'حلال',
    'filters.anyTime': 'هر وخت',
    'filters.favorites': 'غوره',
    'recipe.details': 'تفصیلات',
    'recipe.ingredients': 'اجزاء',
    'recipe.steps': 'ګامونه',
    'meta.minutes': 'دقیقې',
    'empty': 'هیڅ ترکیب ونه موندل شو. د خپلو فلټرونو سمولو هڅه وکړئ.',
  },
  fa: {
    'app.title': 'مرورگر غذاهای افغانی',
    'app.footer': 'با عشق برای آشپزی افغانی ساخته شده.',
    'search.placeholder': 'جستجوی غذاها…',
    'filters.all': 'همه',
    'filters.main': 'اصلی',
    'filters.side': 'جانبی',
    'filters.dessert': 'دسر',
    'filters.drink': 'نوشیدنی',
    'filters.bread': 'نان',
    'filters.anyDiet': 'هر نوع رژیم',
    'filters.vegetarian': 'گیاهی',
    'filters.vegan': 'کاملاً گیاهی',
    'filters.glutenFree': 'بدون گلوتن',
    'filters.halal': 'حلال',
    'filters.anyTime': 'هر زمان',
    'filters.favorites': 'علاقه‌مندی‌ها',
    'recipe.details': 'جزئیات',
    'recipe.ingredients': 'مواد اولیه',
    'recipe.steps': 'مراحل',
    'meta.minutes': 'دقیقه',
    'empty': 'هیچ دستور آشپزی یافت نشد. تنظیمات فیلترها را تغییر دهید.',
  },
};

export function getLang() {
  return localStorage.getItem('lang') || 
    (navigator.language.startsWith('ps') ? 'ps' : 
     navigator.language.startsWith('fa') ? 'fa' : 'en');
}

export function setLang(lang) {
  localStorage.setItem('lang', lang);
}

export function applyI18n(lang) {
  const dict = messages[lang] || messages.en;
  
  // Set document direction and language
  document.documentElement.dir = (lang === 'ps' || lang === 'fa') ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  
  // Apply translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  
  // Apply placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}