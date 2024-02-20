'use client'

import CategoryList from '@/app/products/new/components/CategoryList'
import {
  useAddNewProductMutation,
  useEditProductMutation,
  useGetProductByIdQuery
} from '@/redux/services/productApi'
import { Input } from '@nextui-org/react'
import { useEffect, useRef, useState } from 'react'
import { Toaster, toast } from 'sonner'
import { AddButton } from './AddButton'
import { useRouter } from 'next/navigation'
import { Product } from '@/redux/features/types'
import { EditButton } from '@/components/EditButton'
import { skipToken } from '@reduxjs/toolkit/query/react'

export const ProductForm = ({ id }: { id?: number }) => {
  const { data } = useGetProductByIdQuery(id ? id : skipToken)
  const [addNewProduct] = useAddNewProductMutation()
  const [editProduct] = useEditProductMutation()
  const [result, setResult] = useState<'ok' | 'ko' | null>(null)
  const [isEdited, setIsEdited] = useState(false)
  const [changedFields, setChangedFields] = useState<{ [key: string]: any }>({})

  const router = useRouter()
  const [product, setProduct] = useState<Product | null>({
    productName: '',
    productDescription: '',
    category: '',
    price: 0,
    imageUrl: '',
    stockQuantity: 0
  })

  const initialProduct = useRef(product)
  const { productName, productDescription, category, price, imageUrl, stockQuantity } =
    product || {}

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (data) {
          setProduct(data)
          initialProduct.current = data
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id, data])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target

    setProduct((prevProduct) => {
      if (!prevProduct) {
        prevProduct = {
          productName: '',
          productDescription: '',
          category: '',
          price: 0,
          imageUrl: '',
          stockQuantity: 0
        }
      }

      const updatedProduct = {
        ...prevProduct,
        [name]: name === 'price' || name === 'stockQuantity' ? Number(value) : value
      }

      setIsEdited(JSON.stringify(updatedProduct) !== JSON.stringify(initialProduct.current))

      return updatedProduct
    })

    setChangedFields((prevFields) => ({ ...prevFields, [name]: value }))
  }

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
      barCode
    }

    const handleProduct = async (
      id: number | undefined,
      changedFields: object | undefined,
      newProduct: any
    ) => {
      try {
        await promise()

        let result
        if (id && changedFields) {
          const payload = { id, ...changedFields }
          result = await editProduct(payload)
        } else {
          result = await addNewProduct(newProduct)
        }

        if ('error' in result) {
          throw new Error('Error al procesar el producto')
        }

        form.reset()

        id ? router.push(`/products/${id}`) : router.push('/products')

        return `${productName} procesado con éxito`
      } catch (error) {
        console.error('Error:', error)
        throw error
      }
    }

    toast.promise(handleProduct(id, changedFields, newProduct), {
      loading: `Procesando ${productName}...`,
      success: (message) => message,
      error: (message) => `${message}`
    })

    handleProduct(id, changedFields, newProduct)
  }

  return (
    <form className='mt-24 flex w-full flex-col gap-y-16' onSubmit={handleSubmit}>
      <div className='grid gap-y-10 sm:grid-cols-2 [&>*:nth-child(even)]:place-self-end'>
        <Input
          isRequired
          name='productName'
          onChange={handleChange}
          type='text'
          label='Nombre'
          placeholder='Arroz Jazmín'
          value={productName}
          className='max-w-xs'
          autoFocus
        />
        <Input
          isRequired
          name='productDescription'
          onChange={handleChange}
          type='text'
          label='Descripción'
          placeholder='Arroz Jazmín de grano largo'
          value={productDescription}
          className='max-w-xs'
        />
        <CategoryList selectedValue={category} handleChange={handleChange} />
        <Input
          isRequired
          name='price'
          onChange={handleChange}
          type='number'
          startContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-small text-default-400'>$</span>
            </div>
          }
          label='Precio'
          placeholder='1.99'
          value={price?.toString()}
          className='max-w-xs '
        />
        <Input
          isRequired
          name='imageUrl'
          onChange={handleChange}
          type='text'
          label='Imagen'
          placeholder='https://www.supermarket.com/images/arroz-jazmin.jpg'
          value={imageUrl}
          className='max-w-xs '
        />
        <Input
          isRequired
          name='stockQuantity'
          onChange={handleChange}
          type='number'
          label='Stock'
          placeholder='27'
          value={stockQuantity?.toString()}
          className='max-w-xs '
        />
      </div>
      {id ? <EditButton isEdited={isEdited} /> : <AddButton />}
      <Toaster richColors expand={true} position='bottom-right' />
    </form>
  )
}
