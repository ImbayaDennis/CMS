import React, { FormEvent } from 'react'
import FormTextInput from '../common/FormTextInput'

type Props = {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    errors?: {}
}

const ProjectForm = ({handleSubmit, name, value, onChange}: Props) => {
  return (
    <form onSubmit={handleSubmit} className="p-2 flex flex-col items-center space-y-4" >
      <legend className="text-3xl font-light px-4">Create new project</legend>
      <FormTextInput name={name} value={value} onChange={onChange} error />
      <button type="submit" className="btn-1">Create</button>
    </form>
  )
}

export default ProjectForm