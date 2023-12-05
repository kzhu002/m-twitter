"use client"
import React, { useState } from 'react'

const PersonalInfo = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <section className = "flex justify-center items-center h-screen">
        <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-3xl mb-4">Personal Information</h2>
      <form className="text-center">
      <div className="mb-4">
          <label className="text-lg block">Name:</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-64 py-2 px-4 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-lg block">Country:</label>
          <input
            type="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-64 py-2 px-4 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-lg block">City:</label>
          <input
            type="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-64 py-2 px-4 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-lg block">Zip:</label>
          <input
            type="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-64 py-2 px-4 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-lg block">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 py-2 px-4 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-lg block">Phone Number:</label>
          <input
            type="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-64 py-2 px-4 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-teal font-bold py-2 px-4 rounded">
          Pay
        </button>
      </form>
    </div>
    </section>
  )
}

export default PersonalInfo