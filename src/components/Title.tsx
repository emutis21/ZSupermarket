interface TitleProps {
  children: React.ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return (
    <h1
      className='
        relative
        w-full
        justify-center
        gap-3
        py-16
        text-center
        text-4xl
        font-bold
      '
    >
      {children}
    </h1>
  )
}
