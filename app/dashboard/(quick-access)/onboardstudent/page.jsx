"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddStudentForm() {
  const router = useRouter();
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const uniqueID = formData.get('uniqueID');
      const name = formData.get('name');
      const dob = formData.get('dob');
      const regNo = formData.get('regNo');
      const password = formData.get('password');
      const dateOfEntry = formData.get('dateOfEntry');
      const guardianName = formData.get('guardianName');
      const relationship = formData.get('relationship');
      const profilePicture = formData.get('profilePicture');
      const classOfEntry = formData.get('classOfEntry');
      const hostelName = formData.get('hostelName');
      const houseName = formData.get('houseName');
      const gender = formData.get('gender');
      const email = formData.get('email');
      const guardianPhoneNumber1 = formData.get('guardianPhoneNumber1');
      const guardianPhoneNumber2 = formData.get('guardianPhoneNumber2');
      const address = formData.get('address');


      if (password !== formData.get('confirmPassword')) {
        setPasswordMismatch(true);
        return;
      }

      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uniqueID,
          name,
          dob,
          regNo,
          password,
          dateOfEntry,
          guardianName,
          relationship,
          profilePicture,
          classOfEntry,
          hostelName,
          houseName,
          gender,
          email,
          guardianPhoneNumber1,
          guardianPhoneNumber2,
          address,
        })
      });

      if (response.ok) {
        console.log(" Student Created Successfully")
        setSuccess(true)
        setError("");
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      console.error(error.message)

    }


  };

  return (
    <div className="container mx-auto p-4">
      {success ? (
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold mb-4">Student Created Successfully!</h3>
          <Link
            className="py-2 px-4 bg-green-500 text-white rounded"
            href={'/dashboard/onboardstudent'}
          >
            Onboard Another Student
          </Link>
          
        </div>
      ) : (
        <>
          <div className="page-header mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Add Students</h3>
              <ul className="breadcrumb flex space-x-2">
                <li className="breadcrumb-item">
                  <Link href="/students">Student</Link>
                </li>
                <li>/</li>
                <li className="breadcrumb-item active text-blue-500 cursor-pointer">Add Students</li>
              </ul>
            </div>
          </div>

          <div className="shadow-lg p-6 bg-white rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <h5 className="text-lg font-semibold mb-4">Student Information</h5>
                </div>
                <div>
                  <p className="block font-medium">Unique ID <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="uniqueID"
                    type="text"
                    placeholder="Enter Unique ID"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Name <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Date of Birth <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="dob"
                    type="date"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Registration Number <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="regNo"
                    type="text"
                    placeholder="Enter Registration Number"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Password <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Confirm Password <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Date of Entry <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="dateOfEntry"
                    type="date"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Guardian Name <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="guardianName"
                    type="text"
                    placeholder="Enter Guardian Name"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Relationship <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="relationship"
                    type="text"
                    placeholder="Enter Relationship"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Profile Picture</p>
                  <input
                    id="profilePicture"
                    className="mt-1 p-2 w-full border rounded"
                    name="profilePicture"
                    type="text"
                    placeholder="Upload Profile Picture"
                    autoComplete="false"
                  />
                </div>
                <div>
                  <p className="block font-medium">Class of Entry <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="classOfEntry"
                    type="text"
                    placeholder="Enter Class of Entry"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Hostel Name</p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="hostelName"
                    type="text"
                    placeholder="Enter Hostel Name"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">House Name</p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="houseName"
                    type="text"
                    placeholder="Enter House Name"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Gender <span className="text-red-500">*</span></p>
                  <select
                    className="form-control mt-1 p-2 w-full border rounded"
                    name="gender"
                  >
                    <option value="">Select Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <p className="block font-medium">Email <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Guardian Phone Number 1 <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="guardianPhoneNumber1"
                    type="text"
                    placeholder="Enter Guardian Phone Number 1"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Guardian Phone Number 2</p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="guardianPhoneNumber2"
                    type="text"
                    placeholder="Enter Guardian Phone Number 2"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Address <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="address"
                    type="text"
                    placeholder="Enter Address"
                    autoComplete="true"
                  />
                </div>

                <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-4">
                  <button
                    type="submit" name="submit"
                    className="w-full py-2 bg-indigo-500 text-white rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>

              {passwordMismatch && (
                <div className="text-red-500 text-sm">Passwords do not match.</div>
              )}
              {error && <div className="text-red-500 text-sm">{error}</div>}
            </form>
          </div>
        </>
      )}
    </div>
  );
};

