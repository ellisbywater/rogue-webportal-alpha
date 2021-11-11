import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";

export default function SettingsForm() {
  const personalInfoSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string()
      .required("Phone is required")
      .min(10, "Please enter your 10 digit phone number.")
      .max(10, "Please enter your 10 digit phone number.")
      .matches(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        "Please enter a valid phone number."
      ),
  });
  const walletAddrSchema = Yup.object().shape({
    walletAddr: Yup.string().required("walletAddr is required"),
  });
  const securitySchema = Yup.object().shape({
    recoveryEmail: Yup.string().email("Email is invalid"),
    recoveryPhone: Yup.string()
      .min(10, "Please enter a 10 digit phone number.")
      .max(10, "Please enter a 10 digit phone number.")
      .matches(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        "Please enter a valid phone number."
      ),
  });
  return (
    <>
      <ul>
        <li class="mt-10 lg:flex justify-between border-b border-gray-200 pb-16">
          <div class="w-80">
            <div class="flex items-center">
              <h1 class="text-xl font-medium pr-2 leading-5 text-gray-200">
                Personal Information
              </h1>
            </div>
            <p class="mt-4 text-sm leading-5 text-gray-200">
              Update your personal information here.
            </p>
          </div>
          <div>
            <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
              <div class="md:w-64">
                <label
                  class="text-sm leading-none text-gray-200"
                  id="firstName">
                  First name
                </label>
                <input
                  type="name"
                  tabindex="0"
                  class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-gray-200 text-sm font-medium leading-none text-gray-200"
                  aria-labelledby="firstName"
                  placeholder="John"
                />
              </div>
              <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label class="text-sm leading-none text-gray-200" id="lastName">
                  Last name
                </label>
                <input
                  type="name"
                  tabindex="0"
                  class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline focus:border-green-700 text-sm font-medium leading-none text-gray-200"
                  aria-labelledby="lastName"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="md:flex items-center lg:ml-24 mt-8">
              <div class="md:w-64">
                <label
                  class="text-sm leading-none text-gray-200"
                  id="emailAddress">
                  Email address
                </label>
                <input
                  type="email"
                  tabindex="0"
                  class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-green-700 text-sm font-medium leading-none text-gray-200"
                  aria-labelledby="emailAddress"
                  placeholder="youremail@example.com"
                />
              </div>
              <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label class="text-sm leading-none text-gray-200" id="phone">
                  Phone number
                </label>
                <input
                  type="name"
                  tabindex="0"
                  class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-green-700 text-sm font-medium leading-none text-gray-200"
                  aria-labelledby="phone"
                  placeholder="123-1234567"
                />
              </div>
            </div>
            <div className="md:flex items-center lg:ml-24 mt-8">
              <Link href="/dashboard/settings/updatePersonalInfo">
                <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:outline-none">
                  Edit
                </button>
              </Link>
            </div>
          </div>
        </li>
        <li class="mt-10 lg:flex justify-between border-b border-gray-200 pb-16">
          <div class="w-80">
            <div class="flex items-center">
              <h1 class="text-xl font-medium pr-2 leading-5 text-gray-200">
                Wallets
              </h1>
            </div>
            <p class="mt-4 text-sm leading-5 text-gray-200">
              Set your wallet for withdrawals.
            </p>
          </div>
          <div className="sm:flex-grow md:ml-28">
            <div className="md:w-80">
              <label
                className="text-sm leading-none text-gray-200"
                id="walletAddr">
                Receiving Wallet Address
              </label>
            </div>
            <div className="md:w-80">
              <input
                type="text"
                tabindex="0"
                class="w-80 p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-green-700 text-sm font-medium leading-none text-gray-200"
                aria-labelledby="Wallet Address"
                placeholder="123-1234567"
              />
              <button
                type="submit"
                className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:outline-none">
                Edit
              </button>
            </div>
          </div>
        </li>
        <li class="mt-16 lg:flex justify-between pb-16 mb-4">
          <div class="w-80">
            <div class="flex items-center">
              <h1 class="text-xl font-medium pr-2 leading-5 text-gray-200">
                Security
              </h1>
            </div>
            <p class="mt-4 text-sm leading-5 text-gray-200">
              Update your security information here.
            </p>
          </div>
          <div>
            <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
              <div class="md:w-64">
                <Link href="/dashboard/settings/updatePassword">
                  <button className="focus:outline-none hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-green-700 rounded border border-green-700 hover:border-green-700 text-gray-200 px-4 sm:px-8 py-1 sm:py-3 text-sm">
                    Update Password
                  </button>
                </Link>
              </div>

              <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                <Link href="/dashboard/settings/pin">
                  <button className="focus:outline-none hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-green-700 rounded border border-green-700 hover:border-green-700 text-gray-200 px-4 sm:px-8 py-1 sm:py-3 text-sm">
                    Update Pin
                  </button>
                </Link>
              </div>
            </div>

            <div class="md:flex items-center lg:ml-24 mt-8">
              <div class="md:w-64">
                <label
                  class="text-sm leading-none text-gray-200"
                  id="recoverEmail">
                  Recovery Email address
                </label>
                <input
                  type="name"
                  tabindex="0"
                  class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-gray-200 text-sm font-medium leading-none text-gray-200"
                  aria-labelledby="recoveryEmail"
                  placeholder="Your recovery email"
                />
              </div>
              <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label class="text-sm leading-none text-gray-200" id="altPhone">
                  Alternate phone number
                </label>
                <input
                  type="name"
                  tabindex="0"
                  class="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-gray-200 text-sm font-medium leading-none text-gray-200"
                  aria-labelledby="altPhone"
                  placeholder="Your alternate phone number"
                />
              </div>
            </div>
            <div className="md:flex items-center lg:ml-24 mt-8">
              <Link href="/">
                <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:outline-none">
                  Edit
                </button>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
