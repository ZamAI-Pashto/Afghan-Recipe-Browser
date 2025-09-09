// Lightweight i18n utility for en/ps/fa.
export const messages = {
  en: {
    "app.title": "Afghan Recipe Browser",
    "app.footer": "Made with love for Afghan cuisine.",
    "search.placeholder": "Search recipes…",
    "filters.all": "All",
    "filters.main": "Main",
    "filters.side": "Side",
    "filters.dessert": "Dessert",
    "filters.drink": "Drink",
    "filters.bread": "Bread",
    "filters.anyDiet": "Any diet",
    "filters.vegetarian": "Vegetarian",
    "filters.vegan": "Vegan",
    "filters.glutenFree": "Gluten-free",
    "filters.halal": "Halal",
    "filters.anyTime": "Any time",
    "filters.favorites": "Favorites",
    "recipe.details": "Details",
    "recipe.ingredients": "Ingredients",
    "recipe.steps": "Steps",
    "empty": "No recipes match your filters.",
    "meta.minutes": "min",
  },
  ps: {
    "app.title": "د افغان خوړو پلټونکی",
    "app.footer": "د افغان پخلنځي لپاره په مینه جوړ شوی.",
    "search.placeholder": "لټوونه…",
    "filters.all": "ټول",
    "filters.main": "اصلي",
    "filters.side": "غوږ",
    "filters.dessert": "خوږ",
    "filters.drink": "مشروب",
    "filters.bread": "نون",
    "filters.anyDiet": "هر ډول رژیم",
    "filters.vegetarian": "سبزی خور",
    "filters.vegan": "ویګن",
    "filters.glutenFree": "بې ګلوټینه",
    "filters.halal": "حلال",
    "filters.anyTime": "هر وخت",
    "filters.favorites": "خوښې",
    "recipe.details": "جزیات",
    "recipe.ingredients": "مواد",
    "recipe.steps": "ګامونه",
    "empty": "هیڅ ترکیب ستاسو د فلټرونو سره برابر نه شو.",
    "meta.minutes": "دقیقه",
  },
  fa: {
    "app.title": "جستجوگر دستورهای افغانی",
    "app.footer": "با عشق برای خوراک افغانی.",
    "search.placeholder": "جستجو…",
    "filters.all": "همه",
    "filters.main": "غذای اصلی",
    "filters.side": "کناری",
    "filters.dessert": "دسر",
    "filters.drink": "نوشیدنی",
    "filters.bread": "نان",
    "filters.anyDiet": "هر رژیم",
    "filters.vegetarian": "گیاه‌خواری",
    "filters.vegan": "وگان",
    "filters.glutenFree": "بدون گلوتن",
    "filters.halal": "حلال",
    "filters.anyTime": "هر زمان",
    "filters.favorites": "علاقه‌مندی‌ها",
    "recipe.details": "جزئیات",
    "recipe.ingredients": "مواد لازم",
    "recipe.steps": "مراحل",
    "empty": "هیچ دستوری مطابق فیلترها نیست.",
    "meta.minutes": "دقیقه",
  },
};

export function getLang() {
  return localStorage.getItem("lang") || navigator.language.slice(0, 2) || "en";
}

export function setLang(lang) {
  localStorage.setItem("lang", lang);
}

export function applyI18n(lang) {
  const dict = messages[lang] || messages.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ps" || lang === "fa" ? "rtl" : "ltr";

  // text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
}
