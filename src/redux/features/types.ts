export interface QueryParams {
  page?: number
  query?: string
}

export interface Product {
  productName: string
  productDescription: string
  category: string
  price: number
  imageUrl: string
  stockQuantity: number
}

export interface ProductWithId extends Product {
  id?: ProductId
}

export interface ProductWithBarCode extends Product {
  barCode: ProductBarCode
}

export interface ProductCompleted extends Product {
  id?: ProductId
  barCode?: ProductBarCode
}

export interface ProductsState {
  products: ProductCompleted[]
  loading: boolean
  error: string | null
}

export interface ModalProps {
  children: React.ReactNode
  title: string
  className?: string
  icon?: React.ReactNode
}

export interface BarcodeProps {
  barcode?: string
  productName?: string
}

export interface DeleteButtonProps {
  id?: ProductId
  productName?: string
}

export type EditButtonProps = {
  id?: ProductId
  isEdited?: boolean
}

export type ProductId = number
export type ProductBarCode = string

export type Category = {
  id: number
  name: string
}
