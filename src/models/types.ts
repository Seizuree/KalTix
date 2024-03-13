import type { ProductBooked, ProductsAction, ProductsModel } from './products/types';

export interface RootModel {
  booked?: ProductBooked
  products?: ProductsModel
}

export type RootAction = ProductsAction;
