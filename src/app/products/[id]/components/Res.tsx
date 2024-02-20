'use client'

import { ReturnButton } from '@/components/ReturnButton'
import { Title } from '@/components/Title'
import { ProductId } from '@/redux/features/types'
import { useGetProductByIdQuery } from '@/redux/services/productApi'
import { EditButton } from '@/components/EditButton'
import { Barcode } from './Barcode'
import { DeleteButton } from './DeleteButton'
import Image from 'next/image'

export const Res = ({ id }: { id: ProductId }) => {
  const { data: product, isLoading } = useGetProductByIdQuery(id, {
    refetchOnMountOrArgChange: true
  })

  const { productName, productDescription, barCode, category, price, imageUrl, stockQuantity } =
    product || {}
  return (
    <main className="mx-auto min-h-[calc(100vh-202px)] max-w-[960px] px-5">
      <Title>
        <ReturnButton />
        ZSupermarket - {productName}
      </Title>
      <article className="relative mx-auto flex w-[70%] transform justify-between gap-5 rounded-xl bg-clip-border text-white shadow-md backdrop-blur-sm transition-all [&>picture>img]:hover:scale-110">
        <picture
          key={id}
          className="bg-blue-gray-500 shadow-blue-gray-500/40 relative my-4 -ml-6 h-[200px] w-80 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-border text-white shadow-lg"
        >
          {isLoading ? (
            <div className="bg-blue-gray-500 shadow-blue-gray-500/40 h-full w-full animate-pulse bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-border text-white shadow-lg" />
          ) : (
            <Image
              src={imageUrl!}
              alt={productName!}
              className="h-full w-full transform object-cover object-center transition-all"
            />
          )}
        </picture>
        <div className="grid gap-2 p-6 text-center">
          <h5 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
            {productDescription} - {stockQuantity} unidades
          </h5>
          <p className="text-blue-gray-900 block font-sans text-sm font-light leading-snug tracking-normal antialiased">
            <span className="font-bold">Categoría: </span>
            {category}
          </p>
          <p className="text-blue-gray-900 block font-sans text-sm font-light leading-snug tracking-normal antialiased">
            <span className="font-bold">Precio: </span>
            {price}
          </p>
          <div className="text-blue-gray-900 flex flex-col gap-3 font-sans text-sm font-light leading-snug tracking-normal antialiased">
            <div className="flex gap-3">
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
