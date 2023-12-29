'use client'

import { ReturnHome } from '@/components/ReturnHome'
import { Title } from '@/components/Title'
import { ProductId } from '@/redux/features/productSlice'
import { useDeleteProductByIdMutation, useGetProductByIdQuery } from '@/redux/services/productApi'
import { Barcode } from './Barcode'
import { DeleteButton } from './DeleteButton'
import { EditButton } from './EditButton'

export const Res = ({ id }: { id: ProductId }) => {
  const { data: product, isLoading } = useGetProductByIdQuery(id)

  return (
    <>
      <Title>
        <ReturnHome />
        ZSupermarket - {product?.product_name}
      </Title>
      <article className='relative flex justify-between w-[70%] rounded-xl backdrop-blur-sm text-white bg-clip-border shadow-md mx-auto gap-5'>
        <picture
          key={product?.id}
          className='relative my-4 -ml-6 w-80 h-[200px] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600'
        >
          {isLoading ? (
            <div className='animate-pulse w-full h-full bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600' />
          ) : (
            <img
              src={product?.image_url}
              alt={product?.product_name}
              className='object-cover object-center w-full h-full transition-all transform hover:scale-110'
            />
          )}
        </picture>
        <div className='p-6 grid gap-2 text-center'>
          <h5 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
            {product?.product_description} - {product?.stock_quantity} unidades
          </h5>
          <p className='block font-sans text-sm font-light leading-snug tracking-normal text-blue-gray-900 antialiased'>
            <span className='font-bold'>Categoría: </span>
            {product?.category}
          </p>
          <p className='block font-sans text-sm font-light leading-snug tracking-normal text-blue-gray-900 antialiased'>
            <span className='font-bold'>Precio: </span>
            {product?.price}
          </p>
          <div className='font-sans text-sm flex flex-col gap-3 font-light leading-snug tracking-normal text-blue-gray-900 antialiased'>
            <div className='flex gap-3'>
              <Barcode barcode={product?.bar_code} product_name={product?.product_name} />
              <DeleteButton id={product?.id} product_name={product?.product_name} />
            </div>
            {/* <EditButton id={product?.id} /> */}
          </div>
        </div>
      </article>
    </>
  )
}
