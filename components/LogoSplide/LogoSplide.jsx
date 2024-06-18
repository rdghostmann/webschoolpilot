"use client";

import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

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
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            className="max-h-12 w-full object-contain"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width={158}
            height={48}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            className="max-h-12 w-full object-contain"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            className="max-h-12 w-full object-contain"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            className="max-h-12 w-full object-contain"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default LogoSchool;



// "use client";
// import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Splide from '@splidejs/splide';
// import '@splidejs/splide/dist/css/splide.min.css';
// import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';

// const LogoSchool = () => {
//   const splideRef = useRef(null);

//   useEffect(() => {
//     if (splideRef.current) {
//       new Splide(splideRef.current, {
//         type       : 'loop',
//         perPage    : 3,
//         perMove    : 1,
//         gap        : '1rem',
//         autoplay   : true,
//         interval   : 10000,
//         autoWidth  : true,
//         autoHeight : true,
//         breakpoints: {
//           640: {
//             perPage: 2,
//           },
//           1024: {
//             perPage: 3,
//           },
//         },
//         autoScroll: {
//           speed: 1,
//         },
//       }).mount({ AutoScroll });
//     }
//   }, []);

//   return (
//     <div className="mx-auto mt-7 max-w-7xl px-6 lg:px-8">
//       <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the innovative Schools</h2>
//       <div ref={splideRef} className="splide mx-auto mt-10">
//         <div className="splide__track">
//           <ul className="splide__list">
//             <li className="splide__slide">
//               <Image className="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width={158} height={48} />
//             </li>
//             <li className="splide__slide">
//               <Image className="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width={158} height={48} />
//             </li>
//             <li className="splide__slide">
//               <Image className="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width={158} height={48} />
//             </li>
//             <li className="splide__slide">
//               <Image className="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width={158} height={48} />
//             </li>
//             <li className="splide__slide">
//               <Image className="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width={158} height={48} />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogoSchool;
