interface Product {
  genre_ids: number[]
  id: number
  overview: string
  poster_path: string
  release_date: string
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

enum ProductsActionType {
  Load = 'products-load',
  Clear = 'products-clear',
  now_playingLoad = 'products-now_playing',
  upcomingLoad = 'products-upcoming',
  topRatedLoad = 'product-toprated'
}

type ProductsAction = {
  type: ProductsActionType.Clear
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
};

export { ProductsActionType };
export type { ProductsModel, ProductsAction, Product, Genre, nowPlaying, upComing, topRated };
