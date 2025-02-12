"use client";
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from './Button';


const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    size: Yup.string().required("Size is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    timeFrame: Yup.string().required("Time Frame is required"),
    quantity: Yup.number()
      .positive("Quantity must be positive")
      .integer("Quantity must be an integer")
      .required("Quantity is required"),
      Description: Yup.string().required("Description is required"),
  });

const Form = () => {
 
    const formik = useFormik({
        initialValues: {
          name: "",
          phone: "",
          size: "",
          email: "",
          timeFrame: "",
          quantity: "",
          Description:""

        },
        validationSchema,
        onSubmit: (values) => {
          console.log("Form Data", values);
          alert("Form Submitted!");
        },
      });
 
 
    return (
    <div>

<p className='font-roboto-condensed font-bold text-4xl text-center'>REQUEST A QUOTE</p>

<form onSubmit={formik.handleSubmit} className='w-full flex-col p-20'>
<div className='flex gap-20  items-center w-full justify-between '>
    <div className='w-full'>
        {/* left */}
        <div className='flex flex-col '>       
             <label>Name</label>
        <input 
        className='border border-[#9F9F9F] rounded-lg p-2 outline-none bg-[#F4F4F4]'
        type="text"
        name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
        />
         {formik.touched.name && formik.errors.name ? (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              ) : null}
        </div>

        <div className='flex flex-col w-full'>     
               <label>Phone Number</label>
        <input 
        className=' border border-[#9F9F9F] rounded-lg p-2 outline-none bg-[#F4F4F4]'
        type="text"
        
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
       {formik.touched.phone && formik.errors.phone ? (
                <p className="text-red-500 text-sm">{formik.errors.phone}</p>
              ) : null}
        </div>
        <div className='flex flex-col w-full'>   
                 <label>Size<span>*</span></label>
        <input 
        className=' border border-[#9F9F9F] rounded-lg p-2 outline-none bg-[#F4F4F4]'
        type="text"
        name="size"
        value={formik.values.size}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
          {formik.touched.size && formik.errors.size ? (
                <p className="text-red-500 text-sm">{formik.errors.size}</p>
              ) : null}
            
        </div>

    </div>
    <div className='w-full'>
        {/* right */}
       
        <div className='flex flex-col w-full'>      
              <label>E-mail</label>
        <input 
        className=' border border-[#9F9F9F] rounded-lg p-2 outline-none bg-[#F4F4F4]'
        type="text"
        name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              ) : null}
        </div>
        <div className='flex flex-col w-full'>     
        <label>Time Frame<span>*</span></label>
        <input 
        className=' border border-[#9F9F9F] rounded-lg p-2 outline-none bg-[#F4F4F4]'
        type="text"
        name="timeFrame"
        value={formik.values.timeFrame}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.timeFrame && formik.errors.timeFrame ? (
        <p className="text-red-500 text-sm">{formik.errors.timeFrame}</p>
      ) : null}
        </div>
        <div className='flex flex-col  
        '>        <label>Quantity<span>*</span></label>
        <input 
        className=' border border-[#9F9F9F] rounded-lg p-2 outline-none bg-[#F4F4F4]'
        type="text" name="quantity"
        value={formik.values.quantity}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.quantity && formik.errors.quantity ? (
        <p className="text-red-500 text-sm">{formik.errors.quantity}</p>
      ) : null}
        </div>
    </div>

</div>
  <div className='flex flex-col  
        '>        <label>Please Describe Your Project<span>*</span></label>
        <textarea 
        className=' border border-[#9F9F9F] h-36 rounded-lg p-2 outline-none bg-[#F4F4F4]'
        name="Description"
        value={formik.values.Description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.Description && formik.errors.Description ? (
        <p className="text-red-500 text-sm">{formik.errors.Description}</p>
      ) : null}
        </div>
      <p className='font-inter font-normal text-[18px] text-center mt-5'>By submitting this form you agree to our Terms of Service and Privacy Policy.</p> 
     {/* <button className='bg-[#1959AC]' type="submit"></button> */}
    <div className='flex items-center justify-center mt-10'>
    <Button text="Loerum Ipsum" width='w-44'/>
    </div>
   
</form>

    </div>
  )
}

export default Form