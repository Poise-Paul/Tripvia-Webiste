import React from 'react'
import img4 from "../public/image 4.png"
import img5 from "../public/image 5.png"
import img6 from "../public/Group 9.png"
import Image from 'next/image'

const whyArray = [
    {
        img: img4,
        heading: "Transparent pricing with no surprises",
        text: "Clear costs upfront—no hidden fees, no last-minute charges."
    },
    {
        img: img5,
        heading: "Instant Confirmations That Build Trust",
        text: "Bookings confirmed instantly for peace of mind and reliability."
    },
    {
        img: img6,
        heading: "A User-First Experience That Adapts to Every Traveler",
        text: "Smart, intuitive design tailored to every type of traveler."
    },
]

function WhyBuiid() {
  return (
    <section className='px-8 bg-white mt-6 py-6'>
      <h1 className='text-center text-3xl capitalize md:text-4xl text-black font-semibold
      '>Why We&#x27;re building <span className='text-[#E85D04]'>tripvia</span></h1>
      <p className='mt-2 text-black text-center w-full md:w-[600px] mx-auto text-sm'>
        <span className='text-[#E85D04 ]'>Tripvia</span> is designed to be the flight booking platform travelers actually want—fast, secure, 
and built for real-world needs. In a market flooded with outdated tools and overly niche apps, 
Tripvia stands out by offering:
      </p>

      <div className='my-10 flex flex-col md:flex-row flex-wrap justify-around
       gap-4'>
         {whyArray.map((sec, index) => (
            <div key={index} className='flex flex-col gap-2.5
             justify-center text-center items-center w-full md:w-[350px]'>
               <Image src={sec.img} alt='' className='w-[80%]' />
               <h1 className='text-xl font-semibold text-black'>{sec.heading}</h1>
               <p className='text-black font-400 text-[15px]'>{sec.text}</p>
            </div> 
         ))}
      </div>
      <div className='text-center mt-5'>
         <button className="bg-[#E85D04]
           text-white px-6 py-2 mx-auto text-sm rounded-[25px] shadow-md">
            Join Us Today
          </button>
      </div>
    </section>
  )
}

export default WhyBuiid
