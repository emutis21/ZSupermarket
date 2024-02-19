import { ReturnButton } from '@/components/ReturnButton'
import { Title } from '@/components/Title'
import { ProductForm } from './components/ProductForm'
import { ProductId } from '@/redux/features/types'

export default async function page({ params: { id } }: { params: { id?: ProductId } }) {
  return (
    <main className='px-5 max-w-[900px] mx-auto min-h-[calc(100vh-202px)]'>
      <Title>
        <ReturnButton id={id} />
        {id ? 'Editar Producto' : 'Crea un nuevo producto'}
      </Title>
      {id ? <ProductForm id={id} /> : <ProductForm />}
    </main>
  )
}
