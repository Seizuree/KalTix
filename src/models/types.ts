import type { ProductDetailModel, ProductsAction, ProductsModel } from './products/types';

export interface RootModel {
  detail?: ProductDetailModel
  products?: ProductsModel
}

export type RootAction = ProductsAction;
