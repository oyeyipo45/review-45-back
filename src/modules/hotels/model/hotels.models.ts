import { model, Schema, Document } from "mongoose";
import { IHotel, LocaleDefinition } from '../interface/hotels.interface';

const LocaleSchema = new Schema<LocaleDefinition>(
  {
    "en-US": String,
    "de-DE": String,
    "fr-FR": String,
    "es-ES": String,
  },
  { _id: false }
);

const hotelSchema: Schema = new Schema<IHotel>({
  name: {
    type: LocaleSchema,
    required: true,
  },
  address: {
    type: LocaleSchema,
    required: true,
  },
  city: {
    type: LocaleSchema,
    required: true,
  },
  description: {
    type: LocaleSchema,
    required: true,
  },
  minPrice: {
    type: Number,
    required: true,
  },
  currencyCode: {
    type: String,
    required: true,
  },
  distanceToCenterkm: {
    type: Number,
    required: true,
  },
  benefits: [{ text: LocaleSchema }],
  deals: [
    {
      expireTime: { type: Date, required: true },
      headline: {
        type: LocaleSchema,
        required: true,
      },
      details: {
        type: LocaleSchema,
        required: true,
      },
    },
  ],
  images: [
    {
      url: { type: String, required: true },
      caption: {
        type: LocaleSchema,
        required: true,
      },
    },
  ],
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

const hotelModel = model<IHotel & Document>("Hotels", hotelSchema);

export default hotelModel;
