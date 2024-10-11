import { translate } from "../../utils/helper";
import { TRANSLATION_FALLBACK_ORDER, berlin } from "../../utils/constants";
import { Benefit, Deal, IHotel, Image } from "./interface/hotels.interface";

interface HotelFilter {
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  distance?: number;
  lat?: number;
  lng?: number;
  _id?: string;
}

export const queryFilter = (filter: HotelFilter): any => {
  const query: any = {};

  if (filter.name) {
    const nameRegex = new RegExp(`.*${filter.name}.*`, "i");
    query.$or = [
      { "name.en-US": { $regex: nameRegex } },
      { "name.de-DE": { $regex: nameRegex } },
      { "name.es-ES": { $regex: nameRegex } },
      { "name.fr-FR": { $regex: nameRegex } },
    ];
  }

  if (filter.minPrice !== undefined || filter.maxPrice !== undefined) {
    query.minPrice = {};
    if (filter.minPrice !== undefined) {
      query.minPrice.$gte = filter.minPrice;
    }
    if (filter.maxPrice !== undefined) {
      query.minPrice.$lte = filter.maxPrice;
    }
  }

  if (filter.distance && filter.lat !== undefined && filter.lng !== undefined) {
    const radiusInRadians = filter.distance / 6371;
    query.location = {
      $geoWithin: {
        $centerSphere: [[filter.lng, filter.lat], radiusInRadians],
      },
    };
  }

  return query;
};

export const getHotelsInBerlin = (hotels: IHotel[], lang: string) => {
  return hotels.map((hotel) => {
    const { name, address, city, description, lat, lng, minPrice, currencyCode, deals, images, id } = hotel;
    const distanceToCenterkm = calculateDistance(berlin.lat, berlin.lng, lat, lng);

    const translate = (obj: any, lang: string) => {
      for (const fallbackLang of [lang, ...TRANSLATION_FALLBACK_ORDER]) {
        if (obj[fallbackLang]) return obj[fallbackLang];
      }
      return "";
    };

    return {
      name: translate(name || {}, lang),
      address: translate(address || {}, lang),
      city: translate(city || {}, lang),
      description: translate(description || {}, lang),
      id,
      minPrice,
      currencyCode,
      distanceToCenterkm,
      firstDeal: {
        expireTime: deals[0]?.expireTime,
        headline: translate(deals[0]?.headline || {}, lang),
        details: translate(deals[0]?.details || {}, lang),
      },
      firstImage: {
        url: images[0]?.url || "",
        caption: translate(images[0]?.caption || {}, lang),
      },
    };
  });
};

export const getHotelTranslation = (hotel: IHotel, lang: string) => {
  
    const { name, address, city, description, lat, lng, minPrice, currencyCode, deals, images, id, benefits } = hotel;
    const distanceToCenterkm = calculateDistance(berlin.lat, berlin.lng, lat, lng);

    return {
      name: translate(name || {}, lang),
      address: translate(address || {}, lang),
      city: translate(city || {}, lang),
      description: translate(description || {}, lang),
      id,
      minPrice,
      currencyCode,
      distanceToCenterkm,
      deals: getDeals(deals, lang),
      images: getImages(images, lang),
      benefits: getBenefits(benefits, lang),
    };
};

const getDeals = (deals: Deal[], lang: string) => {
  return deals.map((deal) => {
    return {
      expireTime: deal.expireTime,
      headline: translate(deal.headline || {}, lang),
      details: translate(deal.details || {}, lang),
    };
  });
};

const getImages = (images: Image[], lang: string) => {
  return images.map((image) => {
    return {
      url: image.url,
      caption: translate(image.caption || {}, lang),
    };
  });
};

const getBenefits = (benefits: Benefit[], lang: string) => {
  return benefits.map((benefit) => {
    return {
      text: translate(benefit.text || {}, lang),
    };
  });
};

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of the Earth in km
  const dLat = degToRad(lat2 - lat1);
  const dLon = degToRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = (R * c).toFixed(2); // Distance in km
  return Number(distance);
};

const degToRad = (deg: number): number => deg * (Math.PI / 180);

interface HotelFilter {
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  distance?: number;
  lat?: number;
  lng?: number;
}
