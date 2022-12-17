import {ReactNode} from 'react'

type Props = {
    child: ReactNode
    isOpen: boolean;
    closeModal: () => void
}

const Modal = ({child, closeModal}: Props) => {
  return (
    <div className="z-40 absolute w-screen h-screen bg-black/20 top-0 left-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">{child}</div>
    </div>
  )
}

export default Modal