import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FeesList = () => {
  return (
    <div className="content container mx-auto p-4">

      <div className="page-header mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Fees</h3>
            <ul className="flex space-x-2 text-sm text-gray-500">
              <li><Link href="/"><a>Dashboard</a></Link></li>
              <li> / </li>
              <li>Fees</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="w-full">
          <div className="bg-white shadow rounded-lg">
            <div className="p-4">

              <div className="page-header mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Fees</h3>
                  </div>
                  <div className="space-x-2">
                    <button className="btn btn-outline-primary">
                      <i className="fas fa-download"></i> Download
                    </button>
                    <Link href="/add-fees">
                      <a className="btn btn-primary">
                        <i className="fas fa-plus"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table-auto w-full border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">ID</th>
                      <th className="px-4 py-2 text-left">Fees Name</th>
                      <th className="px-4 py-2 text-left">Class</th>
                      <th className="px-4 py-2 text-left">Amount</th>
                      <th className="px-4 py-2 text-left">Start Date</th>
                      <th className="px-4 py-2 text-left">End Date</th>
                      <th className="px-4 py-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 'PRE2209', name: 'Exam Fees', class: 10, amount: 345, startDate: '23 Apr 2020', endDate: '28 Apr 2020' },
                      { id: 'PRE2213', name: 'Exam Fees', class: 1, amount: 255, startDate: '23 Apr 2020', endDate: '28 Apr 2020' },
                      { id: 'PRE2143', name: 'Exam Fees', class: 9, amount: 545, startDate: '23 Apr 2020', endDate: '28 Apr 2020' },
                      { id: 'PRE2431', name: 'Sports Day Fees', class: 8, amount: 234, startDate: '23 Apr 2020', endDate: '28 Apr 2020' },
                      { id: 'PRE1534', name: 'Exam Fees', class: 7, amount: 265, startDate: '23 Apr 2020', endDate: '28 Apr 2020' },
                      { id: 'PRE2153', name: 'Sports Day Fees', class: 2, amount: 334, startDate: '23 Apr 2020', endDate: '28 Apr 2020' },
                      { id: 'PRE1434', name: 'Sports Day Fees', class: 6, amount: 341, startDate: '23 Apr 2020', endDate: '28 Apr 2020' },
                      { id: 'PRE2345', name: 'Exam Fees', class: 12, amount: 365, startDate: '23 Apr 2020', endDate: '28 Apr 2020' },
                      { id: 'PRE2365', name: 'Annual Day Fees', class: 11, amount: 83, startDate: '23 Apr 2020', endDate: '28 Apr 2020' },
                      { id: 'PRE1234', name: 'Class Test Fees', class: 5, amount: 242, startDate: '23 Apr 2020', endDate: '28 Apr 2020' }
                    ].map((fee, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">{fee.id}</td>
                        <td className="px-4 py-2">
                          <h2>
                            <a className="text-blue-600">{fee.name}</a>
                          </h2>
                        </td>
                        <td className="px-4 py-2">{fee.class}</td>
                        <td className="px-4 py-2">${fee.amount}</td>
                        <td className="px-4 py-2">{fee.startDate}</td>
                        <td className="px-4 py-2">{fee.endDate}</td>
                        <td className="px-4 py-2 text-right">
                          <div className="inline-flex space-x-2">
                            <button className="btn btn-sm bg-success-light text-green-600">
                              <i className="feather-eye"></i>
                            </button>
                            <Link href="/edit-fees">
                              <a className="btn btn-sm bg-danger-light text-red-600">
                                <i className="feather-edit"></i>
                              </a>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeesList
