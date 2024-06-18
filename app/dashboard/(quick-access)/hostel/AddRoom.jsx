import React from 'react'
import Link from 'next/link'

const AddRoom = () => {
  return (
    <div className="content container mx-auto p-4">

      <div className="page-header mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Add Rooms</h3>
            <ul className="flex space-x-2 text-sm text-gray-500">
              <li><Link href="/hostel"><a>Hostel</a></Link></li>
              <li>/</li>
              <li>Add Rooms</li>
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
                    <h5 className="text-lg font-semibold"><span>Room Information</span></h5>
                  </div>
                  <div className="w-full sm:w-1/3 p-2">
                    <div className="form-group">
                      <label className="block text-gray-700">Block <span className="text-red-500">*</span></label>
                      <input type="text" className="form-control w-full border rounded px-2 py-1" />
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 p-2">
                    <div className="form-group">
                      <label className="block text-gray-700">Room No <span className="text-red-500">*</span></label>
                      <input type="text" className="form-control w-full border rounded px-2 py-1" />
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 p-2">
                    <div className="form-group">
                      <label className="block text-gray-700">Room Type <span className="text-red-500">*</span></label>
                      <select className="form-control w-full border rounded px-2 py-1">
                        <option>Select Type</option>
                        <option>Normal</option>
                        <option>AC</option>
                        <option>Suite</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 p-2">
                    <div className="form-group">
                      <label className="block text-gray-700">No of Beds <span className="text-red-500">*</span></label>
                      <input type="text" className="form-control w-full border rounded px-2 py-1" />
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 p-2">
                    <div className="form-group">
                      <label className="block text-gray-700">Cost per Bed <span className="text-red-500">*</span></label>
                      <input type="text" className="form-control w-full border rounded px-2 py-1" />
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 p-2">
                    <div className="form-group">
                      <label className="block text-gray-700">Availability <span className="text-red-500">*</span></label>
                      <select className="form-control w-full border rounded px-2 py-1">
                        <option>Select Availability</option>
                        <option>Available</option>
                        <option>Not Available</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <div className="form-group">
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

export default AddRoom
