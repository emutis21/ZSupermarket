import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

// {
//   "product_name": "Leche descremada",
//   "product_description": "Leche descremada deli",
//   "stock_quantity": 15,
//  "price": 2,
//   "category": "LACTEOS",
//   "bar_code": "550e8400-e29b-41d4-a716-446655880001",
//   "image_url": "https://source.unsplash.com/480x300/?milk&random=10"
// }

export type ProductId = number
export type ProductBarCode = string

export interface Product {
  product_name: string
  product_description: string
  category: string
  price: number
  image_url: string
  stock_quantity: number
}

export interface ProductWithId extends Product {
  id?: ProductId
}

export interface ProductWithBarCode extends Product {
  bar_code: ProductBarCode
}

export interface ProductCompleted extends Product {
  id?: ProductId
  bar_code?: ProductBarCode
}

interface ProductsState {
  products: ProductCompleted[]
  loading: boolean
  error: string | null
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
}

export const productSlide = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<ProductWithBarCode>) => {
      state.products.push(action.payload)
    },
    deleteProductById: (state, action: PayloadAction<ProductId>) => {
      const id = action.payload
      state.products = state.products.filter((product) => product.id !== id)
      return state
    },
    editProduct: (state, action: PayloadAction<ProductCompleted>) => {
      const product = action.payload
      const index = state.products.findIndex((product) => product.id === product.id)
      if (index !== -1) {
        state.products[index] = product
      }
    }
  },
})

export default productSlide.reducer

export const { addNewProduct, deleteProductById } = productSlide.actions
