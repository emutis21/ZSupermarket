interface TitleProps {
  children: React.ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return (
    <h1
      className='
        text-4xl
        font-bold
        py-16
        text-center
        relative
        gap-3
        w-full
        justify-center
      '
    >
      {children}
    </h1>
  )
}
