import { useContext, useState } from "react";
import { contactContext } from '../Context/FormContext.jsx'

const Form = () => {

  const { setFormData } = useContext(contactContext)  

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    setFormData({name, email, message})    

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
        <div className="h-full py-10">
            <form 
            onSubmit={(e) => {
              submitHandler(e)
            }}
            className="flex flex-col gap-4">

              {/* NAME INPUT */}
              <input 
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              required
              className="bg-[#f9f9fb] rounded-lg px-8 py-5 outline-none border-none placeholder:text-[#dce0e3]"
              type="text" placeholder="Your Name" />
              
              {/* EMAIL INPUT */}
              <input 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required
              className="bg-[#f9f9fb] rounded-lg px-8 py-5 outline-none border-none placeholder:text-[#dce0e3]"
              type="email" placeholder="Your Email" />

              {/* MESSAGE TEXTAREA */}
              <textarea 
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              required
              className="bg-[#f9f9fb] h-32 rounded-lg px-8 py-5 outline-none border-none placeholder:text-[#dce0e3] resize-none"
              placeholder="Type your message here..."></textarea>

              {/* SEND BUTTON */}
              <button className="shadow-md bg-[#eb3448] cursor-pointer text-[#fde0d9] border-none rounded-full text-xl py-2 mt-4 font-medium w-[40%]">
                SEND
              </button>
            </form>
        </div>
    </>
  )
}

export default Form