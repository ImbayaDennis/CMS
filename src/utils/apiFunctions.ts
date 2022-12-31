import { trpc } from "./trpc"

// Get entry
export const getProjects = () =>{
    return trpc.projects.getProjects.useQuery()
}

export const getProject = (projectId: any) =>{
    return trpc.projects.getProject.useQuery({projectId})
}

export const getCategories = ({projectId}: any) =>{
    return trpc.categories.getCategories.useQuery({projectId})
}

// export const getCategory = (categoryId: string) =>{}

export const getFields = (categoryId: string | null) =>{
    return trpc.fields.getFields.useQuery({categoryId})
}

// export const getField = (fieldId: string) =>{}

// Create new entry
export const createProject = () =>{
   return trpc.projects.createProject.useMutation()
}

export const createCategory = () =>{
    return trpc.categories.createCategory.useMutation()
}

export const createField = () =>{
    return trpc.fields.createField.useMutation()
}

// Modify entry
// export const updateProject = (projectId: string) =>{}

// export const updateCategory = (categoryId: string) =>{}

// export const updateField = (fieldId: string) =>{}

// Delete entry
// export const deleteProject = (projectId: string) =>{}

// export const deleteCategory = (categoryId: string) =>{}

// export const deleteField = (fieldId: string) =>{}