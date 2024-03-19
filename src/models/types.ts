import type { ProductDetailModel, ProductsAction, ProductsModel, nowPlaying, topRated, upComing } from './products/types';

export interface RootModel {
  detail?: ProductDetailModel
  products?: ProductsModel
  now_playing?: nowPlaying
  upcoming?: upComing
  topRated?: topRated
}

export type RootAction = ProductsAction;
