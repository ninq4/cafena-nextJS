import React from 'react';
import Container from '../Container/Container';
import { ZCOOL_XiaoWei } from 'next/font/google';
import Button from '../Button/Button';
import Image from 'next/image';

const zcoolXiaoWei = ZCOOL_XiaoWei({ subsets: ['latin'], weight: ['400'] });

export default function Hero() {
  const heroList = [
    {
      title: 'Explore More',
      type: 'primary',
    },
    {
      title: 'Read More',
      url: '/',
      type: 'outline',
    },
  ];
  return (
    <section className="w-full py-20">
      <Container>
        <div className="flex items-start translate-y-1">

        <div className="w-[60%]">
          <div className="">
            <h1 className={`${zcoolXiaoWei.className},  text-5xl leading-[70px]  uppercase`}>
              ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN
            </h1>
            <p className="text-base text-left mt-8 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod veniam, quis
              nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <ul className="flex items-center gap-[6px]">
            <li className="inline-flex">
              <Button type="primary">Explore More</Button>
            </li>
            <li className="inline-flex">
              <Button type="outline">Read More</Button>
            </li>
          </ul>
        </div>
        <Image src='/hero-bg.png' width={700} height={700} alt='Кофейные зерна'/>
        </div>
      </Container>
    </section>
  );
}
