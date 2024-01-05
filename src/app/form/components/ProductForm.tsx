'use client'

import CategoryList from '@/app/form/components/CategoryList'
import { useAddNewProductMutation } from '@/redux/services/productApi'
import { Input } from '@nextui-org/react'
import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import { AddButton } from './AddButton'
import { useRouter } from 'next/navigation'

export const ProductForm = (props: { id?: number }) => {
  const [addNewProduct] = useAddNewProductMutation()
  const [result, setResult] = useState<'ok' | 'ko' | null>(null)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setResult(null)

    const promise = () => new Promise((resolve) => setTimeout(resolve, 2000))

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const productName = formData.get('productName') as string
    const productDescription = formData.get('productDescription') as string
    let category = formData.get('category') as string
    const price = Number(formData.get('price'))
    const imageUrl = formData.get('imageUrl') as string
    const stockQuantity = Number(formData.get('stockQuantity'))

    if (!productName || !productDescription || !category || !price || !imageUrl || !stockQuantity) {
      return
    }

    const barCode = crypto.randomUUID()

    const newProduct = {
      productName,
      productDescription,
      category,
      price,
      imageUrl,
      stockQuantity,
      barCode,
    }
    await addNewProduct(newProduct)

    setResult('ok')

    toast.promise(promise, {
      loading: `
        Creando ${productName}
      `,
      success: () => {
        return `
          ${productName} creado
        `
      },
      error: 'Error',
    })
    promise().then(() => {
      form.reset()
      router.push('/products')
    })
  }

  return (
    <form className='w-full mt-24 flex flex-col gap-y-16' onSubmit={handleSubmit}>
      <div className='grid sm:grid-cols-2 [&>*:nth-child(even)]:place-self-end gap-y-10'>
        <Input
          isRequired
          name='productName'
          type='text'
          label='Nombre'
          placeholder='Arroz Jazmín'
          className='max-w-xs'
          autoFocus
        />
        <Input
          isRequired
          name='productDescription'
          type='text'
          label='Descripción'
          placeholder='Arroz Jazmín de grano largo'
          className='max-w-xs'
        />
        <CategoryList />
        <Input
          isRequired
          name='price'
          type='number'
          startContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>$</span>
            </div>
          }
          label='Precio'
          placeholder='1.99'
          className='max-w-xs '
        />
        <Input
          isRequired
          name='imageUrl'
          type='text'
          label='Imagen'
          placeholder='https://www.supermarket.com/images/arroz-jazmin.jpg'
          className='max-w-xs '
        />
        <Input isRequired name='stockQuantity' type='number' label='Stock' placeholder='27' className='max-w-xs ' />
      </div>
      <AddButton />
      <Toaster richColors expand={true} position='bottom-right' />
    </form>
  )
}
