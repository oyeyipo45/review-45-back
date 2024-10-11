import { Result } from "common/common.interface";
import { IHotel, IHotelResponse } from "../interface/hotels.interface";
import hotelModel from "../model/hotels.models";
import { getHotelsInBerlin, queryFilter, getHotelTranslation } from "../helpers";
import { HttpException } from "../../../exceptions/HttpException";

class HotelService {
  public hotels = hotelModel;

  public async findAllHotels(req): Promise<Result<IHotelResponse[]>> {
    const { search, lang = "en-US", minPrice, maxPrice, distance, lat, lng } = req.query;

    const filters = { name: search, minPrice, maxPrice, distance, lat, lng };

    const filteredQuery = queryFilter(filters);

    try {
      const allHotels: IHotel[] = await this.hotels.find(filteredQuery);

      const hotels = getHotelsInBerlin(allHotels, lang);

      return {
        success: true,
        result: hotels,
        error: "",
      };
    } catch (error) {
      throw new HttpException(500, error as any);
    }
  }

  public async getHotel(req): Promise<Result<Partial<IHotel>>> {
    const { lang = "en-US" } = req.query;

    const { id } = req.params;

    try {
      const findHotel: IHotel = await this.hotels.findById({ _id: id });

      const hotel: Partial<IHotel> = getHotelTranslation(findHotel, lang);

      return {
        success: true,
        result: hotel as Partial<IHotel>,
        error: "",
      };
    } catch (error) {
      throw new HttpException(500, error as any);
    }
  }
}

export default HotelService;
