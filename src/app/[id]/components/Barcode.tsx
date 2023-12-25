'use client'

import { CopyIcon } from '@/components/icons/CopyIcon'
import { ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { Toaster, toast } from 'sonner'
import { ModalComponent } from './ModalComponent'

interface BarcodeProps {
  barcode?: string
  product_name?: string
}

export const Barcode = ({ barcode, product_name }: BarcodeProps) => {
  const copyToClipboard = () => {
    barcode && navigator.clipboard.writeText(barcode)
    toast.success('Copiado al portapapeles')
  }

  const className =
    'rounded-lg overflow-hidden relative w-36 h-10 cursor-pointer flex items-center border border-gray-500 bg-gray-600 group hover:bg-gray-500 active:bg-gray-500 active:border-gray-500'

  return (
    <ModalComponent title='Ver códio de barras' className={className}>
      <ModalContent>
        {() => (
          <div className='bg-zinc-800 pt-7 pb-5 px-5'>
            <Toaster richColors expand={true} position='top-center' />

            <ModalHeader className='flex flex-col gap-1 text-center'>Código de barras de {product_name}</ModalHeader>
            <ModalBody className='mb-3'>
              <button
                className='flex border-purple-700 hover:bg-purple-950 border-4 rounded-md gap-2 items-center justify-center w-full py-3 px-6 text-center align-middle font-sans text-xs font-semibold uppercase shadow-md transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                onClick={copyToClipboard}
              >
                <CopyIcon />
                {barcode}
              </button>
            </ModalBody>
          </div>
        )}
      </ModalContent>
    </ModalComponent>
  )
}
