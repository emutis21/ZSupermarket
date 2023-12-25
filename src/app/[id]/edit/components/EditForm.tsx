// 'use client'

// import { ProductCompleted, ProductId } from '@/redux/features/productSlice'
// import { Input } from '@nextui-org/react'
// import CategoryList from './CategoryList'

// import { useEffect, useMemo, useState } from 'react'
// import { Toaster } from 'sonner'
// import { EditButton } from './EditButton'

// export const EditForm = (props: { id: ProductId; product?: ProductCompleted; isLoading: boolean }) => {
//   const [result, setResult] = useState<'ok' | 'ko' | null>(null)
//   const [isEdited, setIsEdited] = useState(false)

//   const initialFormValues = useMemo(
//     () => ({
//       product_name: props.product?.product_name || '',
//       product_description: props.product?.product_description || '',
//       category: props.product?.category || '',
//       price: props.product?.price?.toString() || '',
//       image_url: props.product?.image_url || '',
//       stock_quantity: props.product?.stock_quantity?.toString() || '',
//     }),
//     [props.product],
//   )


//   // --------------------------------------------------------------------------------------------
//   const [formValues, setFormValues] = useState({ ...initialFormValues })

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     setResult(null)

//     const promise = () => new Promise((resolve) => setTimeout(resolve, 2000))

//     const form = event.target as HTMLFormElement
//     const formData = new FormData(form)

//     const product_name = formData.get('edit_product_name') as string
//     const product_description = formData.get('edit_product_description') as string
//     let category = formData.get('edit_category') as string
//     const price = Number(formData.get('edit_price'))
//     const image_url = formData.get('edit_image_url') as string
//     const stock_quantity = Number(formData.get('edit_stock_quantity'))
//     const bar_code = props.product?.bar_code

//     if (!product_name || !product_description || !category || !price || !image_url || !stock_quantity || !bar_code) {
//       return
//     }

//     const editedProduct = {
//       product_name,
//       product_description,
//       category,
//       price,
//       image_url,
//       stock_quantity,
//       bar_code,
//     }

    
//   }

//   useEffect(() => {
//     // Compara los valores actuales del formulario con los valores iniciales
//     const isFormEdited = Object.keys(formValues).some(
//       (key) => formValues[key as keyof typeof formValues] !== initialFormValues[key as keyof typeof initialFormValues],
//     )

//     setIsEdited(isFormEdited)
//   }, [formValues, initialFormValues])



//   return (
//     <form className='w-full mt-24 flex flex-col gap-y-16' onSubmit={handleSubmit}>
//       <div className='grid sm:grid-cols-2 [&>*:nth-child(even)]:place-self-end gap-y-10'>
//         <Input
//           name='edit_product_name'
//           type='text'
//           label='Nombre'
//           placeholder='Arroz Jazmín'
//           className='max-w-xs'
//           autoFocus
//           defaultValue={props.product?.product_name}
//         />
//         <Input
//           name='edit_product_description'
//           type='text'
//           label='Descripción'
//           placeholder='Arroz Jazmín de grano largo'
//           className='max-w-xs'
//           defaultValue={props.product?.product_description}
//         />
//         <CategoryList value={props.product?.category} />
//         <Input
//           name='edit_price'
//           type='number'
//           label='Precio'
//           placeholder='1.99'
//           className='max-w-xs '
//           defaultValue={props.product?.price?.toString()}
//           startContent={
//             <div className='pointer-events-none flex items-center'>
//               <span className='text-default-400 text-small'>$</span>
//             </div>
//           }
//         />
//         <Input
//           name='edit_image_url'
//           type='text'
//           label='Imagen'
//           placeholder='https://www.supermarket.com/images/arroz-jazmin.jpg'
//           className='max-w-xs'
//           defaultValue={props.product?.image_url}
//         />
//         <Input
//           name='edit_stock_quantity'
//           type='number'
//           label='Stock'
//           placeholder='27'
//           className='max-w-xs'
//           defaultValue={props.product?.stock_quantity?.toString()}
//         />
//       </div>
//       <EditButton isEdited={isEdited} />
//       <Toaster richColors expand={true} position='bottom-right' />
//     </form>
//   )
// }
