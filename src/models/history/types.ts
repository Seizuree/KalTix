import type { Product } from '@models/products/types';

interface HistoryModel {
  history?: Product[]
}

interface ProductDeleted {
  id: number
}

enum HistoryActionType {
  Delete = 'history-delete',
  Create = 'history-create',
  Update = 'history-update',
  Load = 'history-load'
}

type HistoryAction =
  | {
    type: HistoryActionType.Create
    value: HistoryModel
  }
  | {
    type: HistoryActionType.Delete
    value: ProductDeleted
  }
  | {
    type: HistoryActionType.Load
  }
  | { type: HistoryActionType.Update, value?: HistoryModel };

export { HistoryActionType };
export type { HistoryAction, HistoryModel, ProductDeleted };
