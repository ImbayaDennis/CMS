import {useContext, ReactNode} from 'react'
import { ModalContextProvider } from '../../../contexts/ModalsContext'
import Modal from './Modal'

type Props = {
    child: ReactNode;
    modal: "createProject"
}

const ModalContainer = ({child, modal}: Props) => {
    
  const modalContext = useContext(ModalContextProvider)

  const closeModal = () =>{
    if(modalContext.setModals){
      modalContext.setModals((prev)=> ({ ...prev, createProject: {isOpen: false}}))
    }
  }

  addEventListener('keydown', (e)=>{
   if(e.code === "Escape"){
    closeModal()
   }
  })

  if(modalContext?.modals && modalContext?.modals[modal].isOpen){
    return (
      <Modal child={child} closeModal={closeModal} />
    )
  }
  return<></>
}

export default ModalContainer