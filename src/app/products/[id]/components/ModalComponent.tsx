import { ModalProps } from '@/redux/features/types'
import { Button, Modal, useDisclosure } from '@nextui-org/react'

export const ModalComponent = ({ children, title, className, icon }: ModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button className={className} onPress={onOpen}>
        {icon ? (
          <span className='transform font-semibold text-gray-200 transition-all duration-300 group-hover:translate-x-20'>
            {title}
          </span>
        ) : (
          title
        )}
        {icon && (
          <span className='absolute right-0 flex h-full w-10 transform items-center justify-center rounded-lg bg-red-500 transition-all duration-300 hover:bg-red-800 active:bg-red-600 group-hover:w-full group-hover:translate-x-0'>
            {icon}
          </span>
        )}
      </Button>
      <Modal
        backdrop='opaque'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20 overflow-hidden'
        }}
      >
        {children}
      </Modal>
    </>
  )
}
