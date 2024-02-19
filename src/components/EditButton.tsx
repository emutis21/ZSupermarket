import { EditIcon } from '@/components/icons/EditIcon'
import { EditButtonProps } from '@/redux/features/types'

import { useRouter } from 'next/navigation'

export const EditButton = ({ id, isEdited }: EditButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (id) {
      router.push(`${id}/edit`)
    }
  }

  return (
    <button
      disabled={isEdited === undefined ? false : !isEdited}
      onClick={handleClick}
      className='disabled:opacity-50 disabled:pointer-events-none self-center rounded-lg overflow-hidden relative w-36 h-10 cursor-pointer flex items-center border border-violet-500 bg-violet-500 group hover:bg-violet-500 active:bg-violet-500 active:border-violet-500'
    >
      <span className='text-gray-200 font-semibold ml-10 transform group-hover:translate-x-20 transition-all duration-300'>
        Editar
      </span>
      <span className='absolute right-0 h-full w-10 rounded-lg bg-violet-500 hover:bg-violet-800 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300'>
        <EditIcon />
      </span>
    </button>
  )
}
