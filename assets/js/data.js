// Afghan recipes dataset. Each recipe has i18n fields.
export const recipes = [
  {
    id: "kabuli-pulao",
    title: { en: "Kabuli Pulao", ps: "کابلی پلو", fa: "کابلی پلاو" },
    description: {
      en: "Fragrant Afghan rice with lamb, carrots, and raisins.",
      ps: "خوشبویه افغان وریجې د غوښې، گازرو او ممیزو سره.",
      fa: "برنج خوش‌عطر افغانی با گوشت، هویج و کشمش.",
    },
    category: "main",
    diet: ["halal"],
    timeMinutes: 90,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    ingredients: {
      en: ["2 cups basmati rice", "500g lamb", "2 carrots", "1/3 cup raisins", "spices"],
      ps: ["۲ کپ باسمتی وریجې", "۵۰۰ ګرامه غوښه", "۲ گازرې", "۱/۳ کپ ممیز", "مسسالې"],
      fa: ["۲ پیمانه برنج باسمتی", "۵۰۰ گرم گوشت", "۲ هویج", "۱/۳ پیمانه کشمش", "ادویه"],
    },
    steps: {
      en: [
        "Brown lamb with spices.",
        "Parboil rice.",
        "Layer rice, lamb, carrots and raisins; steam until tender.",
      ],
      ps: [
        "غوښه له مسالو سره نصوار کړه.",
        "وریجې نیم پخې کړه.",
        "وریجې، غوښه، گازرې او ممیز واچوه او تر نرمېدو پورې دم کړه.",
      ],
      fa: [
        "گوشت را با ادویه سرخ کنید.",
        "برنج را نیم‌پز کنید.",
        "برنج، گوشت، هویج و کشمش را لایه‌لایه دم دهید.",
      ],
    },
  },
  {
    id: "mantu",
    title: { en: "Mantu", ps: "منتو", fa: "منتو" },
    description: {
      en: "Steamed dumplings filled with spiced meat, topped with yogurt and lentils.",
      ps: "بخاري ډمپلینګونه د مساله‌دارې غوښې سره، د مستو او دال سره پوښل شوي.",
      fa: "دست‌پیچ‌های بخارپز با گوشت ادویه‌دار، با ماست و عدس.",
    },
    category: "main",
    diet: ["halal"],
    timeMinutes: 75,
    image: "https://images.unsplash.com/photo-1544025162-9a5c1f1a156e?q=80&w=1200&auto=format&fit=crop",
    ingredients: {
      en: ["dough wrappers", "minced beef/lamb", "onion", "spices", "yogurt", "lentils"],
      ps: ["خمیر رېپرونه", "قیمه غوښه", "پیاز", "مسلې", "مۍ", "دال"],
      fa: ["خمیر نازک", "گوشت چرخ‌کرده", "پیاز", "ادویه", "ماست", "عدس"],
    },
    steps: {
      en: ["Fill wrappers and steam.", "Top with garlicky yogurt and lentils."],
      ps: ["ریپرونه ډک کړئ او بخار کړئ.", "د هوږې مستو او دال سره واچوئ."],
      fa: ["پیراشکی‌ها را پر کرده و بخارپز کنید.", "با ماست سیر و عدس سرو کنید."],
    },
  },
  {
    id: "bolani",
    title: { en: "Bolani", ps: "بولاني", fa: "بولانی" },
    description: {
      en: "Stuffed flatbread with potato or leek filling, pan-fried.",
      ps: "ډک شوی نان د کچالو یا گندنې په پیړۍ سره، په تاوه کې پخېږي.",
      fa: "نان پر شده با سیب‌زمینی یا تره، در تابه سرخ شده.",
    },
    category: "bread",
    diet: ["vegetarian", "halal"],
    timeMinutes: 45,
    image: "https://images.unsplash.com/photo-1512058454909-3cf4d3f0b4f2?q=80&w=1200&auto=format&fit=crop",
    ingredients: {
      en: ["flour", "water", "potato or leek", "spices", "oil"],
      ps: ["اوړه", "اوبه", "کچالو یا گندنه", "مسلې", "روغن"],
      fa: ["آرد", "آب", "سیب‌زمینی یا تره", "ادویه", "روغن"],
    },
    steps: {
      en: ["Make dough, fill, and pan-fry until golden."],
      ps: ["خمیر تیار کړئ، ډک کړئ او تر سرو کېدو پورې پخ کړئ."],
      fa: ["خمیر را آماده کرده، پر کنید و تا طلایی شدن سرخ کنید."],
    },
  },
  {
    id: "firni",
    title: { en: "Firni", ps: "فرني", fa: "فرنی" },
    description: {
      en: "Creamy milk custard flavored with cardamom and pistachios.",
      ps: "کریم لرونکې شیدې فرني د الهیلې او شڼ مقدار سره.",
      fa: "دسر شیری خامه‌ای با هل و پسته.",
    },
    category: "dessert",
    diet: ["vegetarian", "glutenFree", "halal"],
    timeMinutes: 20,
    image: "https://images.unsplash.com/photo-1541781286675-795732ce9f96?q=80&w=1200&auto=format&fit=crop",
    ingredients: {
      en: ["milk", "sugar", "cornstarch", "cardamom", "pistachios"],
      ps: ["شیدې", "بوره", "کارن سټارچ", "الایچی", "شڼ"],
      fa: ["شیر", "شکر", "نشاسته ذرت", "هل", "پسته"],
    },
    steps: {
      en: ["Thicken milk with cornstarch and sugar; flavor with cardamom."],
      ps: ["شیدې د نشایستې او بوري سره غټ کړئ؛ د الایچې خوند ورکړئ."],
      fa: ["شیر را با نشاسته و شکر غلیظ کنید؛ با هل معطر کنید."],
    },
  },
  {
    id: "dogh",
    title: { en: "Doogh", ps: "دوغ", fa: "دوغ" },
    description: {
      en: "Refreshing yogurt drink with mint.",
      ps: "یخ دوغ د نعنا سره.",
      fa: "نوشیدنی ماست خنک با نعنا.",
    },
    category: "drink",
    diet: ["vegetarian", "glutenFree", "halal"],
    timeMinutes: 5,
    image: "https://images.unsplash.com/photo-1577801596642-c3e33b015887?q=80&w=1200&auto=format&fit=crop",
    ingredients: {
      en: ["yogurt", "water", "mint", "salt"],
      ps: ["مۍ", "اوبه", "نعنا", "مالګه"],
      fa: ["ماست", "آب", "نعنا", "نمک"],
    },
    steps: {
      en: ["Blend yogurt with water, mint, and salt. Serve cold."],
      ps: ["مۍ له اوبو، نعنا او مالګې سره ګډه کړئ. یخه یې وڅښئ."],
      fa: ["ماست را با آب، نعنا و نمک مخلوط کنید. خنک سرو کنید."],
    },
  },
];
