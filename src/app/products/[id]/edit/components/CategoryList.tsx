'use client'

import { Select, SelectItem } from '@nextui-org/react'
import { categories } from '@/db/categories'
import { useState } from 'react'

export default function CategoryList(props: { value?: string }) {
  const [value] = useState(props.value)

  return (
    <div className='flex flex-col'>
      <Select
        key={value}
        name='edit_category'
        className='max-w-xs'
        label='Categoría'
        placeholder='Selecciona una categoría'
        value={value}
        selectedKeys={value ? [value] : []}
        defaultSelectedKeys={value ? [value] : []}
      >
        {categories.map((category) => (
          <SelectItem key={category.name} value={category.name}>
            {category.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}
