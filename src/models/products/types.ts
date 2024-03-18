interface Product {
  genre_ids: number[]
  id: number
  overview: string
  poster_path: string
  release_date: string
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

enum ProductsActionType {
  Load = 'products-load',
  Clear = 'products-clear',
  Create = 'products-create',
  Update = 'products-update'
}

type ProductsAction = {
  type: ProductsActionType.Clear
} | {
  type: ProductsActionType.Create
  value?: ProductsModel
} | {
  type: ProductsActionType.Load
  value?: ProductsModel
} | {
  type: ProductsActionType.Update
  value?: ProductsModel
};

export { ProductsActionType };
export type { ProductsModel, ProductsAction, Product, Genre };
