// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className=" bg-gray-800 p-5 text-white">

      {/*dekstop view*/}
      <div className="mx-2 md:flex md:items-center md:justify-between">
        <Link to="/" className="text-xl md:text-2xl font-bold">News Hub</Link>


        <ul className='md:flex md:items-center gap-3'>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link to="/">Home</Link></li>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link to="/health">Health</Link></li>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link to="/business">Business</Link></li>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link to="/technology">Technology</Link></li>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link to="/entertainment">Entertainment</Link></li>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link to="/sports">Sports</Link></li>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link to="/science">Science</Link></li>
        </ul>

        {/*Implement talwind Dark Mode and github link like react websites...*/}
        <button className='text-white'><Link to={'https://github.com/vrajkmrpatel/newsapi'}>Github</Link></button>
      </div>
    </header>
  );
};

export default Navbar;
