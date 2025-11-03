import 'remixicon/fonts/remixicon.css'

const GetInTouch = () => {
  return (
    <>
        <div className="absolute bg-[#ed3348] h-[70%] w-[25%] left-[18%] rounded shadow-xl">
            <div className="flex flex-col gap-8 px-18 py-20">
              <h1 className="text-[#fff3e7] text-3xl font-medium">Contact Us</h1>

              <div className="flex flex-nowrap items-center mt-5 text-[#f5c2c3] gap-7 text-lg">
                <i className="ri-map-pin-line text-2xl"></i>
                <h3 className="">32, Avenue ve Newyork 321994 Newyork</h3>
              </div>
              <div className="flex flex-nowrap items-center text-[#f5c2c3] gap-7 text-lg">
                <i className="ri-map-pin-line text-2xl"></i>
                <h3 className="">hello@loremipsum.com</h3>
              </div>
              <div className="flex flex-nowrap items-center text-[#f5c2c3] gap-7 text-lg">
                <i className="ri-map-pin-line text-2xl"></i>
                <h3 className="">+3356 1589 2105</h3>
              </div>
              <div className="flex flex-nowrap items-center text-[#f5c2c3] gap-7 text-lg">
                <i className="ri-map-pin-line text-2xl"></i>
                <h3 className="">+3356 1589 2105</h3>
              </div>
            </div>
        </div>
    </>
  )
}

export default GetInTouch