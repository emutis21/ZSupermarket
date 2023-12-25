'use client'

import { Select, SelectItem } from '@nextui-org/react'
import { categories } from '@/db/categories'

export default function CategoryList() {
  return (
    <Select isRequired name='category' className='max-w-xs' label='Categoría' placeholder='Selecciona una categoría'>
      {categories.map((category) => (
        <SelectItem key={category.id} value={category.id}>
          {category.name}
        </SelectItem>
      ))}
    </Select>
  )
}
