/* eslint-disable sort-keys */
import type { Command } from '@nxweb/core';

import type { Product } from '@models/products/types.js';
import type { RootModel } from '@models/types.js';

import { HistoryActionType } from './types.js';

import type { HistoryAction, HistoryModel, ProductDeleted } from './types.js';

// eslint-disable-next-line @typescript-eslint/init-declarations
let createdData: HistoryModel | undefined;
const historyCommand = {
  create: (product: Product) => {
    return (dispatch) => {
      if (product) {
        const value: HistoryModel = {
          history: [product]
        };

        createdData = value;
        dispatch({
          type: HistoryActionType.Create,
          value
        });
      }
    };
  },
  load: () => {
    return (dispatch) => {
      if (createdData) {
        dispatch({
          type: HistoryActionType.Load
        });
      }
    };
  },
  delete: (id: number) => {
    return (dispatch) => {
      if (id) {
        const value: ProductDeleted = {
          id
        };

        dispatch({
          type: HistoryActionType.Delete,
          value
        });
      }
    };
  },
  update: (product: Product) => {
    return (dispatch) => {
      if (product) {
        const value: HistoryModel = {
          history: [product]
        };

        dispatch({
          type: HistoryActionType.Update,
          value
        });
      }
    };
  }
} satisfies Command<RootModel, HistoryAction>;

export { historyCommand };
