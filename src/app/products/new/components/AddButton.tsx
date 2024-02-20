export const AddButton = () => {
  return (
    <button className='group relative flex h-10 w-36 cursor-pointer items-center self-center overflow-hidden rounded-lg border border-blue-500 bg-blue-500 hover:bg-blue-500 active:border-blue-500 active:bg-blue-500'>
      <span className='ml-8 transform text-lg font-semibold text-gray-200 transition-all duration-300 group-hover:translate-x-20'>
        Añadir
      </span>
      <span className='absolute right-0 flex h-full w-10 transform items-center justify-center rounded-lg bg-blue-500 transition-all duration-300 hover:bg-blue-800 active:bg-blue-600 group-hover:w-full group-hover:translate-x-0'>
        <svg
          className='svg w-8 text-white'
          fill='none'
          height='24'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          width='24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line x1='12' x2='12' y1='5' y2='19'></line>
          <line x1='5' x2='19' y1='12' y2='12'></line>
        </svg>
      </span>
    </button>
  )
}
