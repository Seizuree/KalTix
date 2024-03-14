import type { BookingModel } from './booked/types';
import type { ProductsAction, ProductsModel } from './products/types';

export interface RootModel {
  booking?: BookingModel
  products?: ProductsModel
}

export type RootAction = ProductsAction;
