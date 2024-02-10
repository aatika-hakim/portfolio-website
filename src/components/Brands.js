import React from 'react';
import { brands } from '../data';

const Brands = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
      <div className='container flex flex-wrap items-center mx-auto md:justify-between justify-evenly'>
        {brands.map((brand, index) => (
          <div key={index} onClick={() => handleClick(brand.url)}>
            <a href={brand.url} target="_blank" rel="noopener noreferrer">
              <img src={brand.img} alt={brand.name} className=' hover:bg-accent'/>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
