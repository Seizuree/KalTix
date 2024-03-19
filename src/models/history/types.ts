import type { Product } from '@models/products/types';

interface HistoryModel {
  history?: Product[]
}

enum HistoryActionType {
  Create = 'history-create',
  Load = 'history-load'
}

type HistoryAction =
  | {
    type: HistoryActionType.Create
    value: HistoryModel
  }
  | {
    type: HistoryActionType.Load
  };

export { HistoryActionType };
export type { HistoryAction, HistoryModel };
