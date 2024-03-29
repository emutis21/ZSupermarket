export const AddIcon = () => {
  return (
    <button
      title='Añade un producto'
      className='group cursor-pointer outline-none duration-300 hover:rotate-90'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24px'
        height='24px'
        viewBox='0 0 24 24'
        className='fill-none stroke-blue-500 duration-300 group-hover:fill-blue-800 group-active:fill-blue-700 group-active:stroke-blue-200 group-active:duration-0'
      >
        <path
          d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
          strokeWidth='1.5'
        ></path>
        <path d='M8 12H16' strokeWidth='1.5'></path>
        <path d='M12 16V8' strokeWidth='1.5'></path>
      </svg>
    </button>
  )
}
