import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/roguefinance.png";

export default function Navigation() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="w-full bg-gray-900">
        <div className="container mx-auto px-20 flex items-center justify-between">
          <div className="logo w-14">
            <Link href="/">
              <Image src={logo} className="cursor-pointer" />
            </Link>
          </div>
          <div>
            <div
              onclick="toggleMenu(true)"
              className="sm:block md:hidden text-gray-100 hover:text-white focus:text-white focus:outline-none"
              onClick={() => setShow(!show)}>
              {show ? (
                <svg
                  aria-haspopup="true"
                  aria-label="Main Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:hidden icon icon-tabler icon-tabler-menu"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
              ) : (
                <svg
                  aria-haspopup="true"
                  aria-label="Main Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:hidden icon icon-tabler icon-tabler-menu"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={4} y1={8} x2={20} y2={8} />
                  <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
              )}
              {show && (
                <div id="menu" className="block lg:hidden ">
                  <div
                    onClick={() => setShow(!show)}
                    className="block md:hidden lg:hidden text-gray-100 hover:text-white focus:text-white fixed focus:outline-none z-30 top-0 pt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                  <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 md:bg-transparent z-20">
                    <li className="text-gray-100 hover:text-green-600 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                      <a href="javascript: void(0)">Litepaper</a>
                    </li>
                    <li className="text-gray-100 hover:text-green-600 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                      <a href="/apply">Apply</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div id="menu" className="md:block lg:block hidden">
              <div
                onClick="toggleMenu(false)"
                className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
              <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                <li className="text-gray-100 hover:text-green-600 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <a href="/litepaper">Litepaper</a>
                </li>
                <li className="text-gray-100 hover:text-green-600 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <a href="/apply">Apply</a>
                </li>
              </ul>
            </div>
          </div>
          <Link href="/dashboard">
            <button className="focus:outline-none hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-green-700 rounded border border-green-700 hover:border-green-700 text-gray-200 px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Sign In
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
