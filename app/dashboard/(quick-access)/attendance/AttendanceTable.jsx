import React from 'react'
import Link from 'next/link'
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { IoEyeOutline } from 'react-icons/io5';


const AttendanceTable = () => {
  return (
    <div className="w-full p-4">

      <div className="page-header mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Attendance</h3>
            <ul className="flex space-x-2 text-sm text-gray-500">
              <li><Link href="/">Dashboard</Link></li>
              <li>/</li>
              <li>Attendance</li>
            </ul>
          </div>
        </div>
      </div>

        <div className="w-full">
          <div className="bg-white shadow rounded-lg">
            <div className="p-4">

              <div className="page-header mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Attendance</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link href="#" className=" border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white"><i className="fas fa-download"></i> Download</Link>
                    <Link href="add-attendance">
                      <FaPlus className=" text-blue-600 hover:text-blue-700 hover:scale-105" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table-auto w-full border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 text-left">Date</th>
                      <th className="p-2 text-left hidden">Teacher Name</th>
                      <th className="p-2 text-left">Time In</th>
                      <th className="p-2 text-left">Mins Late</th>
                      <th className="p-2 text-left">Time Out</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2">
                      23 Apr 2020
                      </td>
                      <td className="p-2 hidden">Jonathan</td>
                      <td className="p-2">10:00 AM</td>
                      <td className="p-2">01:00 PM</td>
                      <td className="p-2">23 Apr 2020</td>
                     
                    </tr>
                  
                   
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AttendanceTable
