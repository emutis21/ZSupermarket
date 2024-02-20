import { Title } from '@/components/Title'
import { ProductList } from './components/ProductsList'
import { SearchInput } from './components/SearchInput'
import Link from 'next/link'
import { AddIcon } from '@/components/icons/AddIcon'

export default async function page({
  searchParams
}: {
  searchParams?: { query?: string; page?: string }
}) {
  const currentPage = Number(searchParams?.page) || 1
  const query = searchParams?.query || ''
  return (
    <div className='mx-auto min-h-[calc(100vh-202px)] max-w-[1080px] px-5'>
      <header className='relative mb-12 text-center text-4xl font-bold'>
        <Title>ZSupermarket</Title>
        <nav className='grid gap-5'>
          <SearchInput />
          <div className='flex w-full justify-end'>
            <Link
              href='/products/new'
              className={`
                flex h-full w-fit select-none items-center justify-end gap-2 rounded-lg py-3
                text-end align-middle font-sans text-xs font-bold uppercase text-blue-500 underline shadow-md transition-all
                hover:text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50
                disabled:shadow-none [&>button>svg]:hover:stroke-white [&>button]:hover:rotate-90
              `}
            >
              <AddIcon />
              Agregar producto
            </Link>
          </div>
        </nav>
      </header>
      <ProductList query={query} currentPage={currentPage} />
    </div>
  )
}
