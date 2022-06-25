import React from "react";
import {
  MdNotes,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineSearch,
  MdForum,
  MdPhone,
  MdOutlineMoreHoriz,
} from "react-icons/md";

export default function SubSidebar() {
  const users = [
    {
      imgUrl:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Hari Irawan",
      isActive: true,
      status: "Developer",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Maulana Malik",
      isActive: true,
      status: "UI/UX Designer",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Rizal Syafutra",
      isActive: false,
      status: "Back End",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Zahratul Hasna",
      isActive: false,
      status: "Front End Mobile",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Siti hidayat",
      isActive: true,
      status: "Ui/Ux Designer",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Khairul Wathon",
      isActive: false,
      status: "Front End Web",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Muhammad Alfing",
      isActive: false,
      status: "Front End Web",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Irwan Hadi",
      isActive: false,
      status: "Front End Web",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Hendrawinata",
      isActive: false,
      status: "Front End Web",
    },
  ];

  return (
    <div className="bg-violet-50 w-2/5 ">
      <div className="flex flex-row border-b border-b-gray-200 items-center px-8  h-20">
        <div className="flex-1 flex flex-row items-center ">
          <div className="border border-gray-200 rounded-md bg-white p-2 mr-4">
            <MdNotes size={25} />
          </div>
          <h3 className="text-xl">Contacts</h3>
        </div>
        <div className="space-x-2 flex items-center">
          <div className="border border-gray-200 rounded-md bg-white p-2">
            <MdKeyboardArrowLeft size={20} />
          </div>
          <div className="border border-gray-200 rounded-md bg-white p-2">
            <MdKeyboardArrowRight size={20} />
          </div>
        </div>
      </div>
      <div className="px-8 pt-7 ">
        <span className="text-sm font-normal text-gray-400">
          Search for a contact
        </span>
        <div className="flex flex-row">
          <span className="flex-1 text-base font-bold text-gray-800">
            Name, email or phone number
          </span>
          <MdOutlineSearch size={20} />
        </div>
        <div className="space-y-3 mt-5">
          {users.map((val, index) => {
            return <User key={index} {...val} />;
          })}
        </div>
      </div>
    </div>
  );
}

function User({ imgUrl, isActive, name, status }) {
  return (
    <div className="flex flex-row">
      <div className="w-9 h-9  mr-4 relative">
        <img src={imgUrl} className="w-9 h-9 object-cover rounded-xl" />
        <span
          className={`w-3 h-3 rounded-full ${
            isActive ? "bg-green-500" : "bg-orange-400"
          } absolute right-0 bottom-0 border-2 border-white`}
        />
      </div>
      <div className="flex-1 flex flex-col">
        <span className="font-bold text-sm">{name}</span>
        <span className="font-light text-sm text-gray-400">{status}</span>
      </div>
      <div className="flex flex-row space-x-2 items-center ">
        <div className="bg-white p-2 rounded-lg border border-gray-200">
          <MdForum size={20} className="text-gray-500" />
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200">
          <MdPhone size={20} className="text-gray-500" />
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200">
          <MdOutlineMoreHoriz size={20} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}
