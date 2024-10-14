"use client";
import { motion, useScroll } from "framer-motion";
import { AiFillTrophy } from "react-icons/ai";
import { GiGraduateCap } from "react-icons/gi";
import { IoBook } from "react-icons/io5";

export default function WhyUs() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-skin-primary">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid  place-items-center max-w-lg grid-cols-1 gap-x-8 gap-y-10 sm:max-w-4xl sm:grid-cols-4 sm:gap-x-10 lg:max-w-none lg:grid-cols-5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" items-center text-center flex flex-col"
          >
            <div className=" flex items-center justify-center m-2 p-6 w-28 h-28 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-lg  shadow-gray-500">
              <AiFillTrophy size={100} color="white" />
            </div>
            <h1 className=" font-extrabold text-4xl">Best of Class!</h1>
            <p>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui.
            </p>
          </motion.button>

          <div className=" items-center text-center flex flex-col">
            <div className=" flex items-center justify-center m-2 p-6 w-28 h-28 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-lg  shadow-gray-500">
              <GiGraduateCap size={100} color="white" />
            </div>
            <h1 className=" font-extrabold text-4xl">Experience</h1>
            <p>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className=" items-center text-center flex flex-col">
            <div className=" flex items-center justify-center m-2 p-6 w-28 h-28 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-lg  shadow-gray-500">
              <IoBook size={100} color="white" />
            </div>
            <h1 className=" font-extrabold text-4xl">Knowledge</h1>
            <p>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className=" items-center text-center flex flex-col">
            <div className=" flex items-center justify-center m-2 p-6 w-28 h-28 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-lg  shadow-gray-500">
              <AiFillTrophy size={100} color="white" />
            </div>
            <h1 className=" font-extrabold text-4xl">Best of Class!</h1>
            <p>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className=" items-center text-center flex flex-col">
            <div className=" flex items-center justify-center m-2 p-6 w-28 h-28 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-lg  shadow-gray-500">
              <AiFillTrophy size={100} color="white" />
            </div>
            <h1 className=" font-extrabold text-4xl">Best of Class!</h1>
            <p>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
