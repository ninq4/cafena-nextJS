"use client";
import Link from 'next/link';
import React from 'react'

export default function Button({ children, href, type }) {
  if (href) {
    return(
        <Link href={href} className={`${type === 'primary' ? "min-w-[70px] text-center px-3 py-2 text-white border border-zinc-900 bg-zinc-900" : 'min-w-[70px] text-center px-3 py-2 text-zinc-900 border border-yellow-500'}`}>{children}</Link>
    );
  }
  return <button className={`${type === 'primary' ? "min-w-[70px] text-center px-3 py-2 text-white border border-zinc-900 bg-zinc-900" : 'min-w-[70px] text-center px-3 py-2 text-zinc-900 border border-yellow-500'}`}>{children}</button>
}