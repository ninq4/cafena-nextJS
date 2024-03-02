import React from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import MenuList from './MenuList';
import Container from '../Container/Container';
import { FaBars, FaSearch } from 'react-icons/fa';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400'] });

export default function Header() {
  return (
    <header className={`${montserrat.className} py-11 w-full `}>
      <Container>
        <nav className="w-full flex items-center justify-between gap-x-16">
          <menu className="w-full flex items-center justify-between">
            {MenuList.map((menuItem, pos) => (
              <li key={pos} className="inline-flex">
                {menuItem.image ? (
                  <Link href={menuItem.url} className="text-base text-gray-900 px-32">
                    <img src={menuItem.src} alt="" width={65} height={53} />
                  </Link>
                ) : (
                  <Link
                    href={menuItem.url}
                    className="text-base text-gray-900 hover:text-orange-500 transition-colors duration-200">
                    {menuItem.title}
                  </Link>
                )}
              </li>
            ))}
          </menu>
            <ul className='flex items-center gap-16'>
              <li>
                <button className="">
                  <FaSearch/>
                </button>
              </li>
              <li>
                <button className="">
                  <FaBars />
                </button>
              </li>
            </ul>
        </nav>
      </Container>
    </header>
  );
}
