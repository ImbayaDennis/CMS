import {useContext, ReactNode} from 'react'
import { ModalContextProvider } from '../../../contexts/ModalsContext'
import Modal from './Modal'

type Props = {
    child: ReactNode;
    modal: "createProject"
}

const ModalContainer = ({child, modal}: Props) => {
    
  const modalContext = useContext(ModalContextProvider)

  let activeModal: {isOpen: boolean};

  modalContext.modals ? activeModal = modalContext?.modals[modal] : activeModal = {isOpen: false}

    const closeModal = () =>{
    if(modalContext.setModals){
      modalContext.setModals((prev)=> ({ ...prev, createProject: {isOpen: false}}))
    }
  }

  if(modalContext?.modals && modalContext?.modals[modal].isOpen){
    return (
      <Modal child={child} isOpen={activeModal.isOpen} closeModal={closeModal} />
    )
  }
  return<></>
}

export default ModalContainer