"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '../../../components/Layout';
import CardInfo from '../../../components/CardInfo';
import PersonalInfo from '../../../components/PersonalInfo';

const Payment = () => {
  return (
    <Layout>
    <CardInfo />
    <PersonalInfo />
    </Layout>
    
  );
};

export default Payment