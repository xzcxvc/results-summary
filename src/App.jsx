import React from "react";
import "./App.css";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { LiaBrainSolid } from "react-icons/lia";
import { BsChatDots } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
function App() {
  return (
    <>
      <div className="w-screen min-h-screen">
        <div className="flex flex-col min-h-screen justify-center items-center">
          <div className=" lg:flex sm:w-7/12 lg:w-4/12 items-center justify-center lg:rounded-[20px] lg:shadow-2xl lg:shadow-indigo-200 ">
            <div
              className="text-white result px-12 lg:py-9 sm:gap-2 lg:gap-5 flex flex-col items-center justify-center
           bg-gradient-to-b from-indigo-500 to-indigo-700 sm:w-full lg:w-1/2 relative sm:rounded-b-[40px] lg:rounded-[20px] sm:py-6 "
            >
              <span className="sm:text-[18px] lg:text-[20px] font-medium text-gray-300">
                Your Result
              </span>
              <div className="circle flex flex-col items-center justify-center sm:w-[135px] sm:h-[135px] lg:w-[170px] lg:h-[170px] rounded-full bg-gradient-to-b from-indigo-700 to-indigo-600 ">
                <span className="score font-medium text-[56px]">76</span>
                <span className="of-score font-medium text-gray-300 text-[16px]">
                  of 100
                </span>
              </div>
              <div className="flex items-center flex-col">
                <span className="sm:text-[24px] lg:text-[28px] font-medium">
                  Great
                </span>
              </div>
              <div className="flex items-center flex-col">
                <p className="font-medium text-gray-300 sm:text-[14px] lg:text-[16px] text-center">
                  You scored higher than 65% of the people who have taken these
                  tests.
                </p>
              </div>
            </div>

            <div className="summary p-9 flex gap-5 flex-col lg:w-6/12 relative rounded-[20px]">
              <span className="sm:text-[18px] lg:text-[20px] font-semibold mb-4">
                Summary
              </span>
              <div className="flex flex-col gap-4">
                <div className="reaction flex justify-between bg-[#FEF6F5] border-x-2 border-x-red-300 py-3 px-3 rounded-lg font-medium text-md">
                  <div className="flex gap-3 items-center">
                    <HiOutlineLightningBolt
                      className="text-[#C8615E]"
                      size={20}
                    />
                    <p className="text-[#C8615E]">Reaction</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="rating">80</div>
                    <div className="of-rating text-gray-400"> / 100</div>
                  </div>
                </div>
                <div className="reaction flex justify-between bg-[#FEFBF2] border-x-2 border-x-yellow-400 py-3 px-3 rounded-lg  font-medium text-md ">
                  <div className="flex gap-3 items-center">
                    <LiaBrainSolid className="text-[#E0B543] font-" size={20} />
                    <p className="text-[#E0B543]">Memory</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="rating">92</div>
                    <div className="of-rating text-gray-400"> / 100</div>
                  </div>
                </div>
                <div className="reaction flex justify-between bg-[#F2FAFA] border-x-2 border-x-green-300 py-3 px-3 rounded-lg  font-medium text-md ">
                  <div className="flex gap-3 items-center">
                    <BsChatDots className="text-[#5BAB93]" size={20} />
                    <p className="text-[#5BAB93]">Verbal</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="rating">61</div>
                    <div className="of-rating text-gray-400"> / 100</div>
                  </div>
                </div>
                <div className="reaction flex justify-between bg-[#F3F2FD] border-x-2 border-x-indigo-300 py-3 px-3 rounded-lg  font-medium text-md ">
                  <div className="flex gap-3 items-center">
                    <FaRegEye className=" text-[#4B4C88]" size={20} />
                    <p className="text-[#4B4C88]">Visual</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="rating">72</div>
                    <div className="of-rating text-gray-400"> / 100</div>
                  </div>
                </div>
              </div>
              <button className="bg-[#373D59] flex items-center font-semibold justify-center text-white p-3 rounded-full w-full hover:bg-gradient-to-b from-indigo-500 to-indigo-700 ">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
