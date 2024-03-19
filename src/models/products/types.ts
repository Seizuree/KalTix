interface Product {
  genre_ids: number[]
  genres: {
    id: number
    name: string
  }[]
  id: number
  original_language: string
  overview: string
  poster_path: string
  release_date: string
  runtime?: number
  tagline?: string
  title: string
  backdrop_path: string
}

interface Genre {
  id: number
  name: string
}

// Now playing model
interface nowPlaying {
  nowplaying?: Product[]
}

// Upcoming model
interface upComing {
  upcoming?: Product[]
}

// TopRated model
interface topRated {
  topRated?: Product[]
}

// Page Model
interface ProductsModel {
  genres?: Genre[]
  products?: Product[]
}

interface ProductDetailModel {
  detail?: Product
  recommendations?: Product[]
}

enum ProductsActionType {
  Load = 'products-load',
  Clear = 'products-clear',
  Detail = 'products-detail',
  Create = 'products-create',
  Update = 'products-update',
  now_playingLoad = 'products-now_playing',
  upcomingLoad = 'products-upcoming',
  topRatedLoad = 'product-toprated'
}

type ProductsAction = {
  type: ProductsActionType.Clear
} | {
  type: ProductsActionType.Create
  value?: ProductsModel
} | {
  type: ProductsActionType.Detail
  value?: ProductDetailModel
} | {
  type: ProductsActionType.Load
  value?: ProductsModel
} | {
  type: ProductsActionType.now_playingLoad
  value?: nowPlaying
} | {
  type: ProductsActionType.topRatedLoad
  value?: topRated
} | {
  type: ProductsActionType.upcomingLoad
  value?: upComing
} | { type: ProductsActionType.Update
  value?: ProductsModel
} ;

export { ProductsActionType };
export type {
  ProductsModel,
  ProductsAction,
  Product,
  Genre,
  ProductDetailModel,
  nowPlaying,
  upComing,
  topRated
};
