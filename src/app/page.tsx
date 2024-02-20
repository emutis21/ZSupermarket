import Link from 'next/link'

export default async function Home() {
  return (
    <main className='mx-auto grid min-h-[calc(100vh-202px)] max-w-[960px] place-content-center px-5'>
      <h1 className='relative mb-12 text-center text-4xl font-bold'>
        Bienvenidos a<span className='block text-5xl text-blue-500'>ZSupermarket</span>
      </h1>
      <Link href={`/products`} className='h-full w-full text-center hover:text-blue-500'>
        Ver productos
      </Link>
    </main>
  )
}
