'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductCompleted, ProductId, ProductWithBarCode, ProductWithId, QueryParams } from '../features/productSlice'
export const productApi = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductWithId[], QueryParams>({
      query: ({ page = 1, query = '' }: QueryParams) => `products?page=${page}&query=${query}`,
      // query: () => '/products',
      transformResponse: (response: { content: ProductWithId[] }) => response.content,
    }),
    getTotalPages: builder.query<number, void>({
      query: () => '/products',
      transformResponse: (response: any) => {
        return response.totalPages || 0
      },
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
  useGetTotalPagesQuery,
  useDeleteProductByIdMutation,
  useAddNewProductMutation,
  useEditProductMutation
} = productApi
