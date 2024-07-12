import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {Button, Label, TextInput} from 'flowbite-react'


export default function SignUp() {
  const [formData, setFormData]= useState({});
  const handleChange=(e)=>{
    setFormData({...formData, [e.target.id]:e.target.value});
  };
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      const res= await fetch('/api/auth/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formData),
      });
      const data= await res.json();
      //console.log(data);
    }catch(error){

    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row 
      md:items-center gap-5'>
        {/*leftside*/}
        <div className='flex-1'>
          <Link
          to ='/'
          className='font-bold dark:text-white text-4xl'
          >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Sandali's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign up with your email and password or with Google
          </p>
        </div>
          {/*rightside*/}
          <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div>
                <Label value='Your username'/>
                <TextInput type='text' placeholder='Username' id='username' 
                onChange={handleChange}/>
              </div>
              <div>
                <Label value='Your email'/>
                <TextInput type='email' placeholder='name@company.com' id='email'
                onChange={handleChange}/>
              </div>
              <div>
                <Label value='Your password'/>
                <TextInput type='password' placeholder='Password' id='password'
                onChange={handleChange}/>
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit'> 
                Sign Up
              </Button>
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account?</span>
              <Link to='/sign-in' className='text-blue-500'>
              Sign In
              </Link>
            </div>

          </div>
          </div></div>
  )
}
