import {Dispatch, SetStateAction, useContext} from 'react'
import Categories from './Categories'
import { Category } from '@prisma/client'
import { ModalContextProvider } from '../../../contexts/ModalsContext';

type Props = {
  categories: Category[] | undefined;
  activeCategory: Category | null;
  projectId: any
  setActiveCategory: Dispatch<SetStateAction<Category | null>>
  refetchCategories: () => any
}

const CategoriesContainer = ({categories, setActiveCategory, activeCategory, refetchCategories, projectId}: Props) => {

  const {setModals} = useContext(ModalContextProvider)

    const toggleModal = () =>{
    if(setModals){
      setModals((prev)=> ({ ...prev, createCategory: {isOpen: true}}))
    }
  }

  return (
    <Categories categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} toggleModal={toggleModal} refetchCategories={refetchCategories} projectId={projectId} />
  )
}

export default CategoriesContainer