import React from 'react'
import Link from 'next/link'

const SetFees = () => {
  return (
    <div className="content container mx-auto p-4">

      <div className="page-header mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Add Fees</h3>
            <ul className="flex space-x-2 text-sm text-gray-500">
              <li><Link href="/fees-collections"><a>Accounts</a></Link></li>
              <li> / </li>
              <li>Add Fees</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="w-full">
          <div className="bg-white shadow rounded-lg">
            <div className="p-4">
              <form>
                <div className="row">
                  <div className="w-full">
                    <h5 className="text-lg font-medium mb-4">Fees Information</h5>
                  </div>
                  <div className="w-full sm:w-1/3 mb-4">
                    <div className="form-group">
                      <label className="block text-gray-700">Student ID <span className="text-red-500">*</span></label>
                      <input type="text" className="form-control w-full border rounded px-3 py-2"/>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 mb-4">
                    <div className="form-group">
                      <label className="block text-gray-700">Student Name <span className="text-red-500">*</span></label>
                      <input type="text" className="form-control w-full border rounded px-3 py-2"/>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 mb-4">
                    <div className="form-group">
                      <label className="block text-gray-700">Gender <span className="text-red-500">*</span></label>
                      <select className="form-control w-full border rounded px-3 py-2">
                        <option>Select Gender</option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 mb-4">
                    <div className="form-group">
                      <label className="block text-gray-700">Fees Type <span className="text-red-500">*</span></label>
                      <select className="form-control w-full border rounded px-3 py-2">
                        <option>Select Type</option>
                        <option>Class Test</option>
                        <option>Exam Fees</option>
                        <option>Hostel Fees</option>
                        <option>Transport Fees</option>
                        <option>Mess Fees</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 mb-4">
                    <div className="form-group">
                      <label className="block text-gray-700">Fees Amount <span className="text-red-500">*</span></label>
                      <input type="text" className="form-control w-full border rounded px-3 py-2"/>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 mb-4">
                    <div className="form-group">
                      <label className="block text-gray-700">Paid Date <span className="text-red-500">*</span></label>
                      <input className="form-control w-full border rounded px-3 py-2" type="text" placeholder="DD-MM-YYYY"/>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-end">
                      <button type="submit" className="btn btn-primary bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetFees
