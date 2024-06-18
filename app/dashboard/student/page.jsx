import Image from 'next/image';
import Link from 'next/link';
import { IoEllipsisVertical } from "react-icons/io5";

export default function StudentDashboard () {
  return (
    <div className="border border-black w-full px-4 py-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-bold">Welcome Bruklin!</h3>
          <ul className="flex space-x-2 text-gray-500 text-xs">
            <li><Link href="index" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li className="text-gray-700">Student</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        {[
          { title: 'All Courses', count: '04/06', icon: 'teacher-icon-01.svg' },
          { title: 'All Projects', count: '40/60', icon: 'teacher-icon-02.svg' },
          { title: 'Test Attended', count: '30/50', icon: 'student-icon-01.svg' },
          { title: 'Test Passed', count: '15/20', icon: 'student-icon-02.svg' },
        ].map((item, index) => (
          <div key={index} className="flex">
            <div className="card bg-white shadow-md w-full p-4">
              <div className="w-full flex justify-between items-center">
                <div>
                  <h6 className="text-sm font-medium">{item.title}</h6>
                  <h3 className="text-lg font-semibold">{item.count}</h3>
                </div>
                <div>
                  <Image src={`/assets/img/icons/${item.icon}`} alt="Dashboard Icon" width={40} height={40} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="col">
          <div className="card bg-white shadow-md mb-6">
            {/* <div className="card-header flex justify-between items-center p-4 border-b">
              <h5 className="text-xl font-medium">Today’s Lesson</h5>
              <ul className="flex space-x-2 text-gray-500">
                <li><span className="bg-blue-500 rounded-full w-2 h-2 inline-block"></span><span className="bg-gray-300 rounded-full w-2 h-2 inline-block"></span><span className="bg-gray-300 rounded-full w-2 h-2 inline-block"></span></li>
                <li><Link href="/" className="hover:text-gray-700">View All</Link></li>
                <li><Link href="/" className="hover:text-gray-700"><IoEllipsisVertical /></Link></li>
              </ul>
            </div> */}


            {/* <div className="p-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <div className="circle-bar circle-bar2 relative">
                    <div className="circle-graph2" data-percent="80">
                      <b className="text-2xl">80%</b>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 grid grid-cols-2 gap-4">
                  {[
                    { title: 'Class', subtitle: 'Electrical Engg', icon: 'lesson-icon-01.svg' },
                    { title: 'Lessons', subtitle: '5 Lessons', icon: 'lesson-icon-02.svg' },
                    { title: 'Time', subtitle: 'Lessons', icon: 'lesson-icon-03.svg' },
                    { title: 'Assignment', subtitle: '5 Assignment', icon: 'lesson-icon-04.svg' },
                    { title: 'Staff', subtitle: 'John Doe', icon: 'lesson-icon-05.svg' },
                    { title: 'Lesson Learned', subtitle: '10/50', icon: 'lesson-icon-06.svg' },
                  ].map((lesson, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Image src={`/assets/img/icons/${lesson.icon}`} alt="" width={40} height={40} />
                      <div>
                        <h5 className="text-sm font-medium">{lesson.title}</h5>
                        <h4 className="text-lg font-semibold">{lesson.subtitle}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                <button type="submit" className="btn bg-blue-500 text-white px-4 py-2 rounded-md">Skip</button>
                <button type="submit" className="btn bg-blue-500 text-white px-4 py-2 rounded-md">Continue</button>
              </div>
            </div> */}

          </div>

          {/* <div className="card bg-white shadow-md mb-6">
            <div className="card-header flex justify-between items-center p-4 border-b">
              <h5 className="text-xl font-medium">Learning Activity</h5>
              <ul className="flex space-x-2 text-gray-500">
                <li><span className="bg-blue-500 rounded-full w-2 h-2 inline-block"></span>Teacher</li>
                <li><span className="bg-green-500 rounded-full w-2 h-2 inline-block"></span>Student</li>
                <li><Link href="/" className="hover:text-gray-700"><i className="fas fa-ellipsis-v"></i></Link></li>
              </ul>
            </div>
            <div className="card-body p-4">
              <div id="apexcharts-area"></div>
            </div>
          </div> */}

          {/* <div className="card bg-white shadow-md mb-6">
            <div className="card-header flex justify-between items-center p-4 border-b">
              <h5 className="text-xl font-medium">Teaching History</h5>
              <ul className="flex space-x-2 text-gray-500">
                <li><Link href="/" className="hover:text-gray-700"><i className="fas fa-ellipsis-v"></i></Link></li>
              </ul>
            </div>
            <div className="card-body p-4">
              <div className="teaching-card">
                <ul className="flex space-x-4">
                  <li>Sep22</li>
                  <li>Sep23</li>
                  <li>Sep24</li>
                </ul>
                <ul className="activity-feed mt-4 space-y-4">
                  {[
                    { subject: 'Mathematics', date: 'September 5, 2022', time: '09:00 am - 10:00 am (60 Minutes)', status: 'In Progress' },
                    { subject: 'Geography', date: 'September 5, 2022', time: '09:00 am - 10:00 am (60 Minutes)', status: 'Completed' },
                    { subject: 'Botony', date: 'September 5, 2022', time: '09:00 am - 10:00 am (60 Minutes)', status: 'In Progress' },
                  ].map((activity, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <div>
                        <span className="block text-lg font-medium">{activity.subject}</span>
                        <ul className="flex space-x-2 text-gray-500">
                          <li><i className="fas fa-calendar-alt mr-2"></i>{activity.date}</li>
                          <li>|</li>
                          <li><i className="fas fa-clock mr-2"></i>{activity.time}</li>
                        </ul>
                      </div>
                      <div>
                        <button type="submit" className="btn bg-blue-500 text-white px-4 py-2 rounded-md">{activity.status}</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="col-span-1">
        <div className="card bg-white shadow-md p-4">
          <div className="calendar-container mb-6"></div>
          <div className="up-come-header flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Upcoming Events</h2>
            <Link href="/" className="text-gray-500 hover:text-gray-700"><i className="feather-plus"></i></Link>
          </div>
          {[
            { date: '10 Jan', time: '08:00 am', subject: 'Botony', description: 'Lorem ipsum sit amet', startTime: '08:00 - 09:00 am' },
            { date: '10 Jan', time: '09:00 am', subject: 'Botony', description: 'Lorem ipsum sit amet', startTime: '09:00 - 10:00 am' },
            { date: '10 Jan', time: '10:00 am', subject: 'Botony', description: 'Lorem ipsum sit amet', startTime: '10:00 - 11:00 am' },
            { date: '10 Jan', time: '08:00 am', subject: 'English', description: 'Lorem ipsum sit amet', startTime: '08:00 - 09:00 am' },
            { date: '10 Jan', time: '09:00 am', subject: 'Mathematics', description: 'Lorem ipsum sit amet', startTime: '09:00 - 10:00 am' },
            { date: '10 Jan', time: '10:00 am', subject: 'History', description: 'Lorem ipsum sit amet', startTime: '10:00 - 11:00 am' },
            { date: '10 Jan', time: '11:00 am', subject: 'Break', description: 'Lorem ipsum sit amet', startTime: '11:00 - 12:00 am' },
            { date: '10 Jan', time: '11:30 am', subject: 'History', description: 'Lorem ipsum sit amet', startTime: '11:30 - 12:00 am' },
          ].map((event, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">{event.date}</h3>
                <span className="text-gray-500"><i className="fas fa-ellipsis-h"></i></span>
              </div>
              <div className="calendar-details mb-4">
                <p className="text-gray-500">{event.time}</p>
                <div className="bg-gray-100 p-4 rounded-md">
                  <h4 className="text-lg font-semibold">{event.subject}</h4>
                  <h5 className="text-sm text-gray-500">{event.description}</h5>
                  <span className="text-sm text-gray-500">{event.startTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      </div>
    </div>
  );
};

;
