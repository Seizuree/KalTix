import { SearchActionType } from './types';

import type { search, SearchAction } from './types';

const searchReducer = (
  state: search = {},
  action: Readonly<SearchAction>
): search => {
  switch (action.type) {
    case SearchActionType.SearchMovie:
      if (!state.search) {
        return { ...action.value };
      }

      return { ...state };
    case SearchActionType.Clear:
      return {};

    default:
      return state;
  }
};

export { searchReducer };
