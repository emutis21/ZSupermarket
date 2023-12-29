import { useGetTotalPagesQuery } from '@/redux/services/productApi'
import { Pagination } from '@nextui-org/react'
import { useSearchParams, usePathname } from 'next/navigation'

export const PaginationComponent = ({ currentPage }: { currentPage?: number }) => {
  const { data: totalPages } = useGetTotalPagesQuery()
  const pathname = usePathname()

  const searchParams = useSearchParams()

  const createPageURL = (page: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('query', page.toString())

    return `${pathname}?${params.toString()}`
  }

  console.log(createPageURL(2))

  return (
    <Pagination
      isCompact
      showControls
      total={totalPages || 1}
      initialPage={1}
      page={currentPage}
      className='self-end'
      onChange={(page) => {
        createPageURL(page)
      }}
    />
  )
}
