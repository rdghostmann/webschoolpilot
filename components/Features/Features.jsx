import React from 'react';
import Image from 'next/image';
// import { GiSplashyStream } from "react-icons/gi";
import streamlineOps from '../../public/assets/img/streamline-ops.png';
import resultManage from '../../public/assets/img/result-manage.png';
import paymentHandling from '../../public/assets/img/payment-handling.png';



const Features = () => {
    return (
        <div>

            <dl className=" max-w-7xl mx-auto px-10 mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-3">
                <div className="px-4 flex flex-col items-center text-center">
                    <div className="flex-shrink-0 mb-4 p-1 shadow-xl bg-white rounded-md border-2 border-slate-300">
                        {/* <GiSplashyStream color='yellow' size={40} /> */}
                        <Image src={streamlineOps} alt="Icon" width={40} height={40} />
                    </div>
                    <div>
                        <dt className="text-sm font-semibold text-gray-900 dark:text-white preview-menu-wrapper relative">
                            Streamline Operations
                        </dt>
                        <dd className="mt-3 text-sm text-gray-500 dark:text-slate-300 preview-menu-wrapper relative">
                            SchoolPilot helps schools streamline their administrative tasks, making it easier to manage day-to-day operations efficiently.
                        </dd>
                    </div>
                </div>
                <div className="px-4 flex flex-col items-center text-center">
                    <div className="flex-shrink-0 mb-4 p-1 shadow-xl bg-white rounded-md border-2 border-slate-300">
                    <Image src={resultManage} alt="Icon" width={40} height={40} />
                    </div>
                    <div>
                        <dt className="text-sm font-semibold text-gray-900 dark:text-white preview-menu-wrapper relative">
                            Result Management
                        </dt>
                        <dd className="mt-3 text-sm text-gray-500 dark:text-slate-300 preview-menu-wrapper relative">
                            SchoolPilot simplifies result management, allowing schools to record, access, and analyze student results seamlessly.
                        </dd>
                    </div> 
                </div>
                <div className="px-4 flex flex-col items-center text-center">
                    <div className="flex-shrink-0 mb-4 p-1 shadow-xl bg-white rounded-md border-2 border-slate-300">
                    <Image src={paymentHandling} alt="Icon" width={40} height={40} />
                    </div>
                    <div>
                        <dt className="text-sm font-semibold text-gray-900 dark:text-white preview-menu-wrapper relative">
                            Payment Handling
                        </dt>
                        <dd className="mt-3 text-sm text-gray-500 dark:text-slate-300 preview-menu-wrapper relative">
                            With SchoolPilot, schools can handle payments with ease, managing fees, invoices, and transactions efficiently to ensure a smooth financial process.
                        </dd>
                    </div>
                </div>
            </dl>
        </div>
    );
};

export default Features;
