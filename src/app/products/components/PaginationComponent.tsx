'use client'

import { Pagination } from '@nextui-org/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export const PaginationComponent = ({
  currentPage,
  totalPages
}: {
  currentPage?: number
  totalPages?: number
}) => {
  const [page, setPage] = useState(currentPage || 1)
  const pathname = usePathname()
  const router = useRouter()

  const searchParams = useSearchParams()

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())

    return `${pathname}?${params.toString()}`
  }

  return (
    <Pagination
      className='self-end'
      total={totalPages || 1}
      color='primary'
      page={page}
      showControls
      variant={'faded'}
      isDisabled={totalPages === 1}
      onChange={(page: number) => {
        const url = createPageURL(page)
        setPage(page)
        router.push(url)
      }}
    />
  )
}
