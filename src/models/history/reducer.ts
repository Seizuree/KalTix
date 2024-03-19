/* eslint-disable no-case-declarations */
import type { Product } from '@models/products/types.js';

import { HistoryActionType } from './types.js';

import type { HistoryAction, HistoryModel } from './types.js';

const historyReducer = (
  state: HistoryModel = { history: [] },
  action: Readonly<HistoryAction>
): HistoryModel => {
  let newProducts: Product[] = [];
  switch (action.type) {
    case HistoryActionType.Create:
      newProducts = action.value?.history ?? [];

      return {
        ...state,
        history: state.history
          ? [...state.history, ...newProducts]
          : newProducts
      };
    case HistoryActionType.Delete:
      const productIdToDelete = action.value;

      return {
        ...state,
        history: state.history
          ? state.history.filter(
            (product) => product.id !== productIdToDelete.id
          )
          : []
      };
    case HistoryActionType.Load:
      return { ...state, ...action };
    case HistoryActionType.Update:
      const updatedProducts = action.value?.history ?? [];
      const updatedProductId = updatedProducts[0]?.id;

      return {
        ...state,
        history: (state.history ?? []).map((product: Product) => (product.id === updatedProductId
          ? { ...product, ...updatedProducts[0] }
          : product))
      };

    default:
      return state;
  }
};

export { historyReducer };
