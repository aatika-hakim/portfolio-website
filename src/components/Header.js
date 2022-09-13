import React, { useEffect, useState } from 'react';
import Logo from '../assets/img/logo.svg';
import Nav from '../components/Nav';
// import NavMobile form '../components/NavMobile'

const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',()=>{
           return window.scrollY > 50 ? setBg(true): setBg(false);
        });
    });
    
  return (
    <header className={`${bg ? 'bg-tertiary h-20': 'h-24'} flex items-center w-full 
    fixed top-0 text-white z-10 transition-all duration-300`}>

        <div className='container mx-auto h-full flex
        items-center justify-between'>

            {/* logo */}
        <a href='#'>
            <img src={Logo} alt="logo" />
        </a>

        {/* nav */}
        <div className='hidden lg:block'>
            <Nav />
        </div>
        </div>
    </header>
  );
}

export default Header;
