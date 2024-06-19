"use client";

import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import asaphite from '../../public/assets/schoollogos/asaphite.png'
import divine from '../../public/assets/schoollogos/divine-model.png'
import funcare from '../../public/assets/schoollogos/funcare.png'

const LogoSchool = () => {
  return (
    <div className="mx-auto mt-7 max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the innovative Schools</h2>
      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          gap: '1rem',
          autoplay: true,
          interval: 10000,
          autoWidth: true,
          autoHeight: true,
          arrows: false,
          pagination: false,
          breakpoints: {
            640: {
              perPage: 2,
            },
            1024: {
              perPage: 3,
            },
          },
          autoScroll: {
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
        className="splide mx-auto mt-10"
      >
        <SplideSlide>
          <Image
            className="max-h-12 w-full object-contain"
            src={funcare}
            alt="Truimphant-Schools"
            width={218}
            height={60}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            className="max-h-12 w-full object-contain"
            src={funcare}
            alt="Funcare-Schools"
            width={218}
            height={60}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            className="max-h-12 w-full object-contain"
            src={divine}
            alt="Divine-Schools"
            width={250}
            height={65}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            className="max-h-12 w-full object-contain"
            src={asaphite}
            alt="Asaphite-Schools"
            width={218}
            height={60}
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default LogoSchool;


