import type { BookingModel } from './booked/types';
import type { ProductDetailModel, ProductsAction, ProductsModel } from './products/types';

export interface RootModel {
  booking?: BookingModel
  detail?: ProductDetailModel
  products?: ProductsModel
}

export type RootAction = ProductsAction;
