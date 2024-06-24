import React from 'react'
import MyButton from '../MyButton'

export default function FacilitiesPage() {
  return (
    <>
    <div className='p-9 bg-black text-white w-[100%] px-[100px]'>
       {/* Header   */}
       <div className='text-center'>
          <p className='font-bold '>OVERVIEW OF FACILITIES AND SERVICES</p>
          <hr  className='border border-[#ffd600] w-[10%] h-[5px] rounded-md bg-[#ffd600] mx-[500px] mt-[5px]'/>
       </div>
       {/* Flex container */}
       <div className='flex gap-3 w-[80%] mt-[40px] justify-center'>
        {/* image   */}
        <div className='w-[40%]'>
        <img src="../public/img/hotel img 10.jpeg" alt="No image yet" />
        <br /><br />
        <div className='flex gap-3 justify-center' >
        <p className='border border-white rounded-full w-2 h-2 font-bold bg-[#ffd600]'></p>
        <p className='border border-white rounded-full w-2  font-bold '></p>
        <p className='border border-white rounded-full w-2 font-bold '></p>
        </div>
        </div>
        {/* Text  */}
        <div className='w-[40%]'>
        <p className=''>GET THE FIVE STAR TREATMENT</p>
        <h1 className='mb-6 font-bold'>VALET PARKING</h1>
        <p className='mb-4'>Services includes in-Door swimming ool, Free breakfast, High speed internet, free airport pickups & drop-off, car rental, beachtour, pool lounge, Duplex-style service apartment, maximum security, 24/7 power supply and many more. </p>
        <br />
        <p className=''>Double M exquisite suites and Lounge is a Budget Hotel in Lekki, Lagos</p>
        <br /><br />
        {/* <button className='bg-[#ffd600] text-black py-[5px] px-[10px] text-sm rounded hover:bg-[white] hover:text-[black]'>READ MORE</button> */}
        <div className=''>
        <MyButton 
        text='Read me' 
        // width='w-[100%]'
        />
        </div>
        
        </div>
       </div>
       
    </div>
    </>
  )
}
