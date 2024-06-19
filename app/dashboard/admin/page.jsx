"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoEllipsisVertical } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Student from '@/models/Student';

export default function AdminDashboard() {
  const { data: session, status: sessionStatus } = useSession();

  const router = useRouter();


  useEffect(() => {
    if (sessionStatus === "authenticated") {

      router.replace("/dashboard/admin");
    }
  }, [sessionStatus, router]);



  return (
    <div className="w-full px-4 py-6">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Welcome Admin!</h3>
            <ul className="flex text-gray-600">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li>/</li>
              <li className="breadcrumb-item text-indigo-400">Admin</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 my-4">
        <div className="bg-white flex items-center justify-between shadow-md rounded-lg p-4">
          <span>Onboard Student</span> <Link href="/dashboard/onboardstudent"><MdAddCircleOutline size="20" color="blue" /></Link>
        </div>
        <div className="bg-white flex items-center justify-between shadow-md rounded-lg p-4">
          <span>Onboard Staff</span> <Link href="/dashboard/onboardstaff"><MdAddCircleOutline size="20" color="blue" /></Link>
        </div>

      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        
        <div className="flex">
          <div className="bg-white shadow-md rounded-lg p-4 w-full flex items-center justify-between">
            <div>
              <h6 className="text-gray-600">Students</h6>
              <h3 className="text-xl font-bold">40</h3>
            </div>
            <div>
              <Image style={{ width: "auto", height: "auto", objectFit: "cover" }} src={`/assets/img/icons/dash-icon-01.svg`} alt="Student" width={40} height={40} />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="bg-white shadow-md rounded-lg p-4 w-full flex items-center justify-between">
            <div>
              <h6 className="text-gray-600">Awards</h6>
              <h3 className="text-xl font-bold">40</h3>
            </div>
            <div>
              <Image style={{ width: "auto", height: "auto", objectFit: "cover" }} src={`/assets/img/icons/dash-icon-02.svg`} alt="Awards" width={40} height={40} />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white shadow-md rounded-lg p-4 w-full flex items-center justify-between">
            <div>
              <h6 className="text-gray-600">Schools</h6>
              <h3 className="text-xl font-bold">40+</h3>
            </div>
            <div>
              <Image style={{ width: "auto", height: "auto", objectFit: "cover" }} src={`/assets/img/icons/dash-icon-03.svg`} alt="Schools" width={40} height={40} />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white shadow-md rounded-lg p-4 w-full flex items-center justify-between">
            <div>
              <h6 className="text-gray-600">Revenue</h6>
              <h3 className="text-xl font-bold">4500</h3>
            </div>
            <div>
              <Image style={{ width: "auto", height: "auto", objectFit: "cover" }} src={`/assets/img/icons/dash-icon-04.svg`} alt="Revenue" width={40} height={40} />
            </div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-lg font-semibold">Overview</h5>
            <ul className="flex space-x-4 text-gray-600">
              <li><span className="bg-blue-500 rounded-full h-3 w-3 inline-block"></span> Teacher</li>
              <li><span className="bg-green-500 rounded-full h-3 w-3 inline-block"></span> Student</li>
              <li className="cursor-pointer"><Link href=""><IoEllipsisVertical /></Link></li>
            </ul>
          </div>
          <div>
            <div id="apexcharts-area"></div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-lg font-semibold">Number of Students</h5>
            <ul className="flex space-x-4 text-gray-600">
              <li><span className="bg-blue-500 rounded-full h-3 w-3 inline-block"></span> Girls</li>
              <li><span className="bg-green-500 rounded-full h-3 w-3 inline-block"></span> Boys</li>
              <li className="cursor-pointer"><Link href=""><IoEllipsisVertical /></Link></li>
            </ul>
          </div>
          <div>
            <div id="bar"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 my-4">
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-lg font-semibold">Star Students</h5>
            <ul className="flex space-x-4 text-gray-600">
              <li className="cursor-pointer"><Link href=""><IoEllipsisVertical /></Link></li>
            </ul>
          </div>
          <div className="overflow-auto">
            <table className="table-auto w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2">ID</th>
                  <th className="p-2">Name</th>
                  <th className="p-2 text-center">Marks</th>
                  <th className="p-2 text-center">Percentage</th>
                  <th className="p-2 text-right">Year</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'PRE2209', name: 'John Smith', marks: 1185, percentage: '98%', year: 2019, img: 'avatar-02.jpg' },
                  { id: 'PRE1245', name: 'Jolie Hoskins', marks: 1195, percentage: '99.5%', year: 2018, img: 'avatar-01.jpg' },
                  { id: 'PRE1625', name: 'Pennington Joy', marks: 1196, percentage: '99.6%', year: 2017, img: 'avatar-03.jpg' },
                  { id: 'PRE2516', name: 'Millie Marsden', marks: 1187, percentage: '98.2%', year: 2016, img: 'avatar-04.jpg' },
                  { id: 'PRE2209', name: 'John Smith', marks: 1185, percentage: '98%', year: 2015, img: 'avatar-05.jpg' },
                ].map((student, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{student.id}</td>
                    <td className="p-2 flex items-center">
                      <Image sizes='100vw' className="rounded-full mr-2" src={`/assets/img/profiles/${student.img}`} width={25} height={25} alt="Star Students" />
                      <Link href="profile">{student.name}</Link>
                    </td>
                    <td className="p-2 text-center">{student.marks}</td>
                    <td className="p-2 text-center">{student.percentage}</td>
                    <td className="p-2 text-right">{student.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-lg font-semibold">Student Activity</h5>
            <ul className="flex space-x-4 text-gray-600">
              <li className="cursor-pointer"><Link href=""><IoEllipsisVertical /></Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            {[
              { title: '1st place in "Chess”', description: 'John Doe won 1st place in "Chess"', time: '1 Day ago', icon: 'award-icon-01.svg' },
              { title: 'Participated in "Carrom"', description: 'Justin Lee participated in "Carrom"', time: '2 hours ago', icon: 'award-icon-02.svg' },
              { title: 'Internation conference in "St.John School"', description: 'Justin Leeattended internation conference in "St.John School"', time: '2 Week ago', icon: 'award-icon-03.svg' },
              { title: 'Won 1st place in "Chess"', description: 'John Doe won 1st place in "Chess"', time: '3 Day ago', icon: 'award-icon-04.svg' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Image sizes='100vw' src={`/assets/img/icons/${activity.icon}`} alt="Award" width={40} height={40} />
                <div className="w-3/5 flex-grow">
                  <h4 className="font-semibold">{activity.title}</h4>
                  <h5 className="text-gray-600">{activity.description}</h5>
                </div>
                <span className="hidden sm:block text-right  text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};


