import type { HistoryModel } from './history/types';
import type { nowPlaying, ProductDetailModel, ProductsAction, ProductsModel, topRated, upComing } from './products/types';
import type { search } from './search/types';

export interface RootModel {
  detail?: ProductDetailModel
  history?: HistoryModel
  now_playing?: nowPlaying
  products?: ProductsModel
  topRated?: topRated
  upcoming?: upComing
  search?: search
}

export type RootAction = ProductsAction;
