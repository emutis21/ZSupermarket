import { Title } from '@/components/Title'
import { ProductList } from './components/ProductsList'
import { SearchInput } from './components/SearchInput'
import Link from 'next/link'
import { AddIcon } from '@/components/icons/AddIcon'

export default async function page({ searchParams }: { searchParams?: { query?: string; page?: string } }) {
  const currentPage = Number(searchParams?.page) || 1
  const query = searchParams?.query || ''
  return (
    <div className='max-w-[1080px] px-5 mx-auto min-h-[calc(100vh-202px)]'>
      <header className='text-4xl font-bold mb-12 text-center relative'>
        <Title>ZSupermarket</Title>
        <nav className='grid gap-5'>
          <SearchInput />
          <div className='w-full flex justify-end'>
            <Link
              href='/products/new'
              className={`
                text-end w-fit h-full [&>button]:hover:rotate-90 [&>button>svg]:hover:stroke-white select-none flex items-center gap-2
                underline justify-end hover:text-white rounded-lg text-blue-500 py-3 align-middle font-sans text-xs font-bold
                uppercase shadow-md transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none
                disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
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
