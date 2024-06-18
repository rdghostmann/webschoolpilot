import React from 'react'
import Link from 'next/link'

const AddTransport = () => {
  return (
    <div className="content container mx-auto p-4">

      <div className="page-header mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Add Transport</h3>
            <ul className="flex space-x-2 text-sm text-gray-500">
              <li><Link href="/transport"><a>Transport</a></Link></li>
              <li>/</li>
              <li>Add Transport</li>
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
                  <div className="w-full mb-4">
                    <h5 className="text-lg font-bold">Transport Information</h5>
                  </div>
                  <div className="w-full sm:w-1/3 px-2 mb-4">
                    <div className="form-group">
                      <label className="block text-gray-700">Route Name <span className="text-red-500">*</span></label>
                      <input type="text" className="form-control mt-1 p-2 border rounded w-full"/>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 px-2 mb-4">
                    <div className="form-group">
                      <label className="block text-gray-700">Vehicle Number <span className="text-red-500">*</span></label>
                      <input type="text" className="form-control mt-1 p-2 border rounded w-full"/>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 px-2 mb-4">
                    <div className="form-group">
                      <label className="block text-gray-700">Driver Name <span className="text-red-500">*</span></label>
                      <input type="text" className="form-control mt-1 p-2 border rounded w-full"/>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 px-2 mb-4">
                    <div className="form-group">
                      <label className="block text-gray-700">License Number <span className="text-red-500">*</span></label>
                      <input type="text" className="form-control mt-1 p-2 border rounded w-full"/>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 px-2 mb-4">
                    <div className="form-group">
                      <label className="block text-gray-700">Contact Number <span className="text-red-500">*</span></label>
                      <input type="text" className="form-control mt-1 p-2 border rounded w-full"/>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 px-2 mb-4">
                    <div className="form-group">
                      <label className="block text-gray-700">Driver Address <span className="text-red-500">*</span></label>
                      <input type="text" className="form-control mt-1 p-2 border rounded w-full"/>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="student-submit">
                      <button type="submit" className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
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

export default AddTransport
