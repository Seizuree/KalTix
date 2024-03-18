import type { nowPlaying, ProductsAction, ProductsModel, topRated, upComing } from './products/types';

export interface RootModel {
  products?: ProductsModel
  now_playing?: nowPlaying
  upcoming?: upComing
  topRated?: topRated
}

export type RootAction = ProductsAction;
