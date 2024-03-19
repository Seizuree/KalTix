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

interface Genre {
  id: number
  name: string
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
  Clear = 'products-clear',
  Detail = 'products-detail',
  Create = 'products-create',
  Update = 'products-update'
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
  type: ProductsActionType.Update
  value?: ProductsModel
} ;

export { ProductsActionType };
export type {
  ProductsModel,
  ProductsAction,
  Product,
  Genre,
  ProductDetailModel
};
