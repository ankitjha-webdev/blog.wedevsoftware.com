import React from 'react'
import { SiVorondesign } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { FaMobile } from "react-icons/fa6";
import { SiWoocommerce } from "react-icons/si";
import { CgSoftwareDownload } from "react-icons/cg";
import { IoDocumentAttachSharp } from "react-icons/io5";
const page = () => {

  return (
    <div>
      <section id="services">
        <div className="container">
          <div className="w-full text-center mb-5">
            <h2 className='font-bold'>Services</h2>
            <p>We provide servies which ample your mind to here everytime</p>
          </div>
          <div className="flex justify-between items-center px-5 py-5 mt-4 mb-4 space-x-1">
            <div className="service-icon">
              <SiVorondesign className='icon' />
              <h3>Desiging</h3>
              <p>Designing is the key to gain more user traffic on to your website which will look to your website
                design in to next step.</p>
            </div>

            <div className="service-icon">
              <MdDeveloperMode className='icon' />
              <h3>Design/Web Development</h3>
              <p>we develop web applications and design websites for our clients at an affordable cost. Developing a web
                application that enhances your online presence.</p>
            </div>
            <div className="service-icon">
              <FaMobile className='icon' />
              <h3>Mobile App</h3>
              <p>We develop mobile application for top-notch services! Access a wide range of trusted service providers
                in various categories.
                Its user-friendly interface offers personalized recommendations, real-time booking, secure payments, and
                service tracking.
                Get seamless customer support and experience the future of service accessibility.</p>
            </div>

          </div>
          <div className="flex justify-between items-center px-5 py-5 mt-4 mb-4 space-x-1">
            <div className="service-info">
              <SiWoocommerce className='icon' />
              <h3>E-Commerce</h3>
              <p>We develop E-Commerce websites & Software which offer a powerful combination of design and technology.
                This comprehensive set of online e-commerce technology is designed to help you make the most of your new
                or existing business.</p>
            </div>
            <div className="service-info">
              <CgSoftwareDownload className='icon' />
              <h3>Software Development</h3>
              <p> we're experts in making advanced software that fits perfectly for different businesses. Our skilled
                team of software developers is here to make your ideas into real applications that make work easier,
                faster, and help your business grow. Whether you need special software to make your inside work smoother
                or want to make it simple for customers to use your services, we're here to help with strong solutions
                that match what you want. We're a mix of technical know-how, creative thinking, and understanding your
                business well. We're here to offer dependable, easy-to-grow software that takes your success further.
              </p>
            </div>
            <div className="service-info">
              <IoDocumentAttachSharp className='icon' />
              <h3>Portfolio</h3>
              <p> we create special portfolios that show off the great things you can do. Our team of experts works
                together to make a portfolio that's just right for you. It doesn't matter if you're an artist,
                photographer, writer, or anything else – we make sure your work looks amazing and gets noticed. We use
                cool designs to turn your work into a really nice online display that people will love. Let us help you
                make a cool portfolio that shows everyone how awesome you are!</p>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default page