import {useState, useContext, ChangeEvent, FormEvent} from 'react'
import CategoriesForm from './CategoriesForm'
import { ModalContextProvider } from '../../../contexts/ModalsContext'
import { createCategory } from '../../../utils/apiFunctions'
import { Project } from '@prisma/client'

type Props = {
    projectId: any
    refetchCategories: () => any;
}

const CategoriesFormContainer = ({projectId, refetchCategories}: Props) => {
  const [categoryName, setCategoryNme] = useState<string>("")
  const {setModals} = useContext(ModalContextProvider)
  
  const newCategory = createCategory()
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setCategoryNme(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(projectId){
      newCategory.mutateAsync({name: categoryName, projectId: projectId}).then(()=> refetchCategories())
      
    }
    setCategoryNme("")
    setModals ? setModals(prev=>({...prev, createCategory: {isOpen: false}})) : null
  }
  return (
    <CategoriesForm onChange={handleChange} handleSubmit={handleSubmit} name="categoryName" value={categoryName} />
  )
}

export default CategoriesFormContainer