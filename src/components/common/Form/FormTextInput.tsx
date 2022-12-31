import React, { ChangeEvent } from 'react'

type Props = {
    id?: string;
    name: string;
    value: string;
    placeholder?: string;
    error?: Record<string, unknown>
    autoFocus?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
}

const FormTextInput = ({id, name, placeholder, value, onChange, autoFocus, error = {}}: Props) => {
  return (
    <input className='form-input' id={id} autoFocus={autoFocus} name={name} placeholder={placeholder} value={value} onChange={onChange} type='text' />
  )
}

export default FormTextInput