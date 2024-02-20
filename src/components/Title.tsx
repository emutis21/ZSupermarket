interface TitleProps {
  children: React.ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return (
    <h1
      className='
        w-full
        gap-2
        py-8
        text-center
        text-3xl
        font-bold
        md:gap-3
        md:py-16
        md:text-4xl
      '
    >
      {children}
    </h1>
  )
}
