import { z } from 'zod'
import { categories } from '../db/categories'
import { Category } from '@/redux/features/types'

const categoryNames = categories.map((cat: Category) => cat.label) as unknown as [
  string,
  ...string[]
]

export const formSchema = z.object({
  productName: z
    .string()
    .min(3, { message: 'El nombre del producto debe tener al menos 3 caracteres' })
    .max(25, {
      message: 'El nombre del producto debe tener como máximo 25 caracteres'
    }),
  productDescription: z
    .string()
    .min(3, {
      message: 'La descripción del producto debe tener al menos 3 caracteres'
    })
    .max(50, {
      message: 'La descripción del producto debe tener como máximo 50 caracteres'
    }),
  category: z.enum(categoryNames).refine((data) => {
    if (!categoryNames.includes(data as string)) {
      return { message: 'Seleccione una categoría válida' }
    }
    return true
  }),
  price: z
    .number()
    .min(0, {
      message: 'El precio debe ser mayor a 0'
    })
    .max(1000000, {
      message: 'El precio debe ser menor a 1000000'
    }),
  imageUrl: z.string().url({ message: 'Ingrese una URL válida' }),
  stockQuantity: z
    .number()
    .min(0, { message: 'El stock debe ser mayor a 0' })
    .max(500, { message: 'El stock debe ser menor a 500' })
})
