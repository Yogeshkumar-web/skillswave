import React from 'react'

const Navbar = () => {
  return (
   <div className='w-[1200px] mx-auto'>
     <div className='flex justify-between p-5'>
      <div>
        meauPost
      </div>
      <div>
        <ul className='flex gap-4 cursor-pointer'>
          <li>Sports</li>
          <li>Health</li>
          <li>Politics</li>
        </ul>
      </div>
      <div>
        <button>
          Signin
        </button>
      </div>
      
      
      </div>
   </div>
  )
}

export default Navbar
