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

interface Genre {
  id: number
  name: string
}

// Page Model
interface ProductsModel {
  genres?: Genre[]
  products?: Product[]
}

interface ProductBooked {
  booked?: Product[]
}

enum ProductsActionType {
  Load = 'products-load',
  Clear = 'products-clear',
  Create = 'products-create'
}

type ProductsAction = {
  type: ProductsActionType.Clear
} | {
  type: ProductsActionType.Create
  value?: ProductBooked
} | {
  type: ProductsActionType.Load
  value?: ProductsModel
};

export { ProductsActionType };
export type { ProductsModel, ProductsAction, Product, Genre, ProductBooked };
