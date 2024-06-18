import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import img1 from '/photo-1462536943532-57a629f6cc60-1080X718.jpg'
import img2 from '/photo-1488722796624-0aa6f1bb6399.jpg'
import img3 from '/photo-1574097656146-0b43b7660cb6.jpg'

import img4 from '/photo-1551887373-6edba6dacbb1.jpg'
import img5 from '/photo-1523240795612-9a054b0db644.jpg'
import img6 from '/photo-1485546246426-74dc88dec4d9.jpg'

import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'



const page = () => {
  return (
    <>
      <Navbar />
      <section id="software-hero" className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}></div>
          </div>

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">



            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Streamline School Management with SchoolPilot</h1>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p> */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</Link>
                <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></Link>
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

      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Efficient School Management Software<span className="text-primary">.</span>
          </h2>
          <p className=" dark:text-slate-300 mt-4 text-gray-500">
            SchoolPilot offers a comprehensive solution to streamline school operations, record results, and handle payments efficiently, providing a seamless experience for educational institutions.
          </p>
        </div>

        <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 lg:gap-x-8 sm:grid-cols-3 lg:grid-cols-3">
          {/* <!-- Article 1 --> */}
          <div className="flex flex-col-reverse p-3">
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Streamlined Operations</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-slate-300">
                SchoolPilot offers a user-friendly interface to streamline administrative tasks, making it easier for schools to manage day-to-day operations efficiently.
              </p>
            </div>
            <div className="w-80 h-auto overflow-hidden rounded-lg bg-gray-100 max-h-44">
              <Image sizes='100vw' style={{width: "100%", height : "auto"}} src={img1} alt="Streamlined Operations" priority className="max-w-full block object-cover object-center" />
              {/* <Image width={1080} height={718} src={img1} alt="Streamlined Operations" priority className="max-w-full block object-cover object-center" /> */}
            </div>
          </div>
          {/* <!-- Article 2 --> */}
          <div className="flex flex-col-reverse p-3">
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Simplified Result Management</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-slate-300">
                With SchoolPilot, recording and accessing student results is a breeze. Our software simplifies result management, ensuring accuracy and ease of access.
              </p>
            </div>
            <div className="w-80 h-auto overflow-hidden rounded-lg bg-gray-100 max-h-44">
              <Image sizes='100vw' style={{width: "100%", height : "auto"}} src={img2} alt="Simplified Result Management" priority className="max-w-full block object-cover object-center" />
              {/* <Image width={1080} height={718} src={img2} alt="Simplified Result Management" priority className="max-w-full block object-cover object-center" /> */}
            </div>
          </div>
          {/* <!-- Article 3 --> */}
          <div className="flex flex-col-reverse p-3">
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Easy Payment Handling</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-slate-300">
                SchoolPilot simplifies the payment process for schools, allowing them to manage fees, invoices, and transactions seamlessly, providing a hassle-free experience for both the institution and parents.
              </p>
            </div>
            <div className="w-80 h-auto overflow-hidden rounded-lg bg-gray-100 max-h-44">
              <Image sizes='100vw' style={{width: "100%", height : "auto"}} src={img3} alt="Easy Payment Handling" priority className="max-w-full block object-cover object-center" />
              {/* <Image width={1080} height={718} src={img3} alt="Easy Payment Handling" priority className="max-w-full block object-cover object-center" /> */}
            </div>
          </div>
        </div>
      </section>

      <Features />

      <section className="mx-auto max-w-2xl mt-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 dark:border-slate-800 pb-10">
              <p className="font-semibold text-slate-500 dark:text-slate-300 preview-menu-wrapper relative">
                Simplify School Operations
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl preview-menu-wrapper relative">
                Simplify Administrative Tasks with SchoolPilot<span className="text-primary">.</span>
              </h2>
            </div>
            <dl className="mt-10 space-y-10">
              <div>
                <dt className="text-sm font-semibold text-gray-900 dark:text-white preview-menu-wrapper relative">
                  Streamline Operations
                </dt>
                <dd className="mt-3 text-sm text-gray-500 dark:text-slate-300 preview-menu-wrapper relative">
                  SchoolPilot helps schools streamline their administrative tasks, making it easier to manage day-to-day operations efficiently.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-gray-900 dark:text-white preview-menu-wrapper relative">
                  Result Management
                </dt>
                <dd className="mt-3 text-sm text-gray-500 dark:text-slate-300 preview-menu-wrapper relative">
                  SchoolPilot simplifies result management, allowing schools to record, access, and analyze student results seamlessly.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-gray-900 dark:text-white preview-menu-wrapper relative">
                  Payment Handling
                </dt>
                <dd className="mt-3 text-sm text-gray-500 dark:text-slate-300 preview-menu-wrapper relative">
                  With SchoolPilot, schools can handle payments with ease, managing fees, invoices, and transactions efficiently to ensure a smooth financial process.
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 preview-menu-wrapper relative">
              <Image priority  src={img4} width={1080} height={721} alt="Image of Simplify Administrative Tasks with SchoolPilot" className="h-full w-full object-cover object-center" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 preview-menu-wrapper relative">
                <Image  priority src={img5} width={1080} height={721} alt="Result Management" className="h-full w-full object-cover object-center" />
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 preview-menu-wrapper relative">
                <Image  priority src={img6} width={1080} height={721} alt="Payment Handling" className="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default page