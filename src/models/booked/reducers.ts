import type { Product } from '@models/products/types.js';

import { BookingActionType } from './types.js';

import type { BookingAction, BookingModel } from './types.js';

const BookingReducer = (
  state: BookingModel = { booking: [] },
  action: Readonly<BookingAction>
): BookingModel => {
  let newProducts: Product[] = [];
  switch (action.type) {
    case BookingActionType.Create:
      newProducts = action.value?.booking ?? [];

      return {
        ...state,
        booking: state.booking
          ? [...state.booking, ...newProducts]
          : newProducts
      };
    case BookingActionType.Load:
      return { ...state, ...action.value };

    default:
      return state;
  }
};

export { BookingReducer };
