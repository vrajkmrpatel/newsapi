// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [open, setOpen] = useState(false);


  return (
    <header className="shadow-md p-5 bg-white top-0 left-0 sticky">

      {/*dekstop view*/}
      <div className="mx-2 md:flex md:items-center md:justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-bold">News Hub</Link>


        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
        </div>

        <ul className={`md:flex text-center md:items-center gap-3 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 text-black 
        ${open ? 'top-20 opacity-100' : 'top-[-420px]'} md:opacity-100 `}>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link className='hover:text-indigo-600' to="/">Home</Link></li>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link className='hover:text-indigo-600'  to="/health">Health</Link></li>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link className='hover:text-indigo-600'  to="/business">Business</Link></li>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link className='hover:text-indigo-600'  to="/technology">Technology</Link></li>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link className='hover:text-indigo-600'  to="/entertainment">Entertainment</Link></li>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link className='hover:text-indigo-600'  to="/sports">Sports</Link></li>
          <li className='mx-2 my-3 md:my-0 font-semibold cursor-pointer'>
            <Link className='hover:text-indigo-600'  to="/science">Science</Link></li>
        

        {/*Implement talwind Dark Mode and github link like react websites...*/}
        
          <button className='bg-indigo-600 text-white py-2 px-6 m-2 rounded  hover:bg-indigo-400 duration-500' ><Link to={'https://github.com/vrajkmrpatel/newsapi'}>Github</Link></button>
        </ul>
        </div>
    </header>
  );
};

export default Navbar;
