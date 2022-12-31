import React, { FormEvent } from 'react'
import FormTextInput from '../../common/Form/FormTextInput'
import Loader from '../../common/Loader';

type Props = {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isLoading?: boolean
    errors?: Record<string, unknown>
}

const ProjectForm = ({handleSubmit, name, value, onChange, isLoading = false}: Props) => {
  return (
    <form onSubmit={handleSubmit} className="p-2 flex flex-col items-center space-y-4" >
      <legend className="text-3xl font-light px-4">Create new project</legend>
      <FormTextInput name={name} autoFocus value={value} onChange={onChange} />
      <button  type="submit" className="btn-1">
        {isLoading ? <Loader/> : "Create"}
      </button>
    </form>
  )
}

export default ProjectForm