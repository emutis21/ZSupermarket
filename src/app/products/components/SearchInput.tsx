'use client'

import { SearchIcon } from '@/components/icons/SearchIcon'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const WAIT_BETWEEN_CHANGES = 300

export const SearchInput = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    params.set('page', '1')
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)
  }, WAIT_BETWEEN_CHANGES)

  return (
    <div className='relative'>
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type='search'
        autoFocus
        id='query'
        name='query'
        placeholder='Aguacate...'
        autoComplete='off'
        defaultValue={searchParams.get('query')?.toString()}
        className='block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 font-semibold text-neutral-50 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-blue-950/5'
      />
      <div className='absolute inset-y-1 right-1 flex justify-end'>
        <button
          type='submit'
          aria-label='Submit'
          className='flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-900 text-white transition hover:bg-neutral-800'
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  )
}
