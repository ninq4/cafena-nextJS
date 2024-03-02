'use client';
import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
export default function UpButton() {
  const ScreenUp = () => {
    window.top?.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('окей');
  };

  return (
    <button
      onClick={ScreenUp}
      title="UP"
      className="text-orange-300 rounded-full w-14 h-14 border-solid border-2 border-orange-400 flex items-center justify-center bg-white absolute left-[50%] translate-y-4">
      <FaChevronUp />
    </button>
  );
}
