export interface IHotelResponse {
  id: number;
  name: string;
  address: string;
  city: string;
  description: string;
  minPrice: number;
  currencyCode: string;
  distanceToCenterkm: number;
  firstDeal: {
    expireTime: Date;
    headline: string;
    details: string;
  };
  firstImage: {
    url: string;
    caption: string;
  };
}

export interface SingleHotel {
  _id?: string;
  id: number;
  name: LocaleDefinition;
  address: LocaleDefinition;
  city: LocaleDefinition;
  description: LocaleDefinition;
  minPrice: number;
  currencyCode: string;
  benefits:IBenefit[];
  deals: IDeal[];
  images: IImage[];
  lat: number;
  lng: number;
  distanceToCenterkm: number;
}

export interface IHotel {
  _id?: string;
  id: number;
  name: LocaleDefinition;
  address: LocaleDefinition;
  city: LocaleDefinition;
  description: LocaleDefinition;
  minPrice: number;
  currencyCode: string;
  benefits: {
    text: LocaleDefinition;
  }[];
  deals: {
    expireTime: Date;
    headline: LocaleDefinition;
    details: LocaleDefinition;
  }[];
  images: { url: string; caption: LocaleDefinition }[];
  lat: number;
  lng: number;
  distanceToCenterkm: number;
}

export interface Benefit {
  text: LocaleDefinition;
}


export interface IBenefit {
  text: string;
}

export interface Deal {
  expireTime: Date;
  headline: LocaleDefinition;
  details: LocaleDefinition;
}

export interface IDeal {
  expireTime: Date;
  headline: string;
  details: string;
}

export interface Image {
  url: string;
  caption: LocaleDefinition;
}

export interface IImage {
  url: string;
  caption: string;
}

export interface LocaleDefinition {
  "de-DE"?: string;
  "fr-FR"?: string;
  "es-ES"?: string;
  "en-US"?: string;
}

export interface HotelFilter {
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  distance?: number;
  lat?: number;
  lng?: number;
}
