import React from 'react'

const Navbar = () => {
  return (
    <div className='p-2 md:p-5 flex flex-col md:flex-row items-center bg-slate-800 text-gray-200 font-sans text-sm md:text-base'>

      <div className='w-2/3 pl-20 text-green-500 text-3xl font-serif '>Entirety</div>

      <div className='w-1/3 flex flex-col md:flex-row pl-2 md:pl-10'>
        <button className='hover:text-green-500'>Home</button>
        <button className='md:ml-8 hover:text-green-500'>Transaction</button>
        <button className='md:ml-8 hover:text-green-500'>Data</button>
        <button className='md:ml-8 hover:text-green-500'>About Us</button>
      </div>
    </div>
  )
}

export default Navbar
