import Image from 'next/image'
import React from 'react'
import illustrationImg from '../../public/assets/img/illustration-img-1024X768.png'
import hostessImg from '../../public/assets/img/pexels-pixabay-415829.jpg'

const Header = () => {
  return (
    <header className="header max-w-7xl mx-auto ">

      <div id="#hero" className="md:pt-8 flex flex-col-reverse items-center justify-center sm:flex-row gap-4 mb-12 ">

        <article className="w-full px-4 sm:w-1/2   ">
          <h2 className="mx-auto text-left text-3xl mb-4 font-extrabold sm:text-slate-900 dark:text-white">Manage Efficiently <span className=" dark:text-indigo-300">Academic Curriculum</span> with SchoolPilot.</h2>

          <p className=" max-w-md mx-auto text-left sm:text-center md:mx-0 md:text-left lg:text-left text-lg my-4 sm:text-slate-700 dark:text-slate-400">Simplify school operations, record results, <br className="hidden sm:hidden" /> and manage payments effortlessly with  our Educational Management Software.</p>

          <button className="py-2 text-lg px-3 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-md text-white hover:bg-opacity-85" type="button">Learn More</button>

          <div className="block ">

            <div className="my-5">
              ⭐⭐⭐⭐⭐ | Efficient | User-friendly
            </div>

            <span> “Simplified our school management tasks.” </span>

            <div className="flex items-center mt-2">
              <Image className="block w-10 h-10 border-2 border-amber-500 object-center object-cover rounded-full" src={hostessImg} width={818} height={579} alt="mulatto-hispanic-black-african-american-young" priority />
              <b className="ms-3">Florence Nduka</b>
            </div>
          </div>
        </article>

        <article className="w-full sm:w-1/2  ">
          <Image className="sm:w-full" sizes='100vw' src={illustrationImg} width={1024} height={768} alt="illustration-art-of-people" priority />
  
        </article>

      </div>

      <hr className="mx-auto border border-black dark:border-white w-1/2" />

    </header>





  )
}

export default Header