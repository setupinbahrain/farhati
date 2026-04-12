import { Metadata } from "next";
import { SILO_PAGES } from "@/lib/routes";
import { CITIES_BAHRAIN } from "@/lib/cities";
import { notFound } from "next/navigation";
import DeepSiloTemplate from "@/components/DeepSiloTemplate";
import { translateCityToArabic, translateSiloToArabic } from "@/lib/translate";

type Props = {
  params: { locale: string; slug: string[] };
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: slugArray, locale } = params;
  const isArabic = locale === 'ar';
  
  if (slugArray.length === 1) {
    const pageSlug = slugArray[0];
    if (!SILO_PAGES.includes(pageSlug)) return {};

    const englishTitle = pageSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    const baseTitle = isArabic ? translateSiloToArabic(pageSlug) : englishTitle;
    
    return {
      title: isArabic ? `${baseTitle} | متجر فرحتي للهدايا` : `${baseTitle} | Premium Farhati Gifting`,
      description: isArabic ? `اطلب ${baseTitle} مع فرحتي. توصيل في نفس اليوم لجميع مناطق البحرين!` : `Order the best ${englishTitle.toLowerCase()} with Farhati. Same-day delivery across all locations in Bahrain!`,
      alternates: {
        languages: {
          'en': `/${pageSlug}`,
          'ar': `/ar/${pageSlug}`,
          'x-default': `/${pageSlug}`,
        }
      }
    };
  } else if (slugArray.length === 2) {
    const citySlug = slugArray[0];
    const pageSlug = slugArray[1];
    
    if (!CITIES_BAHRAIN.includes(citySlug) || !SILO_PAGES.includes(pageSlug)) return {};

    const englishTitle = pageSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    const englishCity = citySlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    
    const baseTitle = isArabic ? translateSiloToArabic(pageSlug) : englishTitle;
    const cityName = isArabic ? translateCityToArabic(citySlug) : englishCity;
    
    return {
      title: isArabic ? `${baseTitle} إلى ${cityName} | فرحتي` : `${englishTitle} Delivery in ${englishCity} | Premium Farhati Gifting`,
      description: isArabic ? `احجز ${baseTitle} بتوصيل مباشر لمعظم مناطق ${cityName}. تسوق الهدايا الفاخرة المضمونة لتدلل من تحب.` : `Order the best ${englishTitle.toLowerCase()} directly to ${englishCity}. We offer rapid, climate-controlled same-day delivery exclusively across ${englishCity}!`,
      alternates: {
        languages: {
          'en': `/${citySlug}/${pageSlug}`,
          'ar': `/ar/${citySlug}/${pageSlug}`,
          'x-default': `/${citySlug}/${pageSlug}`,
        }
      }
    };
  }

  return {};
}

export default function CatchAllSiloPage({ params }: Props) {
  const { slug: slugArray, locale } = params;

  if (slugArray.length === 1) {
    const pageSlug = slugArray[0];
    if (!SILO_PAGES.includes(pageSlug)) notFound();
    return <DeepSiloTemplate slug={pageSlug} locale={locale} />;
  } 
  
  if (slugArray.length === 2) {
    const citySlug = slugArray[0];
    const pageSlug = slugArray[1];
    if (!CITIES_BAHRAIN.includes(citySlug) || !SILO_PAGES.includes(pageSlug)) notFound();
    return <DeepSiloTemplate slug={pageSlug} city={citySlug} locale={locale} />;
  }

  notFound();
}
