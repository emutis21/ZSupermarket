import { ReturnIcon } from './icons/ReturnIcon'

export const ReturnHome = () => {
  const goBack = () => {
    if (typeof window !== 'undefined') {
      if (document.referrer === '' || window.history.length <= 2) {
        window.location.href = '/products'
      } else {
        window.history.back()
      }
    }
  }

  return (
    <button
      onClick={goBack}
      data-ripple-light='true'
      type='button'
      className='select-none flex items-center w-fit underline hover:text-white rounded-lg text-blue-500 py-3 absolute gap-2 text-center align-middle font-sans text-xs font-bold uppercase shadow-md transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
    >
      <ReturnIcon />
      Volver
    </button>
  )
}
