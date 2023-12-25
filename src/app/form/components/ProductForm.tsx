'use client'

import CategoryList from '@/app/form/components/CategoryList'
import { useAddNewProductMutation, useGetProductByIdQuery, useGetProductsQuery } from '@/redux/services/productApi'
import { Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'
import { AddButton } from './AddButton'

export const ProductForm = (props: { id?: number }) => {
  const [addNewProduct] = useAddNewProductMutation()
  const [result, setResult] = useState<'ok' | 'ko' | null>(null)

  console.log(props.id)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setResult(null)

    const promise = () => new Promise((resolve) => setTimeout(resolve, 2000))

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const product_name = formData.get('product_name') as string
    const product_description = formData.get('product_description') as string
    let category = formData.get('category') as string
    const price = Number(formData.get('price'))
    const image_url = formData.get('image_url') as string
    const stock_quantity = Number(formData.get('stock_quantity'))

    if (!product_name || !product_description || !category || !price || !image_url || !stock_quantity) {
      return
    }

    const bar_code = crypto.randomUUID()

    const newProduct = {
      product_name,
      product_description,
      category,
      price,
      image_url,
      stock_quantity,
      bar_code,
    }
    await addNewProduct(newProduct)

    setResult('ok')

    toast.promise(promise, {
      loading: `
        Creando ${product_name}
      `,
      success: () => {
        return `
          ${product_name} creado
        `
      },
      error: 'Error',
    })
    promise().then(() => {
      form.reset()
      window.location.href = '/products'
    })
  }

  return (
    <form className='w-full mt-24 flex flex-col gap-y-16' onSubmit={handleSubmit}>
      <div className='grid sm:grid-cols-2 [&>*:nth-child(even)]:place-self-end gap-y-10'>
        <Input
          isRequired
          name='product_name'
          type='text'
          label='Nombre'
          placeholder='Arroz Jazmín'
          className='max-w-xs'
          autoFocus
        />
        <Input
          isRequired
          name='product_description'
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
          name='image_url'
          type='text'
          label='Imagen'
          placeholder='https://www.supermarket.com/images/arroz-jazmin.jpg'
          className='max-w-xs '
        />
        <Input isRequired name='stock_quantity' type='number' label='Stock' placeholder='27' className='max-w-xs ' />
      </div>
      <AddButton />
      <Toaster richColors expand={true} position='bottom-right' />
    </form>
  )
}
