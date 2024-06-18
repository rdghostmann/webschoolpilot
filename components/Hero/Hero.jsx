import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InstitutionImg from '../../public/Institution.png'
import graduantImg from '../../public/photo-1462536943532-57a629f6cc60-1080X718.jpg'


const Hero = () => {
  return (
    <>
      <section id="hero" className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}></div>
          </div>

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding. <Link href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></Link>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">Data to enrich your online business</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/onboarding" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</Link>
                <Link href="/onboarding" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}></div>
          </div>
        </div>
      </section>
      
      <section className="w-full max-w-7xl mx-auto ">

        <section id="#hero" className="flex flex-col-reverse items-center justify-center sm:flex-row p-6 gap-8 mb-12 ">

          <article className="sm:w-1/2 px-8 md:px-4 ">
            <h2 className="max-w-md text-3xl md:text-3xl  mb-4 font-extrabold sm:text-left text-slate-900 dark:text-white">Efficient School<br className="hidden md:block " /> Management Software<span className="text-3xl text-indigo-700 dark:text-indigo-300">.</span></h2>
            {/* <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">Manage <span className="dark:text-indigo-300">Schools</span>  Efficiently with SchoolPilot.</h2> */}

            <p className="max-w-md my-4 sm:text-left text-slate-700 dark:text-slate-400">Simplify school operations, record results, <br className="block sm:hidden md:hidden" /> and manage payments effortlessly with  our Educational Management Software.</p>
            {/* <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">Organize and manage your educational curriculum with SchoolPilot. Managing an institution requires efficient management of time, which in turn enhances productivity.</p> */}

          </article>

          <article className="sm:w-1/2 px-6">
            <Image className="w- h-auto block rounded-lg" src={graduantImg} width={1080} height={718} alt='graduant-happy-img' priority />

          </article>



        </section>

        {/* <hr className="mx-auto border border-black dark:border-white w-1/2" /> */}
        <section id="#hero" className="flex flex-col-reverse items-center justify-center sm:flex-row-reverse p-6 gap-8 mb-12 ">

          <article className="sm:w-1/2 px-8 ">
            <h2 className="max-w-md text-3xl md:text-3xl mb-4 font-extrabold sm:text-left text-slate-900 dark:text-white">Efficient School<br className="block" /> Management Software<span className="text-3xl text-indigo-700 dark:text-indigo-300">.</span></h2>
            {/* <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">Manage <span className="dark:text-indigo-300">Schools</span>  Efficiently with SchoolPilot.</h2> */}

            <p className="max-w-md my-4 sm:text-left text-slate-700 dark:text-slate-400">Simplify school operations, record results, <br className="block sm:hidden md:hidden" /> and manage payments effortlessly with  our Educational Management Software.</p>
            {/* <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">Organize and manage your educational curriculum with SchoolPilot. Managing an institution requires efficient management of time, which in turn enhances productivity.</p> */}

          </article>

          <article className="sm:w-1/2 px-6">
            <Image className="w- h-auto block rounded-lg" src={graduantImg} width={1080} height={718} alt='graduant-happy-img' priority />

          </article>



        </section>

        {/* <hr className="mx-auto border border-black dark:border-white w-1/2" /> */}


      </section>

  




    </>


  )
}

export default Hero