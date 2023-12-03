import React from 'react'
import { IoMdClose } from 'react-icons/io'

function Popup({ setLoginPopup }) {
  // const {isLoggedIn}=useSelector((state)=>state.user)
  return (
    <div className="w-full min-h-screen flex items-center justify-center  fixed top-0 left-0 bg-[#ffffff12]">
      <div className="rounded-md border-md shadow-sm p-3 border-[3px] min-w-[600px] min-h-[60vh] border-[#333] md:w-[60%] max-w-[800px] dark:bg-black bg-white">
        <div className="flex justify-end">
          <IoMdClose size={20} className='dark:text-white text-black' onClick={()=>setLoginPopup(false)}/>
        </div>
        <p className='text-[20px] dark:text-white text-center '>

        To leave a comment you need to sign in
        </p>
        <button className='py-3 bg-green text-white'>Login</button>



      </div>
    </div>
  )
}

export default Popup