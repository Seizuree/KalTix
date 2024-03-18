import { combineReducers, createStore } from '@nxweb/core';
import {
  createCommandHook,
  createDispatchHook,
  createStoreHook,
  createStoreProvider
} from '@nxweb/react';

import { bookingCommand } from './booked/commands.js';
import { BookingReducer } from './booked/reducers.js';
import { productsCommand } from './products/commands.js';
import { productDetailReducer, productsReducer } from './products/reducers.js';

import type { RootAction, RootModel } from './types.js';

// ** Init reducers
const rootReducer = combineReducers({
  booking: BookingReducer,
  detail: productDetailReducer,
  products: productsReducer
});

// ** Init models
const rootModel: RootModel = {
  booking: {},
  detail: {},
  products: {}
};

// ** Init commands
const rootCommand = {
  booking: bookingCommand,
  products: productsCommand
};

// ** Create store
export const store = createStore(rootReducer, rootModel);

// ** Create store provider
export const StoreProvider = createStoreProvider(store);

// ** Create store hook
export const useStore = createStoreHook<RootModel, RootAction>();

// ** Create command hook
export const useCommand = createCommandHook(rootCommand);

// ** Create dispatch hook
export const useDispatch = createDispatchHook<RootModel, RootAction>();
