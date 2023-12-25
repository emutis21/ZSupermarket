'use client'

import { EditIcon } from '@/components/icons/EditIcon'
import { ProductId } from '@/redux/features/productSlice'
import Link from 'next/link'

interface EditButtonProps {
  id?: ProductId
}

export const EditButton = ({ id }: EditButtonProps) => {
  return (
    <Link
      href={`/edit/${id}`}
      className='rounded-lg overflow-hidden relative w-36 h-10 cursor-pointer flex items-center border border-blue-500 bg-blue-500 group hover:bg-blue-500 active:bg-blue-500 active:border-blue-500'
    >
      <span className='text-gray-200 font-semibold ml-10 transform group-hover:translate-x-20 transition-all duration-300'>
        Editar
      </span>
      <span className='absolute right-0 h-full w-10 rounded-lg bg-blue-500 hover:bg-blue-800 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300'>
        <EditIcon />
      </span>
    </Link>
  )
}
