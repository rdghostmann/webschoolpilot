"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import loginImg from "../../public/assets/img/login.png";
import { useSession } from "next-auth/react";

const RegisterSchool = () => {
  const [error, setError] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [states, setStates] = useState([]);
  const [lgas, setLgas] = useState([]);
  const router = useRouter();

  const { data: session, status: sessionStatus } = useSession();


  const [form, setForm] = useState({
    name: "",
    state: "",
    localGovernment: "",
    city: "",
    address: "",
    gradeType: "",
    genderType: "",
    ownershipType: "",
    enrollmentType: "",
    religion: "",
    mission: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard/admin");
    }
  }, [sessionStatus, router]);

  useEffect(() => {
    fetch('https://nga-states-lga.onrender.com/fetch')
      .then(response => response.json())
      .then(data => setStates(data))
      .catch(error => console.error('Error fetching states:', error));
  }, []);

  useEffect(() => {
    if (form.state) {
      fetch(`https://nga-states-lga.onrender.com/?state=${form.state}`)
        .then(response => response.json())
        .then(data => setLgas(data))
        .catch(error => console.error('Error fetching LGAs:', error));
    }
  }, [form.state]);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.state || !form.localGovernment || !form.city || !form.address || !form.gradeType || !form.genderType || !form.ownershipType || !form.enrollmentType || !form.religion || !form.phoneNumber || !form.email || !form.password) {
      setError("Please Fill all Fields !");
      return;
    }

    if (!isValidEmail(form.email)) {
      setError("Email is invalid");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    try {
      const response = await fetch("/api/schools", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setError("");
        router.push("/auth");
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      router.replace("/get-started");
    }
  };

  return (
    <div className="w-full min-h-screen p-4 flex items-center justify-center bg-gray-100">
      <div className=" max-w-lg mx-auto">
        <div className="bg-white p-8 rounded shadow">
          <div className="bg-indigo-500 flex justify-center">
            <Image
              src={loginImg}
              alt="Logo"
              width="126"
              height="134"
              className="w-1/3 h-auto bg-cover"
              priority
            />
          </div>

          <div className="mt-6">
            <h1 className="text-center text-2xl font-bold">SchoolPilot🚀</h1>
            <p className="text-sm text-center text-gray-600">Enter details to board your Academic Institution</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    School Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    autoComplete="off"
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded relative block w-full px-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="School Full Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col space-y-4 mb-4">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="state"
                      name="state"
                      required
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={form.state}
                      onChange={handleChange}
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="localGovernment" className="block text-sm font-medium text-gray-700">
                      Local Government <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="localGovernment"
                      name="localGovernment"
                      required
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={form.localGovernment}
                      onChange={handleChange}
                      disabled={!form.state}
                    >
                      <option value="">Select Local Government</option>
                      {lgas.map((lga) => (
                        <option key={lga} value={lga}>
                          {lga}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 mb-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City/Town <span className="text-red-500">*</span>
                    </label>
                    <input
                      autoComplete="off"
                      id="city"
                      name="city"
                      type="text"
                      required
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="City/Town"
                      value={form.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      autoComplete="off"
                      id="address"
                      name="address"
                      type="text"
                      required
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Address"
                      value={form.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <span className="text-[12px] underline">(Comprehensive) <sup className="text-red-500">*</sup> For Schools that are Creche, Primary and Secondary</span>

                <div className="flex space-x-5 md:space-x-10 lg:space-x-12 mt-2">
                  <div>
                    <p className="block text-xs font-medium text-gray-700">
                      School Grade Type <span className="text-red-500">*</span>
                    </p>
                    <div className="flex flex-col space-y-2">
                      {["Creche", "Primary", "Secondary", "Comprehensive", "Tertiary"].map((type, index) => (
                        <label htmlFor={`gradeType-${index}`} key={index} className="inline-flex items-center">
                          <input
                            id={`gradeType-${index}`}
                            autoComplete="off"
                            type="radio"
                            name="gradeType"
                            value={type}
                            required
                            className="form-radio"
                            checked={form.gradeType === type}
                            onChange={handleChange}
                          />
                          <span className="ml-2 text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="block text-xs font-medium text-gray-700">
                      School Gender Type <span className="text-red-500">*</span>
                    </p>
                    <div className="flex flex-col space-y-2">
                      {["only boys", "only girls", "boys and girls"].map((type, index) => (
                        <label htmlFor={`genderType-${index}`} key={index} className="inline-flex items-center">
                          <input
                            id={`genderType-${index}`}
                            autoComplete="off"
                            type="radio"
                            name="genderType"
                            value={type}
                            required
                            className="form-radio"
                            checked={form.genderType === type}
                            onChange={handleChange}
                          />
                          <span className="ml-2 text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-5 md:space-x-10 lg:space-x-12 mt-2">
                  <div>
                    <p className="block text-xs font-medium text-gray-700">
                      School Ownership Type <span className="text-red-500">*</span>
                    </p>
                    <div className="flex flex-col space-y-2">
                      {["private", "public", ].map((type, index) => (
                        <label htmlFor={`ownershipType-${index}`} key={index} className="inline-flex items-center">
                          <input
                            id={`ownershipType-${index}`}
                            autoComplete="off"
                            type="radio"
                            name="ownershipType"
                            value={type}
                            required
                            className="form-radio"
                            checked={form.ownershipType === type}
                            onChange={handleChange}
                          />
                          <span className="ml-2 text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="block text-xs font-medium text-gray-700">
                      Enrollment Type <span className="text-red-500">*</span>
                    </p>
                    <div className="flex flex-col space-y-2">
                      {["day", "boarding", "day and boarders"].map((type, index) => (
                        <label htmlFor={`enrollmentType-${index}`} key={index} className="inline-flex items-center">
                          <input
                            id={`enrollmentType-${index}`}
                            autoComplete="off"
                            type="radio"
                            name="enrollmentType"
                            value={type}
                            required
                            className="form-radio"
                            checked={form.enrollmentType === type}
                            onChange={handleChange}
                          />
                          <span className="ml-2 text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <label htmlFor="religion" className="block text-sm font-medium text-gray-700">
                    Religion <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="religion"
                    name="religion"
                    required
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={form.religion}
                    onChange={handleChange}
                  >
                    <option value="">Select Religion</option>
                    {["Christian", "Christianity", "Muslim", "Judaism", "Islam"].map((mission) => (
                      <option key={mission} value={mission}>
                        {mission}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="mission" className="block text-sm font-medium text-gray-700">
                    School Mission <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="mission"
                    name="mission"
                    required
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={form.mission}
                    onChange={handleChange}
                  >
                    <option value="">Select Mission</option>
                    {["Catholic", "Anglican", "Pentecostal", "Sabbath", "Islam"].map((mission) => (
                      <option key={mission} value={mission}>
                        {mission}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col space-y-4 mb-4">
                  <div className="">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      autoComplete="off"
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      required
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Phone Number"
                      value={form.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Email Address"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-4 mb-4">
                  <div className="">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Password"
                      value={form.password}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      autoComplete="off"
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Confirm Password"
                      value={form.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  {passwordMismatch && (
                    <p className="text-red-500 text-sm">Passwords do not match</p>
                  )}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                      I accept the{' '}
                      <Link href="/terms">
                        <span className="text-indigo-600 hover:text-indigo-500">
                          Terms and Conditions
                        </span>
                      </Link>
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                  {error && (
                    <p className="mt-2 text-center text-sm text-red-600">{error}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSchool;
