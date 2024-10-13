import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" bg-skin-secondary text-skin-primary py-8 items-end  ">
      <div className=" grid grid-cols-1 place-items-center lg:grid-cols-3  ">
        <div className=" text-center max-w-60 justify-center items-center  mb-6 md:mb-0">
          <div className="flex justify-center text-center text-3xl text-skin-primary">
            <a className="flex flex-col  justify-center items-center " href="/">
              <p className=" text-skin-primary font-extrabold ml-2">LK&CO</p>
              <div className="relative flex  items-center">
                <div className="flex-grow border-t-1  w-10 border-skin-primary border-2"></div>
                <span className="flex-shrink mx-2 text-sm text-skin-inverted">
                  Since 2015
                </span>
                <div className="flex-grow border-t-1 w-10 border-skin-primary  border-2"></div>
              </div>
            </a>
          </div>
          <p className="mt-6 text-skin-inverted">
            Connecting freelancers with clients for successful projects.
          </p>
        </div>
        {/* Footer Links */}
        <div className=" text-center max-w-60  mb-4 md:mb-0">
          <h3 className="text-2xl font-extrabold pb-4 border-b-4">
            Navigation
          </h3>

          <ul className="mt-2">
            <li>
              <a href="#" className="text-skin-inverted hover:text-orange-500">
                Home
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-skin-inverted hover:text-orange-500">
                Features
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-skin-inverted hover:text-orange-500">
                Portfolio
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-skin-inverted hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Footer Contact Info */}
        <div className=" max-w-60  text-center  ">
          <h3 className="text-2xl font-extrabold  pb-4 border-b-4">
            Contact Us
          </h3>
          <ul className="mt-2">
            <li>
              <span className="text-skin-inverted">
                Email: info@freelancing.com
              </span>
            </li>
            <li className="mt-2">
              <span className="text-skin-inverted">Phone: (123) 456-7890</span>
            </li>
            <li className="mt-2 ">
              <span className="text-skin-inverted">Follow Us:</span>
              <div className="flex justify-center mt-2">
                <a
                  href="#"
                  className="text-skin-inverted hover:text-orange-500 mx-2"
                >
                  <FaFacebook size={25} />
                </a>
                <a
                  href="https://www.instagram.com/freelancewithlobna/?hl=en"
                  className="text-skin-inverted hover:text-orange-500 mx-2"
                >
                  <FaInstagram size={25} />
                </a>
                <a
                  href="#"
                  className="text-skin-inverted hover:text-orange-500 mx-2"
                >
                  <FaWhatsapp size={25} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
