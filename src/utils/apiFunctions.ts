import { trpc } from "./trpc"

// Get entry
export const getProjects = (id: {userId?: string, connectedProjectId?: string}) =>{
    return trpc.projects.getProjects.useQuery(id)
}

export const getProject = (projectId: string) =>{}

export const getCategories = (projectId: string) =>{}

export const getCategory = (categoryId: string) =>{}

export const getFields = (categoryId: string) =>{}

export const getField = (fieldId: string) =>{}

// Create new entry
export const createProject = (userId: string) =>{}

export const createCategory = (projectId: string) =>{}

export const createField = (categoryId: string) =>{}

// Modify entry
export const updateProject = (projectId: string) =>{}

export const updateCategory = (categoryId: string) =>{}

export const updateField = (fieldId: string) =>{}

// Delete entry
export const deleteProject = (projectId: string) =>{}

export const deleteCategory = (categoryId: string) =>{}

export const deleteField = (fieldId: string) =>{}