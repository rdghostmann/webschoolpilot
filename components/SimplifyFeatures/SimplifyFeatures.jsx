import React from 'react'
import img4 from '../public/assets/img/photo-1551887373-6edba6dacbb1.jpg'
import img5 from '../public/assets/img/photo-1523240795612-9a054b0db644.jpg'
import img6 from '../public/assets/img/photo-1485546246426-74dc88dec4d9.jpg'


const SimplifyFeatures = () => {
    return (

        <section className="mx-auto max-w-2xl mt-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
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
                        <Image priority src={img4} width={1080} height={721} alt="Image of Simplify Administrative Tasks with SchoolPilot" className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 preview-menu-wrapper relative">
                            <Image priority src={img5} width={1080} height={721} alt="Result Management" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 preview-menu-wrapper relative">
                            <Image priority src={img6} width={1080} height={721} alt="Payment Handling" className="h-full w-full object-cover object-center" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SimplifyFeatures