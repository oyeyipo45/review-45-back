
import { Router } from "express";
import HotelsController from '../modules/hotels/controller/hotels.controller';

export interface Routes {
  path?: string;
  router: Router;
}

class HotelsRoute implements Routes {
  public path = "/v1/recruiting/hotels";
  public router = Router();
  public hotelController = new HotelsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.hotelController.getHotels);
    this.router.get(`${this.path}/:id`, this.hotelController.getHotel);
  }
}

export default HotelsRoute;
