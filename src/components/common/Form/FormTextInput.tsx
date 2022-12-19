import React, { ChangeEvent } from 'react'

type Props = {
    name: string;
    value: string;
    placeholder?: string;
    error?: {}
    autoFocus?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
}

const FormTextInput = ({name, placeholder, value, onChange, autoFocus, error = {}}: Props) => {
  return (
    <input className='form-input' autoFocus={autoFocus} name={name} placeholder={placeholder} value={value} onChange={onChange} type='text' />
  )
}

export default FormTextInput