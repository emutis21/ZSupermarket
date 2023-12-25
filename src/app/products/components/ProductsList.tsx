'use client'

import Link from 'next/link'

import { useGetProductsQuery } from '@/redux/services/productApi'
import { PaginationComponent } from './PaginationComponent'

export const ProductList = ({ search, currentPage }: { search?: string; currentPage?: number }) => {
  const { data: products } = useGetProductsQuery(null)

  console.log(search, currentPage)

  // const allPages = generatePagination(currentPage, totalPages)

  const filteredProducts = products?.filter((product) => {
    return product.product_name.toLowerCase().includes(search?.toLowerCase() || '')
  })

  return (
    <aside className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-12 gap-y-20 w-full'>
      {filteredProducts?.map((product) => (
        <div
          className='relative flex w-full max-w-[299px] flex-col rounded-xl bg-white/90 backdrop-blur bg-clip-border text-gray-700 shadow-md mx-auto'
          key={product.id}
        >
          <Link
            href={`/${product.id}`}
            key={product.id}
            className='relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600'
          >
            <img
              src={product.image_url}
              alt={product.product_name}
              className='object-cover object-center w-full h-full transition-all transform hover:scale-110'
            />
          </Link>
          <div className='p-6 grid gap-2'>
            <h5 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
              {product.product_name}
            </h5>
            <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
              {product.product_description}
            </p>
          </div>
          <div className='p-6 pt-0'>
            <Link
              href={`/${product.id}`}
              data-ripple-light='true'
              type='button'
              className='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            >
              Ver más
            </Link>
          </div>
        </div>
      ))}
      {filteredProducts?.length !== undefined && filteredProducts?.length === 0 && (
        <h2 className='text-center text-2xl font-bold text-gray-400'>No se encontraron resultados</h2>
      )}
      {filteredProducts?.length !== undefined && filteredProducts?.length && (
        <PaginationComponent currentPage={currentPage} />
      )}
    </aside>
  )
}
