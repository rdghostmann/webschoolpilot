import React from 'react'
import Image from 'next/image'
import fingerUi from '../../../../public/assets/img/fingerUI.png'
import { MdTouchApp } from 'react-icons/md'

export default function TeacherAttendance()  {
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [lateTime, setLateTime] = useState('0 minutes');

  const checkIn = () => {
    const currentTime = new Date();
    setCheckInTime(currentTime);

    const checkInThreshold = new Date();
    checkInThreshold.setHours(7, 30, 0, 0); // 7:30 AM

    if (currentTime > checkInThreshold) {
      const diff = Math.floor((currentTime - checkInThreshold) / (1000 * 60)); // Difference in minutes
      setLateTime(`${diff} minutes`);
    } else {
      setLateTime('0 minutes');
    }
  };

  const checkOut = () => {
    setCheckOutTime(new Date());
  };

  const formatTime = (date) => {
    if (!date) return '0';
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes}${ampm}`;
  };



  return (
    <div className="container mx-auto p-4">

      <div className="max-w-sm  shadow-lg bg-white rounded-lg">
        <div className="flex flex-col items-center">
          <div className="w-full flex ">
            <div className="w-3/5 ">
              <h3 className="text-sm font-bold mb-4">Your Attendance</h3>

              <div className="text-xs flex gap-2">
                <div className=" mb-4">
                  <p className="mr-2">Time In:</p>
                  <p className="font-bold">0</p>
                </div>
                <div className=" mb-4">
                  <p className="mr-2">Time Out:</p>
                  <p className="font-bold">0</p>
                </div>
              </div>
            </div>
            <div className="w-2/5 p-2">
              <Image className="border w-28 border-white rounded-[50%] shadow-xl" src={fingerUi} style={{ objectFit: "cover", width: "100%", height: "auto" }} width="204" height="140" alt='fingerUI' priority />
            </div>

          </div>

          <div className=" flex  space-x-4">
            <button className="text-xs py-1 px-2 bg-blue-500 transition ease-out duration-100 text-white rounded-2xl">
              <MdTouchApp size="20" className="inline" /> <span className="pe-1">Check in</span>
            </button>
            <button className="text-xs p-1 bg-red-500 transition ease-out duration-100 text-white rounded-2xl">
              <MdTouchApp size="20" className="inline" /> <span className="pe-1">Check out</span> 
            </button>
          </div>
        </div>
        <div className="w-[80%] text-xs  mx-auto flex items-center justify-center space-x-3 mt-6">
          <div className=" mb-2 ">
            <p className="mr-2 ">Check in:</p>
            <p className="font-bold">0</p>
          </div>
          <div className=" mb-2 ">
            <p className="mr-2">Check out:</p>
            <p className="font-bold">0</p>
          </div>
          <div className="mb-2 ">
            <p className="mr-2">Late time:</p>
            <p className="font-bold">0</p>
          </div>
        </div>
      </div>



    </div>

  )
}

