import React from 'react'
import Link from 'next/link'

export default function Transport() {
  return (
    <div className="content container mx-auto p-4">

      <div className="page-header mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Transport</h3>
            <ul className="flex space-x-2 text-sm text-gray-500">
              <li><Link href="/"><a>Dashboard</a></Link></li>
              <li>/</li>
              <li>Transport</li>
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
                    <h3 className="text-lg font-bold">Transport</h3>
                  </div>
                  <div className="flex space-x-2">
                    <button className="btn btn-outline-primary border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-100">
                      <i className="fas fa-download"></i> Download
                    </button>
                    <Link href="/add-transport">
                      <a className="btn btn-primary bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                        <i className="fas fa-plus"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table-auto w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr className="text-left">
                      <th className="px-4 py-2 border-b">Route Name</th>
                      <th className="px-4 py-2 border-b">Vehicle Number</th>
                      <th className="px-4 py-2 border-b">Driver Name</th>
                      <th className="px-4 py-2 border-b">Driver License</th>
                      <th className="px-4 py-2 border-b">Contact Number</th>
                      <th className="px-4 py-2 border-b">Driver Address</th>
                      <th className="px-4 py-2 border-b text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">New Cross</td>
                      <td className="px-4 py-2 border-b">TN 43 AS 5263</td>
                      <td className="px-4 py-2 border-b">Steve</td>
                      <td className="px-4 py-2 border-b">REDH968532</td>
                      <td className="px-4 py-2 border-b">+91 8974158962</td>
                      <td className="px-4 py-2 border-b">152, South Pole, 2nd Street, 3rd Cross</td>
                      <td className="px-4 py-2 border-b text-right">
                        <div className="flex justify-end space-x-2">
                          <button className="btn bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600">
                            <i className="feather-eye"></i>
                          </button>
                          <Link href="/edit-transport">
                            <a className="btn bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">
                              <i className="feather-edit"></i>
                            </a>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">North Pole</td>
                      <td className="px-4 py-2 border-b">TN 34 DB 5847</td>
                      <td className="px-4 py-2 border-b">Akbar</td>
                      <td className="px-4 py-2 border-b">RGTH958932</td>
                      <td className="px-4 py-2 border-b">+91 8596841252</td>
                      <td className="px-4 py-2 border-b">253, 2nd Street, 3rd Cross</td>
                      <td className="px-4 py-2 border-b text-right">
                        <div className="flex justify-end space-x-2">
                          <button className="btn bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600">
                            <i className="feather-eye"></i>
                          </button>
                          <Link href="/edit-transport">
                            <a className="btn bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">
                              <i className="feather-edit"></i>
                            </a>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">South Wales</td>
                      <td className="px-4 py-2 border-b">TN 34 AK 6789</td>
                      <td className="px-4 py-2 border-b">Joseph</td>
                      <td className="px-4 py-2 border-b">DLFH985632</td>
                      <td className="px-4 py-2 border-b">+91 9658741526</td>
                      <td className="px-4 py-2 border-b">741, East Road, 2nd Street</td>
                      <td className="px-4 py-2 border-b text-right">
                        <div className="flex justify-end space-x-2">
                          <button className="btn bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600">
                            <i className="feather-eye"></i>
                          </button>
                          <Link href="/edit-transport">
                            <a className="btn bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">
                              <i className="feather-edit"></i>
                            </a>
                          </Link>
                        </div>
                      </td>
                    </tr>
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


