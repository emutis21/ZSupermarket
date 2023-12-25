
// vamos a crear un hook para obtener el producto por id

import { ProductId } from '@/redux/features/productSlice'
import { useGetProductByIdQuery } from '@/redux/services/productApi'

// const { data: product, isLoading } = useGetProductByIdQuery(id)

export default function UseProducts({id}: {id: ProductId}) {


  const { data: product, isLoading } = useGetProductByIdQuery(id)

  return { product, isLoading }
}
