import { createContext, useState } from "react"

export const contactContext = createContext(null)

const FormContext = ({ children }) => {

    const [formData, setFormData] = useState(null)

  return (
    <>
      <contactContext.Provider value={{ formData, setFormData }}>
          { children }
      </contactContext.Provider>
    </>
  )
}

export default FormContext