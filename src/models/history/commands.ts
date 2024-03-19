/* eslint-disable sort-keys */
import type { Command } from '@nxweb/core';

import type { Product } from '@models/products/types.js';
import type { RootModel } from '@models/types.js';

import { HistoryActionType } from './types.js';

import type { HistoryAction, HistoryModel } from './types.js';

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
  }
} satisfies Command<RootModel, HistoryAction>;

export { historyCommand };
