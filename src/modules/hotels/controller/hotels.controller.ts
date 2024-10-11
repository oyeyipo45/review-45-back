import { NextFunction, Request, Response } from "express";
import HotelService from "../service/hotels.service";
import { Result } from "common/common.interface";
import { IHotel, IHotelResponse } from '../interface/hotels.interface';

class HotelsController {
  public hotelService = new HotelService();

  public getHotels = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllHotels: Result<IHotelResponse[]> = await this.hotelService.findAllHotels(req);

      res.status(200).json(findAllHotels);
    } catch (error) {
      next(error);
    }
  };

  public getHotel = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllHotel: Result<Partial<IHotel>> = await this.hotelService.getHotel(req);

      res.status(200).json(findAllHotel);
    } catch (error) {
      next(error);
    }
  };
}

export default HotelsController;
