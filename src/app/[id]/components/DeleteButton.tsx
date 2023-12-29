'use client'

import { DeleteIcon } from '@/components/icons/DeleteIcon'
import { ProductId } from '@/redux/features/productSlice'
import { ModalComponent } from './ModalComponent'
import { Toaster, toast } from 'sonner'
import { Button, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import { useDeleteProductByIdMutation } from '@/redux/services/productApi'

interface DeleteButtonProps {
  id?: ProductId
  productName?: string
}

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
      error: 'Error',
    })
    promise().then(() => {
      window.location.href = '/products'
    })
  }

  return (
    <ModalComponent title='Eliminar' className={className} icon={<DeleteIcon />}>
      <ModalContent>
        {(onClose) => (
          <div className='bg-zinc-800 flex flex-col pt-7 pb-5 px-5'>
            <Toaster richColors expand={true} position='top-center' />

            <ModalHeader className='text-center'>¿Estás seguro de eliminar este producto? </ModalHeader>

            <ModalBody className='flex gap-2 flex-row justify-end items-center w-full content-end'>
              <Button
                className='h-full bg-transparent items-center justify-center hover:underline w-fit px-3 self-end text-center align-middle font-sans text-xs font-semibold py-2 uppercase transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                onPress={onClose}
              >
                Cancelar
              </Button>
              <button
                className='bg-slate-900/40 flex rounded-md hover:text-red-500 text-white border-none outline-none gap-2 [&>svg]:stroke-red-500 items-center justify-center w-fit py-2 px-3 self-end text-center align-middle font-sans text-xs font-semibold uppercase transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
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
