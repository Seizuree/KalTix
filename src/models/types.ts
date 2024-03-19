import type { nowPlaying, ProductDetailModel, ProductsAction, ProductsModel, topRated, upComing } from './products/types';

export interface RootModel {
  detail?: ProductDetailModel
  now_playing?: nowPlaying
  products?: ProductsModel
  topRated?: topRated
  upcoming?: upComing
}

export type RootAction = ProductsAction;
