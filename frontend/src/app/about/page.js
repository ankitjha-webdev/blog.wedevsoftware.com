import React from 'react'
import aboutImg from "@/public/picture-136.png"
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <section id="aboutUs">
        <div className="bg-pink-600">
          <div className="flex justify-between">
            <div className="text-center text-white mt-56 mb-10">
              <h2 className='text-white font-bold text-4xl'>Our Company</h2>
              <p>We develop software, websites, portolio, E-Commerce, etc.. </p>
              <p>We have vast experience in developing softtware and websites. If you have any query let's connect to
                discuess about your idea.</p>
            </div>
            <Image src={aboutImg} alt="WedevSoftware" className="w-full h-auto"></Image>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page