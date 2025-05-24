import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { body_style, headingTitleStyle, text_green_color } from '../../util/styles'
import { InputField } from '../../util/InputField';
import { Axe } from 'lucide-react';
import axios from 'axios';
import { div } from 'framer-motion/client';
import { SubmitButton } from '../../buttons/SubmitButton';
export function SignUp(props) {
    const [formData, setFormData] = useState({
       
        name: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword:"",
        role: ''
      });


      const handleChange = (e) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
        }));
      };

  const payload = {
      fullName:formData.name,
      email: formData.email,
      mobileNumber: formData.mobileNumber,
      password: formData.password,
      roles: formData.role // Modify if needed
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
    try {
      const response = await axios.post('/api/auth/register', payload);
      alert("Registration successful!");
      console.log(response.data);
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Registration failed");
    }
  };

    return (
       <div className="w-screen h-screen grid place-items-center p-1 justify-center items-center">
         <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
                className=" bg-white shadow-2xl flex flex-col gap-6 w-[320px] rounded-2xl p-4 sm:p-1"

        >
        <div>
            <h1 className={`${headingTitleStyle}`}>Sign Up</h1>
        </div>

<form class=" flex flex-col justify-center w-full items-center px-10 py-4 sm:px-2">
<InputField label="Full Name" name="name" type="text" value={formData.name} onChange={handleChange} />
<InputField label="Email address" name="email" type="email" value={formData.email} onChange={handleChange} />
<InputField label="Mobile Number" name="mobileNumber" type="tel" 
  title="Please enter a 10-digit phone number" value={formData.mobileNumber} onChange={handleChange} />
<InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
<InputField label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />

  <SubmitButton />
</form>

        </motion.div>
       </div>
    )
}
