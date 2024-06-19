import Image from 'next/image';
import Link from 'next/link';
import badgeImg from '../../../../public/assets/img/icons/header-icon-01.svg';
import badgeIcon from '../../../../public/assets/img/icons/header-icon-05.svg';
// import avatar1 from '../../../../../public/assets/img/profiles/avatar-01.jpg';
// import avatar11 from '../../../../../public/assets/img/profiles/avatar-11.jpg';
// import avatar2 from '../../../../../public/assets/img/profiles/avatar-02.jpg';
// import avatar13 from '../../../../../public/assets/img/profiles/avatar-13.jpg';
// import avatar17 from '../../../../../public/assets/img/profiles/avatar-17.jpg';
// import headerIcon4 from '../../../../../public/assets/img/icons/header-icon-04.svg';

import { SearchIcon } from 'lucide-react';

import {signOut, useSession} from 'next-auth/react'

const DashboardTopHeader = () => {


  const {data: session} = useSession();

  return (
    <div className="w-full flex items-center justify-between header">


      {/* top-nav-search */}
      <div className=" border-slate-300 overflow-hidden rounded-md focus:outline-1 focus:ring-offset-1">
        <form className=" bg-white p-1 flex items-center">
          <input type="text" className="px-2 border-none outline-none" placeholder="Search here" />
          <button className="" >
            <SearchIcon />
          </button>
        </form>
      </div>

      <ul className="flex space-x-4 items-center ">
       
        {session ? (
          <>
          <li className="nav-item dropdown language-drop me-2">
          <button onClick={()=>{signOut()}} className="cursor-pointer p-2 px-5 bg-blue-500 rounded-" >
            Logout
          </button>
          
          </li>
          </>
        ) : ( 
          <>
            Login
          </>
        )}

        <li className="nav-item dropdown language-drop me-2">
          <button className="dropdown-toggle " data-bs-toggle="dropdown">
            <Image src={badgeImg} alt="" width={24} height={24} />
          </button>
          
          {/* <div className="dropdown-menu">
            <Link className="dropdown-item" href="#">
              <i className="flag flag-lr me-2"></i>English
            </Link>
            <Link className="dropdown-item" href="#">
              <i className="flag flag-bl me-2"></i>Francais
            </Link>
            <Link className="dropdown-item" href="#">
              <i className="flag flag-cn me-2"></i>Turkce
            </Link>
          </div> */}
        </li>

        <li className=" nav-item dropdown noti-dropdown me-2">
          <button className="dropdown-toggle " data-bs-toggle="dropdown">
            <Image src={badgeIcon} alt="" width={24} height={24} />
          </button>

          {/* <div className="bg-gray-100 flex flex-col dropdown-menu notifications">
            <div className="topnav-dropdown-header flex items-center justify-between">
              <span className="notification-title">Notifications</span>
              <button className="clear-noti"> Clear All </button>
            </div>

            <div className="border-t noti-content">
              <ul className="overflow-y-scroll  notification-list">
                <li className="notification-message">
                  <Link href="#" >
                    <div className="flex">
                      <span className="avatar avatar-sm flex-shrink-0">
                        <Image className="avatar-img rounded-full" alt="User Image" src={avatar2} width={31} height={31} />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Carlson Tech</span> has approved <span className="noti-title">your estimate</span>
                        </p>
                        <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link href="#" >
                    <div className="flex">
                      <span className="avatar avatar-sm flex-shrink-0">
                        <Image className="avatar-img rounded-full" alt="User Image" src={avatar11} width={31} height={31} />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">International Software Inc</span> has sent you a invoice in the amount of <span className="noti-title">$218</span>
                        </p>
                        <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link href="#" >
                    <div className="flex">
                      <span className="avatar avatar-sm flex-shrink-0">
                        <Image className="avatar-img rounded-full" alt="User Image" src={avatar17} width={31} height={31} />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">John Hendry</span> sent a cancellation request <span className="noti-title">Apple iPhone XR</span>
                        </p>
                        <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link href="#" >
                    <div className="flex">
                      <span className="avatar avatar-sm flex-shrink-0">
                        <Image className="avatar-img rounded-full" alt="User Image" src={avatar13} width={31} height={31} />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Mercury Software Inc</span> added a new product <span className="noti-title">Apple MacBook Pro</span>
                        </p>
                        <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <Link href="#">View all Notifications</Link>
            </div>
          </div> */}
        </li>


        <li className="nav-item dropdown has-arrow new-user-menus">
          <button className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
            {/* <span className="user-img flex space-x-1">
              <Image className="rounded-[50%]" src={avatar1} width={31} height={31} alt="Soeng Souy" />
              <div className="">
                <h6>Soeng Souy</h6>
                <p className="text-muted mb-0">Administrator</p>
              </div>
            </span> */}
          </button>

          {/* <div className="hidden border flex flex-col divide-y-2 dropdown-menu">
            <div className="user-header bg-gray-100 flex">
              <div className="avatar avatar-sm">
                <Image src={avatar1} alt="User Image" className="avatar-img rounded-circle" width={31} height={31} />
              </div>
              <div className="user-text">
                <h6>Soeng Souy</h6>
                <p className="text-muted mb-0">Administrator</p>
              </div>
            </div>
            <Link className="dropdown-item" href="profile">My Profile</Link>
            <Link className="dropdown-item" href="inbox">Inbox</Link>
            <button className="dropdown-item" href="login">Logout</button>
          </div> */}
        </li>
      </ul>
    </div>
  );
};

export default DashboardTopHeader;
