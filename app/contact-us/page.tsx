"use client";
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      
      // Reset form fields after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Optionally show a success message to the user
      alert('Your message has been sent successfully!');

    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, show an error message to the user
      alert('There was an error submitting your message. Please try again later.');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 w-[30rem]">
      <form onSubmit={handleSubmit} className="w-full p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded outline-none"
          required
        />
        
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded outline-none"
          required
        />
        
        <label className="block mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded outline-none"
          required
        />
        
        <label className="block mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded outline-none"
          required
        />
        
        <Button type="submit" className='w-full'>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactUs;
