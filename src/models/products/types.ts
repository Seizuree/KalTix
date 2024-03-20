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

interface ProductDeleted {
  id: number
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
  genres?: Genre[]
  recommendations?: Product[]
}

enum ProductsActionType {
  Load = 'products-load',
  Detail = 'products-detail',
  NowPlayingLoad = 'products-now_playing',
  UpcomingLoad = 'products-upcoming',
  TopratedLoad = 'product-toprated'
}

type ProductsAction = {
  type: ProductsActionType.Detail
  value?: ProductDetailModel
} | {
  type: ProductsActionType.Load
  value?: ProductsModel
} | {
  type: ProductsActionType.NowPlayingLoad
  value?: nowPlaying
} | {
  type: ProductsActionType.TopratedLoad
  value?: topRated
} | {
  type: ProductsActionType.UpcomingLoad
  value?: upComing
} ;

export { ProductsActionType };
export type {
  ProductsModel,
  ProductsAction,
  ProductDeleted,
  Product,
  Genre,
  ProductDetailModel,
  nowPlaying,
  upComing,
  topRated
};
