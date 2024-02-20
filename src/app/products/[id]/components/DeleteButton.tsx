'use client'

import { DeleteIcon } from '@/components/icons/DeleteIcon'
import { ModalComponent } from './ModalComponent'
import { Toaster, toast } from 'sonner'
import { Button, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import { useDeleteProductByIdMutation } from '@/redux/services/productApi'
import { DeleteButtonProps, ProductId } from '@/redux/features/types'

export const DeleteButton = ({ id, productName }: DeleteButtonProps) => {
  const className =
    'rounded-lg overflow-hidden mx-auto relative w-32 h-10 cursor-pointer flex items-center justify-between border border-red-500 bg-red-500 group hover:bg-red-500 active:bg-red-500 active:border-red-500'

  const [deleteProductById] = useDeleteProductByIdMutation()

  const handleDelete = async (id: ProductId) => {
    await deleteProductById(id)
    const promise = () => new Promise((resolve) => setTimeout(resolve, 1500))

    toast.promise(promise, {
      loading: `
        Eliminando ${productName}
      `,
      success: () => {
        return `${productName} eliminado`
      },
      error: 'Error'
    })
    promise().then(() => {
      window.location.href = '/products'
    })
  }

  return (
    <ModalComponent title='Eliminar' className={className} icon={<DeleteIcon />}>
      <ModalContent>
        {(onClose) => (
          <div className='flex flex-col bg-zinc-800 px-5 pb-5 pt-7'>
            <Toaster richColors expand={true} position='top-center' />

            <ModalHeader className='text-center'>
              ¿Estás seguro de eliminar este producto?{' '}
            </ModalHeader>

            <ModalBody className='flex w-full flex-row content-end items-center justify-end gap-2'>
              <Button
                className='h-full w-fit items-center justify-center self-end bg-transparent px-3 py-2 text-center align-middle font-sans text-xs font-semibold uppercase transition-all hover:underline focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                onPress={onClose}
              >
                Cancelar
              </Button>
              <button
                className='flex w-fit items-center justify-center gap-2 self-end rounded-md border-none bg-slate-900/40 px-3 py-2 text-center align-middle font-sans text-xs font-semibold uppercase text-white outline-none transition-all hover:text-red-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none [&>svg]:stroke-red-500'
                onClick={() => {
                  id && handleDelete(id)
                }}
              >
                <DeleteIcon />
                Eliminar
              </button>
            </ModalBody>
          </div>
        )}
      </ModalContent>
    </ModalComponent>
  )
}
