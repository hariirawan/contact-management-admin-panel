import React from "react";
import {
  MdMic,
  MdHome,
  MdForum,
  MdPhone,
  MdDevicesOther,
  MdSupervisorAccount,
  MdDriveFolderUpload,
  MdOutlineCalendarToday,
  MdSettings,
} from "react-icons/md";

export default function Sidebar() {
  return (
    <nav className="px-5 bg-white border-r border-r-gray-300 h-screen">
      <div className="bg-logo w-10 h-10 rounded-2xl flex items-end justify-center mt-6">
        <MdMic size={30} color="white" />
      </div>
      <ul className="flex flex-col justify-center items-center mt-20 text-custom">
        <li className="py-6">
          <MdHome size={25} />
        </li>
        <li className="py-6 relative">
          <span className="w-3 h-3 rounded-full bg-green-500 absolute -right-4 top-1" />
          <MdForum size={25} />
        </li>
        <li className="py-6 relative">
          <span className="w-3 h-3 rounded-full bg-green-500 absolute -right-4 top-1" />
          <MdPhone size={25} />
        </li>
        <li className="py-6">
          <MdDevicesOther size={25} />
        </li>
        <li className="py-6">
          <MdSupervisorAccount size={25} />
        </li>
        <li className="py-6">
          <MdDriveFolderUpload size={25} />
        </li>
        <li className="py-6">
          <MdOutlineCalendarToday size={25} />
        </li>
        <li className="py-6">
          <MdSettings size={25} />
        </li>
      </ul>
    </nav>
  );
}
