interface Product {
  backdrop_path: string
  genre_ids: number[]
  id: number
  overview: string
  poster_path: string
  release_date: string
  seats: string[]
  title: string
}

// Page Model
interface ProductsModel {
  products?: Product[]
}

enum ProductsActionType {
  Load = 'products-load',
  Clear = 'products-clear'
}

type ProductsAction = {
  type: ProductsActionType.Clear
} | {
  type: ProductsActionType.Load
  value?: ProductsModel
};

export { ProductsActionType };
export type { ProductsModel, ProductsAction, Product };
