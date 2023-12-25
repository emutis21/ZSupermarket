import Link from 'next/link'
import { ReturnIcon } from '@/components/icons/ReturnIcon'

export const ReturnComponent = (props: { href: string }) => {
  return (
    <Link
      href={props.href}
      data-ripple-light='true'
      type='button'
      className='select-none flex items-center w-fit underline hover:text-white rounded-lg text-blue-500 py-3 absolute gap-2 text-center align-middle font-sans text-xs font-bold uppercase shadow-md transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
    >
      <ReturnIcon />
      Volver
    </Link>
  )
}
