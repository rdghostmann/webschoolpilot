"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddStaffForm() {
  const router = useRouter();
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const fullName = formData.get('fullName');
      const phoneNumber = formData.get('phoneNumber');
      const dateOfEmployment = formData.get('dateOfEmployment');
      const profilePicture = formData.get('profilePicture');
      const role = formData.get('role');
      const classAssigned = formData.get('classAssigned');
      const subjectAssigned = formData.get('subjectAssigned');
      const isFormTeacher = formData.get('isFormTeacher') === 'on';
      const staffID = formData.get('staffID');
      const gender = formData.get('gender');
      const dob = formData.get('dob');
      const qualification = formData.get('qualification');
      const experience = formData.get('experience');
      const username = formData.get('username');
      const email = formData.get('email');
      const password = formData.get('password');
      const repeatPassword = formData.get('repeatPassword');
      const address = formData.get('address');
      const city = formData.get('city');
      const state = formData.get('state');
      const zipCode = formData.get('zipCode');
      const country = formData.get('country');
      const uniqueID = formData.get('uniqueID');

      if (password !== repeatPassword) {
        setPasswordMismatch(true);
        return;
      }

      const response = await fetch("/api/staffs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          dateOfEmployment,
          profilePicture,
          role,
          classAssigned,
          subjectAssigned,
          isFormTeacher,
          staffID,
          gender,
          dob,
          qualification,
          experience,
          username,
          email,
          password,
          address,
          city,
          state,
          zipCode,
          country,
          uniqueID,
        })
      });

      if (response.ok) {
        console.log("Staff Created Successfully");
        setSuccess(true)
        setError("");
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      console.error(error.message);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      {success ? (
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold mb-4">Staff Created Successfully!</h3>
          <button
            className="py-2 px-4 bg-green-500 text-white rounded"
            onClick={() => router.push('/dashboard/onboardstaff')}
          >
            Onboard Another Staff
          </button>
        </div>
      ) : (
        <>
          <div className="page-header mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Add Staff</h3>
              <ul className="breadcrumb flex space-x-2">
                <li className="breadcrumb-item">
                  <Link href="/staff">Staff</Link>
                </li>
                <li>/</li>
                <li className="breadcrumb-item active text-blue-500 cursor-pointer">Add Staff</li>
              </ul>
            </div>
          </div>

          <div className="shadow-lg p-6 bg-white rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <h5 className="text-lg font-semibold mb-4">Basic Details</h5>
                </div>
                <div>
                  <p className="block font-medium">Full Name <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="fullName"
                    type="text"
                    placeholder="Enter Full Name"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Gender <span className="text-red-500">*</span></p>
                  <select
                    className="mt-1 p-2 w-full border rounded"
                    name="gender"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <p className="block font-medium">Date Of Birth <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="dob"
                    type="date"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Phone Number <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="phoneNumber"
                    type="text"
                    placeholder="Enter Phone Number"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Date of Employment <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="dateOfEmployment"
                    type="date"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Profile Picture</p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="profilePicture"
                    type="text"
                    autoComplete="false"
                  />
                </div>
                <div>
                  <p className="block font-medium">Qualification <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="qualification"
                    type="text"
                    placeholder="Enter Qualification"
                    autoComplete="true"
                  />
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
                  <p className="block font-medium">Staff ID <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="staffID"
                    type="text"
                    placeholder="Enter Staff ID"
                    autoComplete="true"
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <h5 className="text-lg font-semibold mb-4">Role Assignment</h5>
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <p className="block font-medium">Role <span className="text-red-500">*</span></p>
                  <div className="flex flex-wrap">
                    {['Principal', 'Vice Principal', 'Dean', 'Bursar', 'Teacher', 'Form Teacher', 'Matron/Hostel Mistress', 'Patron/Hostel Master', 'Cook', 'Security', 'Gate-Keeper', 'Canteen', 'Driver', 'Cleaner'].map((role) => (
                      <div key={role} className="mr-4">
                        <input
                          type="radio"
                          id={role}
                          name="role"
                          value={role}
                          className="mr-2"
                        />
                        <label htmlFor={role} className="font-medium">{role}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="block font-medium">Assign Class</p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="classAssigned"
                    type="text"
                    placeholder="Enter Class"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Assign Subject</p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="subjectAssigned"
                    type="text"
                    placeholder="Enter Subject"
                    autoComplete="true"
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <div className="flex items-center">
                    <input
                      id="isFormTeacher"
                      name="isFormTeacher"
                      type="checkbox"
                      className="mr-2"
                    />
                    <label htmlFor="isFormTeacher" className="font-medium">Make the teacher a form teacher for a particular class (for attendance marking)</label>
                  </div>
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <h5 className="text-lg font-semibold mb-4">Login Details</h5>
                </div>
                <div>
                  <p className="block font-medium">Username <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="username"
                    type="text"
                    placeholder="Enter Username"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Email ID <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
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
                  <p className="block font-medium">Repeat Password <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="repeatPassword"
                    type="password"
                    placeholder="Repeat Password"
                    autoComplete="true"
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <h5 className="text-lg font-semibold mb-4">Address Details</h5>
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
                <div>
                  <p className="block font-medium">City <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="city"
                    type="text"
                    placeholder="Enter City"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">State <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="state"
                    type="text"
                    placeholder="Enter State"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Zip Code <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="zipCode"
                    type="text"
                    placeholder="Enter Zip Code"
                    autoComplete="true"
                  />
                </div>
                <div>
                  <p className="block font-medium">Country <span className="text-red-500">*</span></p>
                  <input
                    className="mt-1 p-2 w-full border rounded"
                    name="country"
                    type="text"
                    placeholder="Enter Country"
                    autoComplete="true"
                  />
                </div>
                {passwordMismatch && (
                  <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                    <p className="text-red-500 font-semibold">Passwords do not match</p>
                  </div>
                )}
                {error && (
                  <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                    <p className="text-red-500 font-semibold">{error}</p>
                  </div>
                )}
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    type="submit"
                  >
                    Add Staff
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>)}
    </div>
  );
};


