'use client'
import Link from 'next/link'
import React from 'react'
// import DashboardTopHeader from '../DashboardTopHeader/DashboardTopHeader';
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDashboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { GrUserAdmin } from "react-icons/gr";
import { IoLibraryOutline } from "react-icons/io5";
import { BsPersonCheckFill } from "react-icons/bs";
import { MdEventNote } from "react-icons/md";
import { LiaBusSolid } from "react-icons/lia";
import { PiBuildingApartment } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";


const DashboardNavBar = ({ children }) => {
  return (
    <div className="flex flex-col">
      <header className="fixed top-0 w-full bg-slate-100 z-10 flex h-14 lg:h-[55px] items-center gap-4 border-b px-6 ">
        <Dialog>
          <SheetTrigger className="min-[1024px]:hidden p-2 transition">
            <GiHamburgerMenu />
            <Link href='/dashboard' ><span className="sr-only">Home</span></Link>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Link href='#' >
                <SheetTitle>Dashboard</SheetTitle>
              </Link>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-4">
              
              
              <DialogClose asChild>
                <Link href='/dashboard' >
                  <Button variant="outline" className="w-full">
                    <MdOutlineDashboard className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>

              </DialogClose>


              <DialogClose asChild >
                <Link href='/dashboard/admin' >
                  <Button variant="outline" className="w-full">
                    <GrUserAdmin className="mr-2 h-4 w-4" />
                    Admin
                  </Button>
                </Link>

              </DialogClose>

              <DialogClose asChild >
                <Link href='/dashboard/student' >
                  <Button variant="outline" className="w-full">
                    <PiStudent className="mr-2 h-4 w-4" />
                    Student
                  </Button>
                </Link>

              </DialogClose>

              <DialogClose asChild >
                <Link href='/dashboard/staff' >
                  <Button variant="outline" className="w-full">
                    <PiChalkboardTeacher className="mr-2 h-4 w-4" />
                    Teacher
                  </Button>
                </Link>

              </DialogClose>

              <DialogClose asChild >
                <Link href='/dashboard/library' >
                  <Button variant="outline" className="w-full">
                    <IoLibraryOutline className="mr-2 h-4 w-4" />
                    Library
                  </Button>
                </Link>

              </DialogClose>

              <DialogClose asChild >
                <Link href='/dashboard/attendance' >
                  <Button variant="outline" className="w-full">
                    <BsPersonCheckFill className="mr-2 h-4 w-4" />
                    Attendance
                  </Button>
                </Link>

              </DialogClose>

              <DialogClose asChild >
                <Link href='/dashboard/notice' >
                  <Button variant="outline" className="w-full">
                    <MdEventNote className="mr-2 h-4 w-4" />
                    Notice
                  </Button>
                </Link>

              </DialogClose>
        
              <DialogClose asChild >
                <Link href='/dashboard/transport' >
                  <Button variant="outline" className="w-full">
                    <LiaBusSolid className="mr-2 h-4 w-4" />
                    Transport
                  </Button>
                </Link>

              </DialogClose>
        
              <DialogClose asChild >
                <Link href='/dashboard/hostel' >
                  <Button variant="outline" className="w-full">
                    <PiBuildingApartment className="mr-2 h-4 w-4" />
                    Hostel
                  </Button>
                </Link>

              </DialogClose>

              <DialogClose asChild >
                <Link href='/payment' >
                  <Button variant="outline" className="w-full">
                    <RiSecurePaymentFill className="mr-2 h-4 w-4" />
                    Payment
                  </Button>
                </Link>

              </DialogClose>

            </div>

          </SheetContent>

        </Dialog>

{/* <DashboardTopHeader /> */}
      </header>
      
      {/* {children} */}
    </div>
  )
}

export default DashboardNavBar