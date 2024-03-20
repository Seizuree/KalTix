import { combineReducers, createStore } from '@nxweb/core';
import {
  createCommandHook,
  createDispatchHook,
  createStoreHook,
  createStoreProvider
} from '@nxweb/react';

import { historyCommand } from './history/commands.js';
import { historyReducer } from './history/reducer.js';
import { productsCommand } from './products/commands.js';
import {
  now_playingReducer,
  productDetailReducer,
  productsReducer,
  topRatedreducer,
  upcomingReducer
} from './products/reducers.js';
import { searchCommand } from './search/commands.js';
import { searchReducer } from './search/reducer.js';

import type { RootAction, RootModel } from './types.js';

// ** Init reducers
const rootReducer = combineReducers({
  detail: productDetailReducer,
  history: historyReducer,
  now_playing: now_playingReducer,
  products: productsReducer,
  topRated: topRatedreducer,
  upcoming: upcomingReducer,
  search: searchReducer
});

// ** Init models
const rootModel: RootModel = {
  detail: {},
  history: {},
  now_playing: {},
  products: {},
  topRated: {},
  upcoming: {},
  search: {}
};

// ** Init commands
const rootCommand = {
  history: historyCommand,
  products: productsCommand,
  search: searchCommand
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
