import React from 'react'
import contactImg from "@/public/banner-bg.jpg"
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <section>
        <div className="w-full">
          <Image src={contactImg} alt="WedevSoftware" className="background-image"></Image>
          </div>
        <div className="text-center text-white">
          <h2>Contact Us</h2>
          <p>Let's connet to disscuess your thoughts to reality.</p>
          <p><b>wedevsoftware2023@gmail.com</b></p>
        </div>
        <div className="w-full mt-10 items-center">
          <form method="POST" action="contactengine.php" onSubmit="alert('Thank you for your feedback!');" className='text-center'>
            <div className="">
              <div className="form-group">
                <input type="text" name="Name" id="Name" className="form-control px-24 mb-4" placeholder="Name"
                  required />
              </div>
              <div className="form-group">
                <input type="text" name="Email" id="Email" className="form-control px-24 mb-4" placeholder="Email"
                  required />
              </div>
              <div className="form-group">
                <textarea name="Message" rows="5" cols="22" id="Message"
                  className="form-control input-message px-24 mb-4" placeholder="Message" required></textarea>
              </div>
              <div className="form-group text-center">
                <input type="submit" name="submit" value="Submit" className="text-white bg-green-600 text-2xl rounded-md" />
              </div>
            </div>
          </form>
        </div>
      </section >
    </div>
  )
}

export default page