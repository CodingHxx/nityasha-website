"use client";
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

function Page() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [name, setName] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // New state variable

    const handleSubmit = async () => {
        const payload = {
            name,
            fullName,
            email,
            password,
            mobileNumber,
        };

        try {
            const response = await fetch('/api/partner-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert('Registration successful');
                setIsSubmitted(true); // Set submitted state to true
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during registration');
        }
    };

    return (
        <div className='flex flex-col p-[8em] items-center h-screen w-full text-white z-[1000] relative'>
            <title>
                Nityasha | Partner Registration
            </title>
            {isSubmitted ? ( // Conditional rendering
                <h1 className='font-[Poppins] text-[3em] font-medium leading-[1em]'>Done</h1>
            ) : (
                <>
                    <h1 className='font-[Poppins] text-[3em] font-medium leading-[1em]'>Partner Registration</h1>
                    <div className='flex items-center justify-center flex-col mt-10'>
                        {/* Name Input */}
                        <div className='flex flex-col'>
                            <label htmlFor="Name" className='mb-2 pl-1'>Username</label>
                            <div className='flex items-center justify-center w-[20rem] border-2 rounded-lg h-10 px-2'>
                                <input 
                                    className='bg-transparent w-full h-full outline-none' 
                                    type="Username" 
                                    placeholder='Name' 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                />
                            </div>
                        </div>

                        {/* Full Name Input */}
                        <div className='flex flex-col mt-5'>
                            <label htmlFor="Full Name" className='mb-2 pl-1'>Full Name</label>
                            <div className='flex items-center justify-center w-[20rem] border-2 rounded-lg h-10 px-2'>
                                <input 
                                    className='bg-transparent w-full h-full outline-none' 
                                    type="text" 
                                    placeholder='Full Name' 
                                    value={fullName} 
                                    onChange={(e) => setFullName(e.target.value)} 
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className='flex flex-col mt-5'>
                            <label htmlFor="Email" className='mb-2 pl-1'>Email</label>
                            <div className='flex items-center justify-center w-[20rem] border-2 rounded-lg h-10 px-2'>
                                <input 
                                    className='bg-transparent w-full h-full outline-none' 
                                    type="email" 
                                    placeholder='Email' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className='flex flex-col mt-5'>
                            <label htmlFor="Password" className='mb-2 pl-1'>Password</label>
                            <div className='flex items-center justify-center w-[20rem] border-2 rounded-lg h-10 px-2'>
                                <input 
                                    className='bg-transparent w-full h-full outline-none' 
                                    type="password" 
                                    placeholder='Password' 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                        </div>

                        {/* Mobile Number Input */}
                        <div className='flex flex-col mt-5'>
                            <label htmlFor="Mobile" className='mb-2 pl-1'>Mobile Number</label>
                            <div className='flex items-center justify-center w-[20rem] border-2 rounded-lg h-10 px-2'>
                                <input 
                                    className='bg-transparent w-full h-full outline-none' 
                                    type="text" 
                                    maxLength={10} 
                                    placeholder='Mobile Number' 
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                />
                            </div>
                        </div>
                        <Button onClick={handleSubmit} className='w-full mt-5'>Submit</Button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Page;
