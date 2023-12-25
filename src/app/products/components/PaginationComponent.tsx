import { useGetTotalPagesQuery } from '@/redux/services/productApi'
import { Pagination } from '@nextui-org/react'
import { useSearchParams, usePathname } from 'next/navigation'

export const PaginationComponent = ({ currentPage }: { currentPage?: number }) => {
  const { data: totalPages } = useGetTotalPagesQuery()
  const pathname = usePathname()

  console.log(totalPages)

  const searchParams = useSearchParams()

  const createPageURL = (page: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('search', page.toString())

    return `${pathname}?${params.toString()}`
  }

  return (
    <div className='w-full my-3 col-span-3 -mt-6 flex justify-end'>
      <Pagination
        isCompact
        showControls
        href={createPageURL(currentPage - 1)}
        total={totalPages ? totalPages : searchParams.get('search') ? parseInt(searchParams.get('search') || '1') : 1}
        initialPage={currentPage}
        // de momento en el onChange vamos a usar el createPageURL
        onChange={(page) => {
          createPageURL(page)
        }}
        // page={currentPage}
      />
    </div>
  )
}
