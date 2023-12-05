"use client"
import React, { useState } from 'react'
const CardInfo = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [cvv, setCVV] = useState('');

  return (
    <section className = "flex justify-center items-center h-screen">
        <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-3xl mb-4">Card Information</h2>
      <form className="text-center">
        <div className="mb-4">
          <label className="text-lg block">Card Number:</label>
          <input
            type="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-64 py-2 px-4 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-lg block">Month:</label>
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-64 py-2 px-4 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-lg block">Year:</label>
          <input
            type="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-64 py-2 px-4 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-lg block">CVV:</label>
          <input
            type="cvv"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            className="w-64 py-2 px-4 border rounded"
            required
          />
        </div>
      </form>
    </div>
    </section>
  )
}

export default CardInfo