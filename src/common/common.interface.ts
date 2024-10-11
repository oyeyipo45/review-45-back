import { IHotel, IHotelResponse } from 'modules/hotels/interface/hotels.interface';

export interface Result<T> {
  success: boolean;
  error: string;
  result: T;
}
