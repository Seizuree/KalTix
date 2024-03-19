import { combineReducers, createStore } from '@nxweb/core';
import {
  createCommandHook,
  createDispatchHook,
  createStoreHook,
  createStoreProvider
} from '@nxweb/react';

import { productsCommand } from './products/commands.js';
import {
  now_playingReducer,
  productDetailReducer,
  productsReducer,
  topRatedreducer,
  upcomingReducer
} from './products/reducers.js';

import type { RootAction, RootModel } from './types.js';

// ** Init reducers
const rootReducer = combineReducers({
  detail: productDetailReducer,
  now_playing: now_playingReducer,
  products: productsReducer,
  topRated: topRatedreducer,
  upcoming: upcomingReducer
});

// ** Init models
const rootModel: RootModel = {
  detail: {},
  now_playing: {},
  products: {},
  topRated: {},
  upcoming: {}
};

// ** Init commands
const rootCommand = {
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
