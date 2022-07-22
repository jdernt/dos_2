import React from 'react';
import Link from 'next/link';
import Menu from '@configs/menu.json';

function Header() {
  return (
    <header className='bg-cgrey'>
      <div className='container'>
        <nav>
          <ul className='flex justify-evenly text-cgreytextlight'>
            {Menu.map((item, index) => (
              <Link key={index} href={item.href}>
                <li className='py-6 border border-solid border-transparent border-b-4 hover:border-b-cgreytextlight cursor-pointer'>
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;