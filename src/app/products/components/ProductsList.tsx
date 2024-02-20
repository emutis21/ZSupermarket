'use client'

import Link from 'next/link'

import { ProductCompleted } from '@/redux/features/types'
import { useGetProductsQuery } from '@/redux/services/productApi'
import { MagicMotion } from 'react-magic-motion'
import { PaginationComponent } from './PaginationComponent'
import Image from 'next/image'

export const ProductList = ({ query, currentPage }: { query?: string; currentPage?: number }) => {
  const { data } = useGetProductsQuery({ page: currentPage, query })

  const filteredProducts = data?.products.filter((product: ProductCompleted) => {
    return product.productName.toLowerCase().includes(query?.toLowerCase() || '')
  })

  const totalPages = data?.totalPages

  return (
    <main className='flex w-full flex-col justify-center gap-6'>
      <MagicMotion>
        <section className='grid w-full grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 md:grid-cols-3'>
          {filteredProducts?.map(({ id, imageUrl, productName, productDescription }) => (
            <article
              className='relative mx-auto flex w-full flex-col rounded-xl bg-white/90 bg-clip-border text-gray-700 shadow-md backdrop-blur [&>a>img]:hover:scale-110'
              key={id}
            >
              <Link
                href={`products/${id}`}
                key={id}
                className='bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-border text-white shadow-lg'
              >
                <Image
                  src={imageUrl}
                  alt={productName}
                  className='h-full w-full transform object-cover object-center transition-all'
                />
              </Link>
              <div className='grid gap-2 p-6'>
                <h5 className='text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased'>
                  {productName}
                </h5>
                <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
                  {productDescription}
                </p>
              </div>
              <div className='p-6 pt-0'>
                <Link
                  href={`products/${id}`}
                  data-ripple-light='true'
                  type='button'
                  className='select-none rounded-lg bg-blue-500 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                >
                  Ver más
                </Link>
              </div>
            </article>
          ))}
        </section>
      </MagicMotion>
      {data === undefined ||
        (filteredProducts?.length === 0 && (
          <h2 className='text-center text-2xl font-bold text-gray-400'>
            No se encontraron resultados
          </h2>
        ))}
      {filteredProducts?.length !== undefined && filteredProducts?.length && (
        <PaginationComponent currentPage={currentPage} totalPages={totalPages} />
      )}
    </main>
  )
}
