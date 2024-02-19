'use client'

import { ReturnButton } from '@/components/ReturnButton'
import { Title } from '@/components/Title'
import { ProductId } from '@/redux/features/types'
import { useGetProductByIdQuery } from '@/redux/services/productApi'
import { EditButton } from '@/components/EditButton'
import { Barcode } from './Barcode'
import { DeleteButton } from './DeleteButton'

export const Res = ({ id }: { id: ProductId }) => {
  const { data: product, isLoading } = useGetProductByIdQuery(id, { refetchOnMountOrArgChange: true })

  const { productName, productDescription, barCode, category, price, imageUrl, stockQuantity } = product || {}
  return (
    <main className='max-w-[960px] px-5 mx-auto min-h-[calc(100vh-202px)]'>
      <Title>
        <ReturnButton />
        ZSupermarket - {productName}
      </Title>
      <article className='transition-all transform [&>picture>img]:hover:scale-110 relative flex justify-between w-[70%] rounded-xl backdrop-blur-sm text-white bg-clip-border shadow-md mx-auto gap-5'>
        <picture
          key={id}
          className='relative my-4 -ml-6 w-80 h-[200px] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600'
        >
          {isLoading ? (
            <div className='animate-pulse w-full h-full bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600' />
          ) : (
            <img
              src={imageUrl}
              alt={productName}
              className='object-cover object-center w-full h-full transition-all transform'
            />
          )}
        </picture>
        <div className='p-6 grid gap-2 text-center'>
          <h5 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
            {productDescription} - {stockQuantity} unidades
          </h5>
          <p className='block font-sans text-sm font-light leading-snug tracking-normal text-blue-gray-900 antialiased'>
            <span className='font-bold'>Categoría: </span>
            {category}
          </p>
          <p className='block font-sans text-sm font-light leading-snug tracking-normal text-blue-gray-900 antialiased'>
            <span className='font-bold'>Precio: </span>
            {price}
          </p>
          <div className='font-sans text-sm flex flex-col gap-3 font-light leading-snug tracking-normal text-blue-gray-900 antialiased'>
            <div className='flex gap-3'>
              <Barcode barcode={barCode} productName={productName} />
              <DeleteButton id={id} productName={productName} />
            </div>
            <EditButton id={id} />
          </div>
        </div>
      </article>
    </main>
  )
}
