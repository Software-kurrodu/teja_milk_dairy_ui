import React from 'react'
import { locationName, projectName } from '../util/util';
import { body_style, text_green_color } from '../util/styles';
import { UserPlus } from "lucide-react";
import { motion } from 'framer-motion';
import { EmailIcon, GlobeIcon, MapIcon, MobileIcon } from '../util/Icons';
import { Link } from 'react-router-dom';
export function FlashScreen(props) {
    return (
        <div className={`${body_style} ${text_green_color}`}>
          <Header />
            <div className='max-w-5xl mx-auto px-6 pb-20 -mt-4'>
<AboutUs />
   <OurServices />
  <WhyChooseUs />
<VisitInfo />
   
            </div>

        </div>
    );
}
const Header = () => {
    return (
      <div
        className="w-full py-2  px-10 flex sm:flex-col flex-row items-center justify-between
                   sticky top-0 z-50"
      >
        {/* Left Spacer or Logo */}
        <div className="sm:hidden">
            <img src={require('../assets/logo.png')} className='w-[100px] h-[100px]' alt="" />
        </div>
  
        {/* Title */}
        <div className="text-center md:text-left  w-full ">
          <h1 className="text-2xl sm:text-xl sm:text-3xl font-bold text-green-700">
            {projectName}
          </h1>
          <p className="text-sm sm:text-base text-sky-900">
            Your Trusted Source for Quality Milk & Dairy Products
          </p>
        </div>
  
        {/* SignUp Button */}
        <Link
       to={{
        pathname:"/signup",
        hash:"#create new user"
       }}
          title="Click for Create New Account"
          className="mt-3 sm:fixed bottom-5  sm:w-auto flex flex-row gap-2 items-center md:mt-0 text-center md:text-right cursor-pointer 
                     hover:text-sky-900 bg-slate-200 sm:px-12 flex flex-row items-center justify-center px-6 py-1  sm:p-4 rounded-full 
                     hover:scale-105 transition-transform"
        >
         <UserPlus className="bg-slate-200 w-4 h-4" /> <span className='bg-slate-200'>SignUp</span> 
        </Link>
      </div>
    );
  };
  

  const VisitInfo=()=>{
    return(
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 mt-10 space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center">
          📍 Visit Us (or) Partner with Us
        </h2>
        <p className="text-gray-700 text-base md:text-lg text-justify">
          Whether you’re a dairy farmer looking for a reliable buyer or a consumer searching for pure,
          unadulterated dairy products – <span className="font-semibold text-blue-600">Tejaswini Milk Store</span> is here for you.
        </p>
  
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-3">
            <MobileIcon />
            <span><strong>Contact:</strong> +91 7093653705</span>
          </div>
          <div className="flex items-start gap-3">
            <EmailIcon />
            <span><strong>Email:</strong> gaddamsuneel0011@gmail.com</span>
          </div>
          <div className="flex items-start gap-3">
            <MapIcon />
            <span><strong>Location:</strong> Lakshmi Puram (K), Santhavelore, Tirupati-517640</span>
          </div>
          <div className="flex items-start gap-3">
           <GlobeIcon />
            <span><strong>Website:</strong> Optional</span>
          </div>
        </div>
      </motion.div>
    )
  }
  
  const WhyChooseUs=()=>{
    return(
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 mt-10 space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center">
          ✅ Why Choose Us?
        </h2>
        
        <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-2">
          <li>
            <span className="font-semibold text-blue-600">Quality Assurance:</span> Every batch is tested for purity, fat content, and safety.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Cold Chain Logistics:</span> Ensures freshness from farm to table.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Hygienic Processing:</span> FSSAI-compliant infrastructure and handling.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Support to Local Farmers:</span> Ethical sourcing and community development.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Flexible Delivery Options:</span> Daily, weekly, or on-demand schedules.
          </li>
        </ul>
      </motion.div>
    )
  }

  const OurServices=()=>{
    return(
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 mt-10 space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center">
          🐄 Our Services
        </h2>
  
        {/* Milk Collection Center */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            1. Milk Collection Center
          </h3>
          <p className="text-gray-700 mb-2">
            We partner directly with local dairy farmers to ensure a steady supply of fresh milk.
            Our collection center is equipped with modern testing equipment to verify milk quality
            and hygiene standards, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Lactometer testing</li>
            <li>Fat & SNF analysis</li>
            <li>Chilling & storage systems</li>
          </ul>
          <p className="mt-3 font-medium text-blue-600">Benefits to farmers:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Fair and timely payment</li>
            <li>Transparent weighing and testing</li>
            <li>Training in hygienic milking practices</li>
          </ul>
        </div>
  
        {/* Retail & Wholesale Sales */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            2. Retail & Wholesale Sales
          </h3>
          <p className="text-gray-700 mb-2">
            We offer a wide range of dairy products sourced from our own processing unit or trusted partners:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Fresh Cow and Buffalo Milk</li>
            <li>Curd (Yogurt)</li>
            <li>Ghee (Clarified Butter)</li>
            <li>Paneer (Cottage Cheese)</li>
            <li>Butter & Cream</li>
            <li>Flavored Milk & Lassi</li>
            <li>Milk Powders & Condensed Milk</li>
          </ul>
          <p className="mt-3 text-gray-700">
            Options available in <span className="font-medium text-blue-600">bulk or retail packaging</span>.
            Custom supply agreements available for <span className="italic">restaurants, hotels, caterers, and institutions</span>.
          </p>
        </div>
      </motion.div>
    )
  }

  const AboutUs=()=>{
    return(
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 mt-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 text-center">
          🥛 About Us
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
          At <span className="font-semibold text-blue-600">Tejaswini Milk Store</span>, we are
          dedicated to providing fresh, hygienic, and premium-quality milk and dairy products
          to households, retailers, and businesses. Based in <strong className="italic">{locationName}</strong>, we operate as a
          dual-purpose venture – a <span className="font-semibold">Milk Collection Center</span> and a
          <span className="font-semibold"> Retail Dairy Outlet</span>.
        </p>
      </motion.div>
    )
  }