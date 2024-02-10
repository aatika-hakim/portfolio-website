import React from 'react';

// import icons
import { social } from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-6 '>
      {social.map((item, index) => {
        return (
          <li
            className='flex items-center justify-center w-10 h-10 p-3 text-xl text-center text-white bg-accent rounded-sm hover:bg-gray-700'
            key={index}
          >
            <a className='text-base' rel="noreferrer noopener" target="_blank" href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;