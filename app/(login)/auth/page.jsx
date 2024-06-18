"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import loginImage from '../../../public/Institution.png';

import { RiLockPasswordLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";


const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status: sessionStatus } = useSession();
  
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard/admin");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard/admin");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return (
      <div className="bg-gradient-to-tr from-indigo-6000 to-red-400 w-full flex items-center justify-center h-screen">
        <div className="max-w-5xl mx-auto ">
        <h1 className="animate-bounce text-2xl text-white font-bold">SchoolPilot Loading...</h1>
        </div>
      </div>
    );
  }

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded shadow">
          <div className="border flex justify-center">
            <Image src={loginImage} alt="Logo" className="w-1/2 h-auto" priority />
          </div>
          <div className="mt-6">
            <h1 className="text-center text-2xl font-bold">Login to SchoolPilot🚀</h1>
           
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="mb-4 relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="email"
                  />
                  <span className="absolute top-1/2 right-0 pr-3 flex items-center text-gray-500">
                   <MdAlternateEmail fontSize={20} />
                  </span>
                </div>
                <div className="mb-4 relative">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  <span className="absolute top-1/2 right-0 pr-3 flex items-center justify-center text-gray-500">
                    <RiLockPasswordLine fontSize={20} />
                  </span>
                </div>
              </div>
              <p className="text-red-600 text-[16px] mb-4">{error && error}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    autoComplete="off"
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password">
                    <span className="font-medium text-indigo-600 hover:text-indigo-500">Forgot Password?</span>
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
                </button>
              </div>
              <p className="text-sm text-slate-600 text-center">Don't have an account. <Link href="/get-started" className="text-indigo-500">Register</Link></p>
            </form>

       

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
