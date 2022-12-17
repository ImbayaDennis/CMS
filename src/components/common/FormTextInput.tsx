import React, { ChangeEvent } from 'react'

type Props = {
    name: string;
    value: string;
    placeholder?: string;
    error?: {}
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
}

const FormTextInput = ({name, placeholder, value, onChange, error = {}}: Props) => {
  return (
    <input className='form-input' autoFocus name={name} placeholder={placeholder} value={value} onChange={onChange} type='text' />
  )
}

export default FormTextInput