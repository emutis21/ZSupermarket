'use client'

import Link from 'next/link'
import { ReturnIcon } from '../icons/ReturnIcon'

export const ReturnButton = ({ id }: { id?: number }) => {
  const goBack = id ? `/products/${id}` : '/products'

  return (
    <Link
      prefetch={false}
      href={goBack}
      data-ripple-light='true'
      type='button'
      className='absolute flex w-fit select-none items-center gap-2 rounded-lg py-3 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 underline shadow-md transition-all hover:text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
    >
      <ReturnIcon />
      Volver
    </Link>
  )
}
