import { ProductId } from '@/redux/features/types'
import { useGetProductByIdQuery } from '@/redux/services/productApi'

export default function UseProducts({ id }: { id: ProductId }) {
  const { data: product, isLoading } = useGetProductByIdQuery(id)

  return { product, isLoading }
}
