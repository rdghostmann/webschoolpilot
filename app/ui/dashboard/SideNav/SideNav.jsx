"use client";
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx'
import { usePathname } from 'next/navigation';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";

import { HiOutlineShoppingBag } from 'react-icons/hi';
import { PiStudent } from "react-icons/pi";
import { FiSettings } from 'react-icons/fi';
import { IoLibraryOutline } from "react-icons/io5";
import { BsPersonCheckFill } from "react-icons/bs";
import { MdEventNote } from "react-icons/md";
import { LiaBusSolid } from "react-icons/lia";
import { PiBuildingApartment } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";




const SideNav = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className='flex'>
      <div className='fixed h-screen bg-white border-r-[1px] flex flex-col justify-between'>
        {/* <div className='flex flex-col items-center'>
          <Link href='#'>
            <div className='bg-purple-800 text-white p-3 rounded-lg '>
              <RxSketchLogo size={10} />
              <span className=' text-xs text-center'>Dashboard</span>
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          
          <Link href='#'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg '>
              <RxDashboard size={10} />
              <span className=' text-xs text-center'>Admin</span>
            </div>
          </Link>

          <Link href='/dashboard/student'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg '>
              <RxPerson size={10} />
              <span className=' text-xs text-center'>Student</span>
            </div>
          </Link>
 
          <Link href='/dashboard/staff'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg '>
              <FaPeopleGroup size={10} />
              <span className=' text-xs text-center'>Staff</span>
            </div>
          </Link>

          <Link href='/dashboard/notice'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg '>
              <MdEventNote size={10} />
              <span className=' text-xs text-center'>Notice</span>
            </div>
          </Link>

          <Link href='/library'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg '>
              <IoLibraryOutline size={10} />
              <span className=' text-xs text-center'>Library</span>
            </div>
          </Link>

          <Link href='/dashboard/attendance'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg '>
              <BsPersonCheckFill size={10} />
              <span className=' text-xs text-center'>Attendance</span>
            </div>
          </Link>

          <Link href='/dashboard/transport'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg '>
              <LiaBusSolid size={10} />
              <span className=' text-xs text-center'>Transport</span>
            </div>
          </Link>

          <Link href='/dashboard/hostel'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg '>
              <PiBuildingApartment size={10} />
              <span className=' text-xs text-center'>Hostel</span>
            </div>
          </Link>

          <Link href='/dashboard/payment'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg '>
              <RiSecurePaymentFill size={10} />
              <span className=' text-xs text-center'>Payment</span>
            </div>
          </Link>
















          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg '>
              <FiSettings className='mx-auto' size={10} />
              <span className=' text-xs text-center'>Settings</span>
            </div>
          </Link>
          
        </div> */}
         <div className="flex-1 overflow-auto py-2">
          {/* <nav className="grid items-start px-2 text-sm font-medium"> */}
          <nav className="grid items-start px-2 text-sm font-medium">

            <Link
              href="#"
              className={clsx("flex flex-col items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "#",
                }
              )}
            >
              <div className={clsx(" shadow-xl flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "#" }
              )}>
              <RxSketchLogo size={20} />
              </div>
              <span className="duration-300 opacity-100 pointer-events-none text-xs">Admin</span>
            </Link>

            <Link
              href="/dashboard/admin"
              className={clsx("flex flex-col items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/admin",
                }
              )}
            >
              <div className={clsx(" shadow-xl flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/admin" }
              )}>
                <MdOutlineDashboard size={20} />
              </div>
              {/* <span className=" duration-300 opacity-100 pointer-events-none">Dashboard</span> */}
            </Link>

            <Link
              href="/dashboard/student"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/student",
                }
              )}
            >
              <div className={clsx(" shadow-xl flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/student" }
              )}>
                <PiStudent size={20} />
              </div>
              {/* <span className="ml-1 duration-300 opacity-100 pointer-events-none">Student</span> */}
            </Link>

            <Link
              href="/dashboard/staff"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/staff",
                }
              )}
            >
              <div className={clsx(" shadow-xl flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/staff" }
              )}>
                <FaPeopleGroup size={20} />
              </div>
              {/* <span className="ml-1 duration-300 opacity-100 pointer-events-none">Teacher</span> */}
            </Link>

            <Link
              href="/library"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/library",
                }
              )}
            >
              <div className={clsx(" shadow-xl flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/library" }
              )}>
                <IoLibraryOutline size={20} />
              </div>
              {/* <span className="ml-1 duration-300 opacity-100 pointer-events-none">Library</span> */}
            </Link>

            <Link
              href="/attendance"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/attendance",
                }
              )}
            >
              <div className={clsx(" shadow-xl flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/attendance" }
              )}>
                <BsPersonCheckFill size={20} />
              </div>
              {/* <span className="ml-1 duration-300 opacity-100 pointer-events-none">Attendance</span> */}
            </Link>

       
            <Link
              href="/dashboard/notice"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/notice",
                }
              )}
            >
              <div className={clsx(" shadow-xl flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/notice" }
              )}>
                <MdEventNote size={20} />
              </div>
              {/* <span className="ml-1 duration-300 opacity-100 pointer-events-none">Notice</span> */}
            </Link>

            <Link
              href="/dashboard/transport"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/transport",
                }
              )}
            >
              <div className={clsx(" shadow-xl flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/transport" }
              )}>
                <LiaBusSolid size={20} />
              </div>
              {/* <span className="ml-1 duration-300 opacity-100 pointer-events-none">Transport</span> */}
            </Link>

            <Link
              href="/dashboard/hostel"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/hostel",
                }
              )}
            >
              <div className={clsx(" shadow-xl flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/hostel" }
              )}>
                <PiBuildingApartment size={20} />
              </div>
              {/* <span className="ml-1 duration-300 opacity-100 pointer-events-none">Hostel</span> */}
            </Link>

            <Link
              href="/dashboard/payment"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/payment",
                }
              )}
            >
              <div className={clsx(" shadow-xl flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/payment" }
              )}>
                <RiSecurePaymentFill size={20} />
              </div>
              {/* <span className="ml-1 duration-300 opacity-100 pointer-events-none">Payment</span> */}
            </Link>

            <Link
              href="/dashboard/payment"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/payment",
                }
              )}
            >
              <div className={clsx(" shadow-xl flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/payment" }
              )}>
              <FiSettings size={20} />
              </div>
              {/* <span className="ml-1 duration-300 opacity-100 pointer-events-none">Payment</span> */}
            </Link>









          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideNav;