import Link from 'next/link'

export default async function Home() {

  return (
    <main className='max-w-[960px] px-5 mx-auto grid place-content-center min-h-[calc(100vh-202px)]'>
      <h1 className='text-4xl font-bold mb-12 text-center relative'>
        Bienvenidos a<span className='text-blue-500 block text-5xl'>Supermarket</span>
      </h1>
      <Link
        href={`/products`}
        className='w-full h-full hover:text-blue-500 text-center'
      >
        Ver productos
      </Link>
    </main>
  )
}
