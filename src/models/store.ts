import { combineReducers, createStore } from '@nxweb/core';
import {
  createCommandHook,
  createDispatchHook,
  createStoreHook,
  createStoreProvider
} from '@nxweb/react';

import { productsCommand } from './products/commands.js';
import { productDetailReducer, productsReducer, now_playingReducer, topRatedreducer, upcomingReducer } from './products/reducers.js';

import type { RootAction, RootModel } from './types.js';

// ** Init reducers
const rootReducer = combineReducers({
  products: productsReducer,
  now_playing: now_playingReducer,
  upcoming: upcomingReducer,
  topRated: topRatedreducer,
  detail: productDetailReducer,
});

// ** Init models
const rootModel: RootModel = {
  products: {},
  now_playing: {},
  upcoming: {},
  topRated: {},
  detail: {}

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
