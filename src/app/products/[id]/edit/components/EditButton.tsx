'use client'

import { EditIcon } from '@/components/icons/EditIcon'
import { EditButtonProps, ProductId } from '@/redux/features/types'
import { Button } from '@nextui-org/react'

// ;<EditButton isEdited={props.product === props.product} />



export const EditButton = ({ id, isEdited }: EditButtonProps) => {
  // const isEditedProduct = () => {
  //   if (isEdited) {
  //     console.log('isEdited', isEdited)
  //     return true
  //   }
  // }
  return (
    <button
      onClick={
        () => console.log('isEdited', isEdited)
        // isEditedProduct()
      }
      // isDisabled={isEditedProduct()}
      className='rounded-lg justify-between text-md self-center overflow-hidden relative w-36 h-10 cursor-pointer flex items-center border border-blue-500 bg-blue-500 group hover:bg-blue-500 active:bg-blue-500 active:border-blue-500'
    >
      <span className='text-gray-200 font-semibold ml-6 transform group-hover:translate-x-20 transition-all duration-300'>
        Editar
      </span>
      <span className='absolute right-0 h-full w-10 rounded-lg bg-blue-500 hover:bg-blue-800 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300'>
        <EditIcon />
      </span>
    </button>
  )
}
