import React from 'react'
import 'primeicons/primeicons.css';
import MyButton from '../component/MyButton'
        

export default function ContactUs() {
  return (
    <>
       {/* Header name */}
    <div className='my-[140px] border '>
       <p className='text-center font-bold text-[blue] text-[3rem]'>Contact Us</p>
    </div>
        {/* Info container */}
        <div className='flex w-[100%] border border-[blue]'> 
            {/* first Info  */}
        <div className=' w-[50%]'>
       <div className='bg-[#ffd600] h-[100vh] text-center py-[20px] px-[60px] text-sm font-semibold'>
            <p className=' font-bold underline mb-4 text-xl pt-[30px]'>Get in touch</p>
            <p className='mb-4'>We Are Also Active In Social Media. You Can Find Us <br /> On Below Address</p>
            {/* first icon */}
            <div className='mb-4'>
                <i className='pi pi-map-marker mb-2 ' style={{ fontSize: '1.4rem'}}></i>
                <p>No 21.Favors,Bodija, <br />Ibadan,Nigeria.</p>
            </div>
            {/* second icon */}
            <div className='mb-7'>
                <i className='pi pi-clock font-bold mb-2' style={{ fontSize: '1.4rem'}}></i>
                <p>Opening Hour 8:00AM-10:00PM<br />Monday-Sunday</p>
            </div>
            {/* third */}
            <div className='mb-[40px]'>
                <p>Call. +2448101725687</p>
                <p>Email.sanyaoluboluwatife9@gmail.com</p>
                {/* container icons */}
                <div className='mt-4'>
                    <i className='pi pi-facebook px-2'></i>
                    <i className='pi pi-youtube px-2'></i>
                    <i className='pi pi-google px-2'></i>
                    <i className='pi pi-linkedin px-2'></i>
                    <i className='pi pi-twitter px-2'></i>
                </div>
            </div>
       </div>
        </div>

        {/* second Info */}
        <div className=' bg-black text-white text-xs  px-[60px] w-[50%]'>
            <p className='font-bold underline mb-4 text-xl pt-[30px] text-center'>Send a message</p>
            <i className=''></i>
            <p className=' text-center'>
                Do You Have Anything In Your Mind To Tell Us? Please Don't Hesitate To Get In Touch To Us Via Contact Form.
            </p>
            <form>
                {/* Names form container */}
                <div className=' flex gap-6 mt-6'>
                    <div className='w-[100%]'>
                    <p className='mb-3'>First Name</p>
                    <input type="text" placeholder='' className='bg-white h-6 text-black w-[100%]' />
                    </div>
                <div className='w-[100%]'>
                <p className='mb-3'>Last Name</p>
                <input type="text" placeholder='' className='bg-white h-6 text-black w-[100%]' />
                </div>
                
                </div>
                {/* email  */}
                <div className='mt-4'>
                <p className='mb-3'>Email</p>
                <input type="text" placeholder='' className='bg-white w-[100%] h-6 text-black' />
                </div>
                {/* message  */}
                <div className='mt-4'>
                <p className='mb-3'>Message</p>
                <input type="text" placeholder='' className='bg-white w-[100%] h-[20vh] text-black' />
                </div>
               {/* Button Link */}
               <div className='mt-[20px]' > 
                <MyButton 
                text='Submit'
                width='w-[100%]'
                />
               </div>
            </form>
        </div>
        </div>
    
     
    </>
  )
}
