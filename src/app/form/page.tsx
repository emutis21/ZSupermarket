import { ReturnHome } from '@/components/ReturnHome'
import { Title } from '@/components/Title'
import { ProductForm } from './components/ProductForm'
import { ProductId } from '@/redux/features/productSlice'

export default async function page({ params: { id } }: { params: { id: ProductId } }) {

  return (
    <main className='px-5 max-w-[900px] mx-auto min-h-[calc(100vh-202px)]'>
      <Title>
        <ReturnHome />
        Crea un nuevo producto
        <ProductForm id={id} />
      </Title>
    </main>
  )
}
