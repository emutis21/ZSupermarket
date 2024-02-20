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
      className='group relative flex h-10 w-36 cursor-pointer items-center self-center overflow-hidden rounded-lg border border-violet-500 bg-violet-500 hover:bg-violet-500 active:border-violet-500 active:bg-violet-500 disabled:pointer-events-none disabled:opacity-50'
    >
      <span className='ml-10 transform font-semibold text-gray-200 transition-all duration-300 group-hover:translate-x-20'>
        Editar
      </span>
      <span className='absolute right-0 flex h-full w-10 transform items-center justify-center rounded-lg bg-violet-500 transition-all duration-300 hover:bg-violet-800 group-hover:w-full group-hover:translate-x-0'>
        <EditIcon />
      </span>
    </button>
  )
}
