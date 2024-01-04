'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductWithId, ProductCompleted, ProductWithBarCode, ProductId, QueryParams } from '../features/types'
export const productApi = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  endpoints: (builder) => ({
    getProducts: builder.query<{ products: ProductWithId[]; totalPages: number }, QueryParams>({
      query: ({ page = 1, query = '' }: QueryParams) => `products?query=${encodeURIComponent(query)}&page=${page}`,
      transformResponse: (response: { content: ProductWithId[]; totalPages: number }) => ({
        products: response.content,
        totalPages: response.totalPages,
      }),
    }),
    getProductById: builder.query<ProductCompleted, ProductId>({
      query: (id) => `/products/${id}`,
    }),
    deleteProductById: builder.mutation<ProductId, ProductId>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
    }),
    addNewProduct: builder.mutation<ProductWithBarCode, ProductWithBarCode>({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
    }),
    editProduct: builder.mutation<ProductWithId, ProductWithId>({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: 'PUT',
        body: product,
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductByIdMutation,
  useAddNewProductMutation,
  useEditProductMutation,
} = productApi
