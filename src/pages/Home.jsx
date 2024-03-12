// Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import FetchData from '../components/FetchData';



const Home = () => {
  return (

    <div className='bg-slate-100'>
      <Hero />
      <FetchData />
    </div>
  );
};

export default Home;
