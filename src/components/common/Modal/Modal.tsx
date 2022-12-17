import FocusTrap from 'focus-trap-react';
import {ReactNode} from 'react'
import { HiX } from 'react-icons/hi'

type Props = {
    child: ReactNode
    isOpen: boolean;
    closeModal: () => void
}

const Modal = ({child, closeModal}: Props) => {
    const overlayClasses = "z-40 absolute w-screen h-screen bg-black/20 top-0 left-0"
    const modalContainerClasses = "absolute py-8 flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-600 rounded-md w-[calc(100vw-2rem)] md:w-1/2 max-w-5xl h-fit max-h-5xl"
    return (
        <FocusTrap>
            <div className=''>
                <div className={overlayClasses} onClick={closeModal} />
                <div className={modalContainerClasses}>
                    <button onClick={closeModal} className="mr-6 self-end text-lg cursor-pointer" aria-label="close dialogue" ><HiX /></button>
                    {child}
                </div>
            </div>
        </FocusTrap>
    )
}

export default Modal