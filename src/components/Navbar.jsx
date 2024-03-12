// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" bg-gray-800 p-4 text-white">

      {/*dekstop view*/}
      <div className="mx-2 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">News Hub</Link>


        <ul className='hidden md:flex gap-3'>
          <li className='px-2 font-semibold cursor-pointer'>
            <Link to="/">Home</Link></li>
          <li className='px-2 font-semibold cursor-pointer'>
            <Link to="/health">Health</Link></li>
          <li className='px-2 font-semibold cursor-pointer'>
            <Link to="/business">Business</Link></li>
          <li className='px-2 font-semibold cursor-pointer'>
            <Link to="/technology">Technology</Link></li>
          <li className='px-2 font-semibold cursor-pointer'>
            <Link to="/entertainment">Entertainment</Link></li>
          <li className='px-2 font-semibold cursor-pointer'>
            <Link to="/sports">Sports</Link></li>
          <li className='px-2 font-semibold cursor-pointer'>
            <Link to="/science">Science</Link></li>
        </ul>

        {/*Implement talwind Dark Mode and github link like react websites...*/}
        <button><Link to={'https://github.com/vrajkmrpatel/newsapi'}>Github</Link></button>
      </div>



      {/*dekstop view*/}

      <div>

      </div>
    </nav>
  );
};

export default Navbar;
