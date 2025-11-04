import { useContext } from 'react'
import ContactUs from './components/pages/ContactUs.jsx'
import Response from './components/pages/Response.jsx'
import { contactContext } from './components/Context/FormContext.jsx'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  const { formData } = useContext(contactContext)

  return (
    <>

    <Routes>
      <Route path='/login' element={<div className='flex flex-nowrap items-center justify-center h-screen w-full bg-[#ffe6e9]'>
        { formData === null ? <ContactUs /> : <Response /> }
      </div>} />
    </Routes>
    </>
  )
}

export default App