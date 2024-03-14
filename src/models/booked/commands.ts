/* eslint-disable sort-keys */
import type { Command } from '@nxweb/core';

import type { Product } from '@models/products/types.js';
import type { RootModel } from '@models/types.js';

import { BookingActionType } from './types.js';

import type { BookingAction, BookingModel } from './types.js';

const bookingCommand = {
  create: (product: Product) => {
    return (dispatch) => {
      if (product) {
        const value: BookingModel = {
          booking: [product]
        };

        dispatch({
          type: BookingActionType.Create,
          value
        });
      }
    };
  }
} satisfies Command<RootModel, BookingAction>;

export { bookingCommand };
