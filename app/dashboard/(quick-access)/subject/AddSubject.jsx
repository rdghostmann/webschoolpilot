import Link from 'next/link'
import React from 'react'

export const AddSubject = () => {
  return (
    <div className="mx-4 ">
      <div className="flex flex-col justify-start px-4 pt-4">
        <h3 className="text-xl font-bold">Add Subject</h3>
        <ul className="breadcrumb flex space-x-2">
          {/* <li className="breadcrumb-item"><Link href="subjects" className="text-blue-600 hover:underline">Subject</Link></li> */}
          {/* <li className="breadcrumb-item text-gray-500">Add Subject</li> */}
        </ul>
      </div>

          <div className="card bg-white shadow-md rounded-lg">
            <div className="card-body p-4">
              <form>
                <div className="row">
                  <div className="col-12 mb-4">
                    <h5 className="form-title text-lg font-medium"><span>Subject Information</span></h5>
                  </div>
                  <div className="col-12 sm:col-4 mb-4">
                    <div className="form-group">
                      <label htmlFor="subjectID" className="block text-sm font-medium text-gray-700">Subject ID <span className="text-red-500">*</span></label>
                      <input id="subjectID" name="subjectID" type="text" className="form-control mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="col-12 sm:col-4 mb-4">
                    <div className="form-group">
                      <label htmlFor="subjectName" className="block text-sm font-medium text-gray-700">Subject Name <span className="text-red-500">*</span></label>
                      <input id="subjectName" name="subjectName" type="text" className="form-control mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="col-12 sm:col-4 mb-4">
                    <div className="form-group">
                      <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class <span className="text-red-500">*</span></label>
                      <input id="class" name="class" type="text" className="form-control mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="student-submit">
                      <button type="submit" className="btn btn-primary bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
      </div>
    </div>

  )
}
