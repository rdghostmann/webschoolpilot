'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { RxSketchLogo } from "react-icons/rx";
import { MdOutlineDashboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoLibraryOutline } from "react-icons/io5";
import { BsPersonCheckFill } from "react-icons/bs";
import { MdEventNote } from "react-icons/md";
import { LiaBusSolid } from "react-icons/lia";
import { PiBuildingApartment } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";


import clsx from 'clsx'

const DashboardSideBar = () => {
  const pathname = usePathname();


  return (
    <div className="hidden lg:block border-r h-full">
      <div className="fixed left-0 flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[55px] items-center justify-center border-b  w-full">
          <Link href="/">
            <div className="mx-auto p-2 rounded-lg inline-block bg-gradient-to-tl from-purple-700 to-pink-500 text-white">
              <RxSketchLogo size={15} />

            </div>
          </Link>
        </div>

        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">

            <Link
              href="/dashboard/admin"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/admin",
                }
              )}
            >
              <div className={clsx(" shadow-xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/admin" }
              )}>
                <MdOutlineDashboard className="h-5 w-5" />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none">Admin</span>
            </Link>

            <Link
              href="/dashboard"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard",
                }
              )}
            >
              <div className={clsx(" shadow-xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard" }
              )}>
                <MdOutlineDashboard className="h-5 w-5" />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none">Dashboard</span>
            </Link>

            <Link
              href="/dashboard/student"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/student",
                }
              )}
            >
              <div className={clsx(" shadow-xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/student" }
              )}>
                <PiStudent className="h-5 w-5" />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none">Student</span>
            </Link>




            <Link
              href="/dashboard/staff"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/staff",
                }
              )}
            >
              <div className={clsx(" shadow-xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/staff" }
              )}>
                <FaPeopleGroup className="h-5 w-5" />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none">Teacher</span>
            </Link>

            <Link
              href="/library"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/library",
                }
              )}
            >
              <div className={clsx(" shadow-xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/library" }
              )}>
                <IoLibraryOutline className="h-5 w-5" />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none">Library</span>
            </Link>

            <Link
              href="/attendance"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/attendance",
                }
              )}
            >
              <div className={clsx(" shadow-xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/attendance" }
              )}>
                <BsPersonCheckFill className="h-5 w-5" />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none">Attendance</span>
            </Link>

       
            <Link
              href="/dashboard/notice"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/notice",
                }
              )}
            >
              <div className={clsx(" shadow-xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/notice" }
              )}>
                <MdEventNote className="h-5 w-5" />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none">Notice</span>
            </Link>

            <Link
              href="/dashboard/transport"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/transport",
                }
              )}
            >
              <div className={clsx(" shadow-xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/transport" }
              )}>
                <LiaBusSolid className="h-5 w-5" />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none">Transport</span>
            </Link>

            <Link
              href="/dashboard/hostel"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/hostel",
                }
              )}
            >
              <div className={clsx(" shadow-xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/hostel" }
              )}>
                <PiBuildingApartment className="h-5 w-5" />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none">Hostel</span>
            </Link>

            <Link
              href="/dashboard/payment"
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all ease-out hover:text-slate-500 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname === "/dashboard/payment",
                }
              )}
            >
              <div className={clsx(" shadow-xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center text-center xl:p-2.5",
                { "bg-gradient-to-tl from-purple-700 to-pink-500 text-white": pathname === "/dashboard/payment" }
              )}>
                <RiSecurePaymentFill className="h-5 w-5" />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none">Payment</span>
            </Link>









          </nav>
        </div>
      </div>
    </div>
  )
}

export default DashboardSideBar