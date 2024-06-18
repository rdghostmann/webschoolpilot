import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoEllipsisVertical } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { LuAlarmClock } from "react-icons/lu";
import { MdTouchApp } from "react-icons/md";

import fingerUi from "../../../../public/assets/img/fingerUI.png"
import AttendanceTable from '../(quick-access)/attendance/AttendanceTable';




export default function StaffDashboard() {
  return (
    <div className="container mx-auto p-4">

      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Welcome Jonathan!</h3>
          <ul className="breadcrumb flex space-x-2">
            {/* <Link href="/"><li className="breadcrumb-item">Home</li></Link> */}
            <li className="breadcrumb-item active">Teacher</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { title: "Total Classes", value: "04/06", icon: "teacher-icon-01.svg" },
          { title: "Total Students", value: "40/60", icon: "dash-icon-01.svg" },
          { title: "Total Lessons", value: "30/50", icon: "teacher-icon-02.svg" },
          { title: "Total Hours", value: "15/20", icon: "teacher-icon-03.svg" },
        ].map((card, index) => (
          <div key={index} className="flex">
            <div className="card bg-gray-100 w-full p-4 shadow-md rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h6 className="text-lg font-semibold">{card.title}</h6>
                  <h3 className="text-2xl">{card.value}</h3>
                </div>
                <div>
                  <Image src={`/assets/img/icons/${card.icon}`} alt="Dashboard Icon" width={50} height={50} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-6">
        <div className="xl:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="card flex flex-col bg-white shadow-md rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-xl font-semibold">Upcoming Lesson</h5>
                <Link href="/" className="text-blue-500">View All Courses</Link>
              </div>
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <tbody>
                    {[1, 2].map((lesson, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">
                          <div>
                            <b>Lessons 30</b>
                            <p>3.1 Ipsum dolor</p>
                            <ul className="flex space-x-2 text-gray-500">
                              <li><SlCalender />Sep 5, 2022</li>
                              <li>|</li>
                              <li><LuAlarmClock /> 09:00 - 10:00 am</li>
                            </ul>
                          </div>
                        </td>
                        <td className="py-2 text-right">
                          <div className="flex flex-col items-end">
                            <Link href="/" className="text-green-500 mb-2">Confirmed</Link>
                            <button className="btn btn-blue">Reschedule</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card flex flex-col bg-white shadow-md rounded-lg p-1">
              <div className="mb-4">
                <h5 className="text-xl font-semibold">Teacher Attendance</h5>
              </div>
              <div className="flex flex-col justify-center">
                {/* <TeacherAttendance /> */}
                <div className="w-full mx-auto p-4">
                  <div className="shadow-lg p-6 bg-white rounded-lg">
                    <div className="flex flex-col items-center">
                      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="col-span-2 sm:col-span-1 lg:col-span-2">
                          <h3 className="text-xl font-bold mb-4">Your Attendance</h3>

                          <div className="grid grid-cols-2  gap-2">
                            <div className="mb-4">
                              <p className="mr-2">In time:</p>
                              <p className="font-bold">0</p>
                            </div>
                            <div className="mb-4">
                              <p className="mr-2">Out time:</p>
                              <p className="font-bold">0</p>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-2 p-2 flex justify-center items-center">
                          {/* Adjusted image container with TailwindCSS classes */}
                          <div className="relative h-36 w-52 sm:h-40 sm:w-56 lg:h-48 lg:w-64">
                            <Image
                              className="absolute inset-0 object-cover rounded-full shadow-xl"
                              src={fingerUi}
                              layout="fill"
                              alt="fingerUI"
                              priority
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-4 mt-4">
                        <button className="p-2 bg-blue-500 transition ease-out duration-100 text-white rounded-2xl">
                          <MdTouchApp size="25" className="inline" /> Check in
                        </button>
                        <button className="p-2 bg-red-500 transition ease-out duration-100 text-white rounded-2xl">
                          <MdTouchApp size="25" className="inline" /> Check out
                        </button>
                      </div>

                      <div className="w-[80%] mx-auto flex items-center justify-center space-x-3 mt-6">
                        <div className="mb-2">
                          <p className="mr-2">Check in:</p>
                          <p className="font-bold">0</p>
                        </div>
                        <div className="mb-2">
                          <p className="mr-2">Check out:</p>
                          <p className="font-bold">0</p>
                        </div>
                        <div className="mb-2">
                          <p className="mr-2">Late time:</p>
                          <p className="font-bold">0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <AttendanceTable /> */}
              </div>
            </div>


          </div>

          <div className="card flex flex-col bg-white shadow-md rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-semibold">Teaching Activity</h5>
              <ul className="flex space-x-2 text-gray-500">
                <li><span className="circle-blue"></span> Teacher</li>
                <li><span className="circle-green"></span> Students</li>
                <Link href="#"><li className="star-menus"><IoEllipsisVertical /></li></Link>
              </ul>
            </div>
            <div className="flex-grow">
              <div id="school-area"></div>
            </div>
          </div>

          <div className="card flex flex-col bg-white shadow-md rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-semibold">Teaching History</h5>
              <ul className="flex space-x-2 text-gray-500">
                <Link href="#"><li className="star-menus"><IoEllipsisVertical /></li></Link>
              </ul>
            </div>
            <div>
              <ul className="flex space-x-4 text-gray-500 mb-4">
                <li>Sep 22</li>
                <li>Sep 23</li>
                <li>Sep 24</li>
              </ul>
              <ul className="space-y-4">
                {[
                  { subject: "Mathematics", date: "September 5, 2022", time: "09:00 am - 10:00 am (60 Minutes)", status: "In Progress" },
                  { subject: "Geography", date: "September 5, 2022", time: "09:00 am - 10:00 am (60 Minutes)", status: "Completed" },
                  { subject: "Botony", date: "September 5, 2022", time: "09:00 am - 10:00 am (60 Minutes)", status: "In Progress" },
                ].map((activity, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <div>
                      <span className="block text-lg font-semibold">{activity.subject}</span>
                      <ul className="flex space-x-2 text-gray-500">
                        <li><SlCalender /> {activity.date}</li>
                        <li>|</li>
                        <li><LuAlarmClock /> {activity.time}</li>
                      </ul>
                    </div>
                    <button className="btn btn-blue">{activity.status}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="card flex flex-col bg-white shadow-md rounded-lg p-4">
          <div id="calendar-doctor" className="calendar-container"></div>
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Upcoming Events</h2>
              {/* <Link href="#">  <CiBookmarkPlus />  </Link> */}
            </div>
            {[
              { date: "10 Jan", time: "08:00 am", subject: "Botony", description: "Lorem ipsum sit amet", startTime: "08:00 - 09:00 am" },
              { date: "10 Jan", time: "09:00 am", subject: "Botony", description: "Lorem ipsum sit amet", startTime: "09:00 - 10:00 am" },
              { date: "10 Jan", time: "10:00 am", subject: "Botony", description: "Lorem ipsum sit amet", startTime: "10:00 - 11:00 am" },
              { date: "10 Jan", time: "08:00 am", subject: "English", description: "Lorem ipsum sit amet", startTime: "08:00 - 09:00 am" },
              { date: "10 Jan", time: "09:00 am", subject: "Mathematics", description: "Lorem ipsum sit amet", startTime: "09:00 - 10:00 am" },
              { date: "10 Jan", time: "10:00 am", subject: "History", description: "Lorem ipsum sit amet", startTime: "10:00 - 11:00 am" },
              { date: "10 Jan", time: "11:00 am", subject: "Break", description: "Lorem ipsum sit amet", startTime: "11:00 - 12:00 am" },
              { date: "10 Jan", time: "11:30 am", subject: "History", description: "Lorem ipsum sit amet", startTime: "11:30 - 12:00 am" },
            ].map((event, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">{event.date}</h3>
                  <IoEllipsisVertical />
                </div>
                <div>
                  <p className="text-gray-500">{event.time}</p>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-semibold">{event.subject}</h4>
                    <h5 className="text-gray-600">{event.description}</h5>
                    <span className="text-gray-500">{event.startTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

