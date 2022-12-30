import { Category } from '@prisma/client'
import {Dispatch, SetStateAction} from 'react'
import { HiPlus } from 'react-icons/hi';
import ModalContainer from '../../common/Modal/ModalContainer';
import CategoriesFormContainer from '../CategoriesForm/CategoriesFormContainer';

type Props = {
  categories: Category[] | undefined;
  activeCategory: Category | null;
  setActiveCategory: Dispatch<SetStateAction<Category | null>>
  refetchCategories: () => any;
  projectId: any;
  toggleModal: () => void
}

const Categories = ({categories, setActiveCategory, activeCategory, toggleModal, refetchCategories, projectId}: Props) => {
  return (
    <div className='w-full h-full relative flex flex-col items-start sm:max-h-[calc(100vh-14rem)] max-h-[calc(50vh-8rem)]  m-2 p-2 rounded-md border dark:border-gray-700 scrollbar- overflow-y-scroll scrollbar-thin'>
      <h3 className='text-2xl w-full text-center my-4'>Categories</h3>
      {categories?.map(category => (
        <button key={category.id} className={`w-full flex justify-center p-4 sm:justify-start rounded-md hover:dark:bg-gray-700 hover:bg-gray-300 ${category.name === activeCategory?.name ? "bg-gray-300 dark:bg-gray-700": ""}`} onClick={()=>{setActiveCategory(category)}}>{category.name}</button>
      ))}
    <button onClick={toggleModal} className='btn-1 sm:absolute sm:bottom-2 my-2 flex self-center items-center justify-center w-1/3 max-w-xs'><HiPlus/></button>
    <ModalContainer child={<CategoriesFormContainer projectId={projectId} refetchCategories={refetchCategories}/>} modal="createCategory" />
    </div>
  )
}

export default Categories