interface Product {
  backdrop_path: string
  genre_ids: number[]
  genres?: {
    id: number
    name: string
  }[]
  id: number
  original_language: string
  overview: string
  poster_path: string
  release_date: string
  runtime: number
  tagline: string
  title: string
}

interface search {
  search?: Product[]
}

enum SearchActionType {
  SearchMovie = 'product-search',
  Clear = 'search-clear'
}

  type SearchAction = {
    type: SearchActionType.SearchMovie
    value?: search
  } | { type: SearchActionType.Clear
  };

export { SearchActionType };
export type {search, SearchAction}
