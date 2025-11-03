import Form from './Form.jsx'
import GetInTouch from './GetInTouch.jsx'

const ContactUs = () => {
  return (
    <>
        <div className="h-[85%] w-[58%] absolute right-[15%] bg-white rounded shadow-lg">
            <div className="bg h-full w-[70%] absolute right-0 px-20 py-25">
                <h1 className="text-3xl text-[#22426b] font-medium">Get in Touch</h1>
                <p className="mt-3 text-[#c7c9cc] font-medium">Feel free to drop us a line below!</p>

                <Form />
            </div>
        </div>

        <GetInTouch />
    </>
  )
}

export default ContactUs