import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import LogoSplide from "@/components/LogoSplide/LogoSplide";
import Footer from "@/components/Footer/Footer";



// import streamlineImg from '../../public/assets/img/photo-1524995997946-a1c2e315a42f.jpg';
import streamlineImg from '/public/Streamline.png';

// import recordImg from '../../public/assets/img/photo-1488722796624-0aa6f1bb6399.jpg'
import recordImg from '/public/RecordResult.png';


// import handlePaymentImg from '../../public/assets/img/photo-1596496181935-7801d2065877.jpg'
import handlePaymentImg from '/public/HandlePayment.png';





import backupSystem from '../public/assets/img/backup-system2.png'
import parents from '../public/assets/img/parents.png'
import security from '../public/assets/img/security.png'
import teacherStaff from '../public/assets/img/teacher-staff.png'
import student from '../public/assets/img/students.png'
import admincontrol from '../public/assets/img/admin-control.png'
import Features from "@/components/Features/Features";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <LogoSplide />
      <section id="school-management-made-easy" className="p-6 my-10">
        <h2 className="w-full mx-auto text-4xl font-extrabold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">School Management<br className="hidden md:block" /> Made Easy</h2>
        <p className="w-full md:w-2/3 mx-auto text-center leading-6">Organize and manage your educational curriculum. <br className="hidden md:block" /> Managing an institution requires seamless efficient management of time, which in turn enhances productivity.</p>

        <ul className="list-none max-w-6xl  mx-auto my-12 grid grid-cols-1 place-items-center justify-start sm:grid sm:grid-cols-2 md:grid-cols-3 items-center gap-2 gap-y-10 ">

          <li className="w-full overflow-hidden sm:w-5/6 flex flex-col-reverse items-center border-slate-900 dark:border-gray-100 bg-white py-6 px-2  shadow-xl">
            {/* <Image className="block w-full mb-3 md:w-auto md:mt-2 relative -right-6 sm:left-0 sm:rounded-none -left-6 rounded-e-lg" src={streamlineImg} width={1080} height={720} placeholder="blur" priority alt="img" /> */}
            <Image className="block w-full mb-3 md:w-auto md:mt-2 relative sm:rounded-none " src={streamlineImg} width={311} height={311} placeholder="blur" priority alt="img" />
            <div className="px-2 h-fit sm:h-fit md:h-fit overflow-y-hidden ">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white md:">Streamline School<br className="hidden sm:block md:hidden" /> Operations.</h3>
              <p className="my-3 dark:text-slate-400 text-sm sm:text-base md:text-sm">SchoolPilot offers a user-friendly interface to streamline administrative tasks, making it easier for schools to manage day-to-day operations efficiently..</p>
            </div>

          </li>

          <li className="w-full overflow-hidden sm:w-5/6 flex flex-col-reverse items-center  border-slate-900 dark:border-gray-100 bg-white py-6 px-2  shadow-xl">
            {/* <Image className="block w-full mb-3 md:w-auto md:mt-2 relative -right-6 sm:right-0 sm:rounded-none rounded-s-lg" src={recordImg} width={1080} height={720} placeholder="blur" priority alt="img" /> */}
            <Image className="block w-full mb-3 md:w-auto md:mt-2 relative sm:rounded-none " src={recordImg} width={310} height={310} placeholder="blur" priority alt="img" />

            <div className="px-2 h-fit sm:h-fit md:h-fit overflow-y-hidden ">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white md:">Record Results Seamlessly</h3>
              <p className="my-3 dark:text-slate-400 text-sm sm:text-base md:text-sm">With SchoolPilot, recording and accessing student results is a breeze. Our software simplifies result management, ensuring accuracy and ease of access.</p>
            </div>

          </li>

          <li className="w-full overflow-hidden sm:w-5/6 flex flex-col-reverse items-center  border-slate-900 dark:border-gray-100 bg-white py-6 px-2  shadow-xl">
            {/* <Image className="block w-full mb-3 md:w-auto md:mt-2 relative -right-6 sm:left-0 sm:rounded-none -left-6 rounded-e-lg" src={handlePaymentImg} width={1080} height={720} placeholder="blur" priority alt="img" /> */}
            <Image className="block w-full mb-3 md:w-auto md:mt-2 relative sm:rounded-none " src={handlePaymentImg} width={320} height={319} placeholder="blur" priority alt="img" />

            <div className="px-2 h-fit sm:h-fit md:h-fit overflow-y-hidden ">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white md:">Handle Payments with Ease.</h3>
              <p className="my-3 dark:text-slate-400 text-sm sm:text-base md:text-sm">SchoolPilot simplifies the payment process for schools, allowing them to manage fees, invoices, and transactions seamlessly, providing a hassle-free experience for both the institution and parents.</p>
            </div>

          </li>

        </ul>

        <hr className="mx-auto border border-black dark:border-white w-1/2" />
      </section>
      <Features />


      <section id="Educational-management-made-easy" className="p-6 my-12">
        <h2 className="text-3xl text-center font-extrabold md:w-2/3 md:mx-auto lg: sm:text-5xl mb-6 text-slate-900 dark:text-white ">An Educational Management System</h2>
        <p className="text-base text-center font-normal md:w-2/3 md:mx-auto lg: ">SchoolPilot is a complete solution for every institute such as kindergarten, school and any other academic institution to manage operations quickly and digital efficiently.</p>

        <ul className="list-none text-center max-w-sm mx-auto my-5 grid grid-cols-2 items-center justify-center divide-x-2 divide-y-2 divide-slate-50">
          <li className="col-span-1 cursor-pointer shadow-xl py-2 px-3 text-white bg-gradient-to-tr from-blue-500 from-20% to-blue-400 to-60%">Kindergarten</li>
          <li className="col-span-1 cursor-pointer shadow-xl py-2 px-3 bg-gradient-to-tr from-slate-200 to-slate-300 ">School</li>
          <li className="col-span-2 cursor-pointer shadow-xl py-2 px-3 bg-gradient-to-tr from-slate-200 to-slate-300 ">Academic Institution</li>
        </ul>

      </section>

      <section className="w-full p-6 bg-slate-100">

        <div className="flex flex-col-reverse md:flex-row  max-w-7xl mx-auto ">


          <div className="w-full md:w-1/2 p-2 space-y-2 ">

            {/* <ul className="max-w-md mx-auto flex flex-wrap space-x-4 items-center justify-around  p-2"> */}
            <ul className="max-w-md mx-auto grid grid-cols-3 gap-2 p-2">

              {/* <li className="max-w-24 h-32 p-2 bg-slate-200 rounded-sm text-center text-xs text-nowrap  "> */}
              <li className="p-2 bg-slate-200 rounded-sm text-center text-xs text-nowrap  ">
                <Image className="w-full rounded-sm" src={teacherStaff} alt="" width="660" height="664" priority />
                Teacher/Staff
              </li>

              <li className="p-2 bg-slate-200 rounded-sm text-center text-xs text-nowrap  ">
                <Image className="w-full rounded-sm" src={parents} alt="core-essential" sizes="100vw" width="660" height="664" priority />
                Parent
              </li>
              <li className="p-2 bg-slate-200 rounded-sm text-center text-xs text-nowrap  ">
                <Image className="w-full rounded-sm" src={student} alt="core-essential" sizes="100vw" width="660" height="664" priority />
                Student
              </li>

              <li className="p-2 bg-slate-200 rounded-sm text-center text-xs text-nowrap  ">
                <Image className="w-full rounded-sm" src={security} alt="core-essential" sizes="100vw" width="660" height="664" priority />
                Administrator
              </li>

              <li className="p-2 bg-slate-200 rounded-sm text-center text-xs text-nowrap  ">
                <Image className="w-full rounded-sm" src={backupSystem} alt="core-essential" sizes="100vw" width="660" height="664" priority />
                Backup<br />system
              </li>


              <li className="p-2 bg-slate-200 rounded-sm text-center text-xs text-nowrap  ">
                <Image className="w-full rounded-sm" src={admincontrol} alt="core-essential" sizes="100vw" width={660} height={664} priority />
                Adminstrative<br /> Control
              </li>


            </ul>


          </div>

          <div className="w-full md:w-1/2 p-2 ">

            <div className="space-y-3 sm:text-center ">

              <h3 className="w-full mx-auto text-lg sm:w-3/5 md:w-full text-left font-bold text-slate-900 ">Core Essential Modules</h3>
              <div className="w-full mx-auto text-base sm:w-3/5 md:w-full text-left">
                <hr className=" mx-0 w-10 border border-blue-500 rounded-lg" />
              </div>
              <p className="w-full mx-auto text-base sm:w-3/5 md:w-full text-left text-slate-700 ">SchoolPilot has a Parent, Student, Teacher, Administrator panel. With 24-hour auto-pilot backup system guarantees data security and uninterrupted access to essential school information to enhance the educational experience for all stakeholders</p>

              <p className="mx-auto text-base sm:w-3/5 md:w-full text-left text-slate-700 ">With dedicated panels for Parents, Students, Teachers, and Administrators, SchoolPilot ensures seamless communication, efficient management, and effective learning outcomes. </p>



            </div>
          </div>
        </div>

      </section>


      <Footer />
    </>
  );
}
