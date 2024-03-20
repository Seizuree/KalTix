import type { Command, FetchURLOptions } from '@nxweb/core';

import {

  searchMovies
} from '@api/clients/products.js';
import type { RootModel } from '@models/types.js';

import { SearchActionType } from './types.js';

import type {

  search,
  SearchAction

} from './types.js';

const searchCommand = {

  search: (id: string, options?: Readonly<FetchURLOptions>) => {
    return async (dispatch) => {
      try {
        const [search] = await Promise.all([searchMovies(id, options)]);

        if (search) {
          const value: search = {
            search
          };

          dispatch({
            type: SearchActionType.SearchMovie,
            value
          });
        }
      } catch (err) {
        console.error(err);
      }
    };
  },
  clear: (): SearchAction => {
    return {
      type: SearchActionType.Clear
    };
  }
} satisfies Command<RootModel, SearchAction>;

export { searchCommand };
