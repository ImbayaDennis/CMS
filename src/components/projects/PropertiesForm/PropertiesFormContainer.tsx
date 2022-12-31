import React from 'react'
import PropertiesForm from './PropertiesForm'

type Props = Record<string, unknown>

const PropertiesFormContainer = (props: Props) => {
  return (
    <PropertiesForm />
  )
}

export default PropertiesFormContainer