import IndexLayout from "@/components/layouts/IndexLayout";
import Header from "@/components/shared/header";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Features from "@/components/feature";

export default function Home() {
  return (
    <IndexLayout>
      <div>
        <div className="bg-gray-900">
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-100 font-extrabold leading-tight">
                The Home of Financial{" "}
                <span className="text-green-700">Soveriegnty</span>
              </h1>
              <p className="mt-5 sm:mt-10 text-gray-300 font-normal text-center text-lg sm:text-lg">
                A professional website drives sales. Create a beautiful website
                to impress and engage new customers – and establish your
                business online.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Link href="/apply">
                <button className="focus:outline-none bg-green-700 transition duration-150 ease-in-out hover:bg-green-800 rounded text-white px-4 sm:px-10 py-2 sm:py-4 text-md">
                  Apply
                </button>
              </Link>
              <Link href="/signin">
                <button className="ml-4 focus:outline-none bg-white transition duration-150 ease-in-out hover:bg-gray-300 hover:text-green-800 rounded text-green-700 px-4 sm:px-10 py-2 sm:py-4 text-md">
                  Sign In
                </button>
              </Link>
            </div>
            <Features />
          </div>
        </div>
      </div>
    </IndexLayout>
  );
}
