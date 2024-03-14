import type { Product } from '@models/products/types';

interface BookingModel {
  booking?: Product[]
}

enum BookingActionType {
  Create = 'booking-create',
  Load = 'booking-load'
}

type BookingAction =
  | {
    type: BookingActionType.Create
    value: BookingModel
  }
  | {
    type: BookingActionType.Load
    value: BookingModel
  };

export { BookingActionType };
export type { BookingAction, BookingModel };
