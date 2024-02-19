import { categories } from '@/db/categories'
import { Select, SelectItem, Selection } from '@nextui-org/react'
import { useEffect, useState } from 'react'

interface CategoryListProps {
  selectedValue?: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export default function CategoryList({ selectedValue, handleChange }: CategoryListProps) {
  const [value, setValue] = useState<Selection>(new Set([]))

  useEffect(() => {
    setValue(new Set(selectedValue ? [selectedValue] : []))
  }, [selectedValue])

  return (
    <Select
      isRequired
      name='category'
      className='max-w-xs'
      label='Categoría'
      selectedKeys={value}
      placeholder={selectedValue || 'Selecciona una categoría de la lista'}
      onSelectionChange={setValue}
      onChange={handleChange}
    >
      {categories.map((category) => (
        <SelectItem key={category.value} value={category.value}>
          {category.label}
        </SelectItem>
      ))}
    </Select>
  )
}
