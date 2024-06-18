import React from 'react';
import spinner from '../public/barspinner.gif';
import Image from 'next/image';


export default function Loading() {
    return (
    <main className="container flex items-center justify-center bg-white max-h-screen">
      <div className="w-full h-screen flex items-center justify-center mx-auto">
        <Image className="" src={spinner} size="100vw" width="200px" heigth="200px" priority />
      </div>     
    </main>
    
    )
  }