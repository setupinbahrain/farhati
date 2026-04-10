const CITY_DICTIONARY: Record<string, string> = {
  "manama": "المنامة",
  "muharraq": "المحرق",
  "riffa": "الرفاع",
  "hamad-town": "مدينة حمد",
  "isa-town": "مدينة عيسى",
  "sitra": "سترة",
  "budaiya": "البديع",
  "jidhafs": "جدحفص",
  "aali": "عالي",
  "amwaj-islands": "جزر أمواج",
  "arad": "عراد",
  "awali": "عوالي",
  "busaiteen": "البسيتين",
  "diraz": "الدراز",
  "diyar-al-muharraq": "ديار المحرق",
  "dumistan": "دمستان",
  "durrat-al-bahrain": "درة البحرين",
  "gudaibiya": "القضيبية",
  "hamala": "الهملة",
  "hidd": "الحد",
  "janabiya": "الجنبية",
  "jannusan": "جنوسان",
  "jasra": "الجسرة",
  "jid-ali": "جد علي",
  "jid-al-haj": "جد الحاج",
  "jurdab": "جرداب",
  "karrana": "كرانة",
  "karzakan": "كرزكان",
  "malikiya": "المالكية",
  "muqaba": "مقاية",
  "north-sehla": "السهلة الشمالية",
  "northern-city": "المدينة الشمالية",
  "qurayya": "القرية",
  "saar": "سار",
  "sadad": "صدد",
  "salmabad": "سلماباد",
  "samaheej": "سماهيج",
  "sanabis": "السنابس",
  "sanad": "سند",
  "shahrakan": "شهركان",
  "shakhura": "الشاخورة",
  "tubli": "توبلي",
  "zayed-city": "مدينة زايد",
  "zinj": "الزنج",
  "adliya": "العدلية",
  "hoora": "الحورة",
  "seef": "السيف",
  "juffair": "الجفير",
  "manama-diplomatic-area": "المنطقة الدبلوماسية",
  "babar": "باربار",
  "bani-jamra": "بني جمرة",
  "galali": "قلالي",
  "bu-quwah": "بوقوة",
  "al-qurayya": "القرية",
  "abu-saiba": "أبو صيبع",
  "sehla": "السهلة",
  "mahamis": "المحرق", // approximation
  "jabalat-habshi": "جبلة حبشي",
  "al-dair": "الدير",
  "hałat-bu-maher": "حالة بو ماهر",
  "al-markh": "المرخ",
  "nabih-saleh": "النبيه صالح",
  "al-hajiyat": "الحجيات",
  "umm-al-hassam": "أم الحصم",
  "mahooz": "الماحوز",
  "bu-ashira": "بو عشيرة",
  "salmaniya": "السلمانية",
  "nuzha": "النزهة",
  "nuwaidrat": "النويدرات",
  "sugaya": "السقية",
  "ghuraifa": "الغريفة",
  "manama-suq": "سوق المنامة",
  "al-musalla": "المصلى",
  "khamis": "الخميس",
  "tashzan": "طشان",
  "bilad-al-qadeem": "البلاد القديم",
  "bu-ghazal": "بو غزال",
  "al-hunainiya": "الحنينية",
  "dar-kulaib": "دار كليب",
  "zallaq": "الزلاق",
  "sakhir": "الصخير",
  "al-rumaitha": "الرميثة",
  "umm-an-nasan": "أم النعسان",
  "hawar-islands": "جزر حوار",
  "al-areen": "العرين",
  "buhair": "البحير",
  "iskan": "إسكان",
  "al-hajer": "الحجر",
  "al-malkiya": "المالكية",
  "bouri": "بوري",
  "al-jasra": "الجسرة",
  "riffa-views": "إطلالات الرفاع",
  "al-zallaq": "الزلاق",
  "asker": "عسكر",
  "jaww": "جو",
  "seef-district": "ضاحية السيف",
  "bahrain-bay": "خليج البحرين",
  "reef-island": "جزيرة الريف",
  "tala-island": "جزيرة تالا",
  "bahrain": "البحرين"
};

const SILO_DICTIONARY: Record<string, string> = {
  // Tier 1 Money Pages
  "flowers-delivery-bahrain": "توصيل الزهور في البحرين",
  "flower-bouquets-bahrain": "باقات الزهور في البحرين",
  "cake-delivery-bahrain": "توصيل كيك في البحرين",
  "chocolate-delivery-bahrain": "توصيل شوكولاتة في البحرين",
  "gift-delivery-bahrain": "توصيل الهدايا في البحرين",
  "flowers-and-cake-delivery-bahrain": "توصيل زهور وكيك في البحرين",
  "flowers-and-chocolates-delivery-bahrain": "توصيل زهور وشوكولاتة في البحرين",
  "flowers-cake-and-chocolates-bahrain": "توصيل زهور وكيك وشوكولاتة البحرين",
  "same-day-gift-delivery-bahrain": "توصيل هدايا نفس اليوم البحرين",
  "birthday-gifts-delivery-bahrain": "توصيل هدايا عيد ميلاد البحرين",
  "online-gift-shop-bahrain": "متجر هدايا أونلاين البحرين",
  "luxury-gifts-bahrain": "هدايا فاخرة في البحرين",
  
  // Locations Variations fallback
  "flower-delivery-manama": "توصيل الزهور في المنامة",
  "gift-delivery-manama": "توصيل هدايا في المنامة",
  "cake-delivery-manama": "توصيل كيك في المنامة",
  "flower-delivery-riffa": "توصيل الزهور في الرفاع",
  "gift-delivery-riffa": "توصيل هدايا في الرفاع",
  "cake-delivery-riffa": "توصيل كيك في الرفاع",
  "flower-delivery-muharraq": "توصيل الزهور في المحرق",
  "gift-delivery-muharraq": "توصيل هدايا في المحرق",
  "flower-delivery-isa-town": "توصيل زور مدينة عيسى",
  "flower-delivery-adliya": "توصيل زهور العدلية",
  "flower-delivery-seef": "توصيل زهور السيف",
  "flower-delivery-juffair": "توصيل زهور الجفير",
  "flower-delivery-saar": "توصيل زهور سار",
  "flower-delivery-hamala": "توصيل زهور الهملة",
  "flower-delivery-amwaj": "توصيل زهور جزر أمواج",
  "flower-delivery-diyar-al-muharraq": "توصيل زهور ديار المحرق",
  "flower-delivery-budaiya": "توصيل زهور البديع",
  "flower-delivery-sanabis": "توصيل زهور السنابس",

  // Core General Words (fallback parsing)
  "flowers": "زهور",
  "flower": "زهرة",
  "cake": "كيك",
  "cakes": "كيك",
  "delivery": "توصيل",
  "chocolate": "شوكولاتة",
  "chocolates": "شوكولاتة",
  "gifts": "هدايا",
  "gift": "هدية",
  "bouquets": "باقات",
  "bouquet": "باقة",
  "boxes": "صناديق",
  "box": "صندوق",
  "same": "نفس",
  "day": "اليوم",
  "birthday": "عيد ميلاد",
  "luxury": "فاخرة",
  "bahrain": "في البحرين"
};

export const translateCityToArabic = (citySlug: string | undefined): string => {
  if (!citySlug) return "البحرين";
  const normalized = citySlug.toLowerCase().trim();
  if (CITY_DICTIONARY[normalized]) return CITY_DICTIONARY[normalized];
  
  // Fallback: Just return it mapped roughly or capitalized if no strict arabic match
  return citySlug.split('-').join(' ');
};

export const translateSiloToArabic = (slug: string): string => {
  const normalized = slug.toLowerCase().trim();
  
  // Exact match for predefined critical SILOs
  if (SILO_DICTIONARY[normalized]) {
    return SILO_DICTIONARY[normalized];
  }

  // Algorithmic breakdown fallback
  const words = normalized.split('-');
  const translatedWords = words.map(word => {
    if (SILO_DICTIONARY[word]) return SILO_DICTIONARY[word];
    return ''; // Just omit words like 'in', 'and' if not mapped perfectly, or we can map them
  }).filter(Boolean);

  if (translatedWords.length > 0) {
     return translatedWords.join(' ');
  }
  
  // Ultimate fallback
  return slug.split('-').join(' ');
};
