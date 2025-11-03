import { useContext } from "react"
import { contactContext } from "../Context/FormContext.jsx"


const Response = () => {

  const { formData } = useContext(contactContext)

  return (
    <>
        <div className='flex flex-col items-center justify-center rounded gap-10 h-[40%] w-[40%] bg-white shadow-lg'>
            <h1 className='text-3xl text-center text-[#22426b] font-medium'>Thanks for Submitting the Form <br /> {formData.name}!</h1>
            
            <h1 className='text-2xl text-[#929292]'>We will be in touch with you soon...</h1>
        </div>
    </>
  )
}

export default Response