import React from 'react'
import Link from 'next/link'

const Hostel = () => {
  return (
    <div className="content container mx-auto p-4">

      <div className="page-header mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Hostel</h3>
            <ul className="flex space-x-2 text-sm text-gray-500">
              <li><Link href="/"><a>Dashboard</a></Link></li>
              <li>/</li>
              <li>Hostel</li>
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
                    <h3 className="text-xl font-bold">Hostel</h3>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="btn btn-outline-primary text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-100"><i className="fas fa-download"></i> Download</a>
                    <Link href="/add-room">
                      <a className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"><i className="fas fa-plus"></i> Add Room</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table-auto w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2">Block</th>
                      <th className="px-4 py-2">Room No</th>
                      <th className="px-4 py-2">Room Type</th>
                      <th className="px-4 py-2">No of Beds</th>
                      <th className="px-4 py-2">Cost per Bed</th>
                      <th className="px-4 py-2">Availability</th>
                      <th className="px-4 py-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="px-4 py-2">A Block</td>
                      <td className="px-4 py-2">101</td>
                      <td className="px-4 py-2">Medium</td>
                      <td className="px-4 py-2">6</td>
                      <td className="px-4 py-2">$10</td>
                      <td className="px-4 py-2">
                        <span className="badge bg-red-500 text-white px-2 py-1 rounded">Full</span>
                      </td>
                      <td className="px-4 py-2 text-right">
                        <div className="actions flex justify-end space-x-2">
                          <a href="javascript:;" className="btn btn-sm bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                            <i className="feather-eye"></i>
                          </a>
                          <Link href="/edit-room">
                            <a className="btn btn-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                              <i className="feather-edit"></i>
                            </a>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-4 py-2">A Block</td>
                      <td className="px-4 py-2">101</td>
                      <td className="px-4 py-2">Medium</td>
                      <td className="px-4 py-2">6</td>
                      <td className="px-4 py-2">$10</td>
                      <td className="px-4 py-2">
                        <span className="badge bg-green-500 text-white px-2 py-1 rounded">Available</span>
                      </td>
                      <td className="px-4 py-2 text-right">
                        <div className="actions flex justify-end space-x-2">
                          <a href="javascript:;" className="btn btn-sm bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                            <i className="feather-eye"></i>
                          </a>
                          <Link href="/edit-room">
                            <a className="btn btn-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                              <i className="feather-edit"></i>
                            </a>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    {/* Repeat the table rows as needed */}
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

export default Hostel
