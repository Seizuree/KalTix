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
    case HistoryActionType.Load:
      return { ...state, ...action };

    default:
      return state;
  }
};

export { historyReducer };
