'use client'

import { Title } from '@/components/Title'
import { ProductId } from '@/redux/features/productSlice'
import { useGetProductByIdQuery } from '@/redux/services/productApi'
import { EditForm } from './components/EditForm'
import { ReturnComponent } from './components/ReturnComponent'

export default function EditPage({ params: { id } }: { params: { id: ProductId } }) {
  const { data: product, isLoading } = useGetProductByIdQuery(id)

  return (
    <main className='max-w-[960px] px-5 mx-auto min-h-[calc(100vh-202px)]'>
      <Title>
        <ReturnComponent href={`/${id}`} />
        Editando {product?.productName}
      </Title>
      <EditForm id={id} product={product} isLoading={isLoading} />
    </main>
  )
}
