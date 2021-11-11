import IndexLayout from "@/components/layouts/IndexLayout";
import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";

export default function Apply() {
  const validationSchema = Yup.object().shape({
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
    referralCode: Yup.string()
      .max(6, "Please enter a valid referral code.")
      .matches(/([A-Z]\d)\w/, "Please enter a valid code."),
    alreadyCrypto: Yup.bool(),
    message: Yup.string().max(
      250,
      "Please keep your message below 250 characters."
    ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  };

  return (
    <IndexLayout>
      <div className="w-full flex items-center justify-center bg-gray-900">
        <div className="top-40 bg-gray-900 py-12 lg:px-28 px-8">
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-200">
            Investor Application
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-200">
                  First Name{" "}
                  <span className="ml-2 text-sm text-gray-300 italic font-light">
                    required
                  </span>
                </label>

                <input
                  {...register("firstName")}
                  tabIndex={0}
                  arial-label="Please input name"
                  type="name"
                  className="text-base leading-none text-gray-200 p-3 focus:oultine-none focus:border-green-700 mt-4 bg-gray-800 border rounded border-gray-200 placeholder-gray-100"
                />
                <span className="font-semibold text-red-600 ">
                  {errors.firstName?.message}
                </span>
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-200">
                  Last Name
                  <span className="ml-2 text-sm text-gray-300 italic font-light">
                    required
                  </span>
                </label>
                <input
                  {...register("lastName")}
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="name"
                  className="text-base leading-none text-gray-200 p-3 focus:oultine-none focus:border-green-700 mt-4 bg-gray-800 border rounded border-gray-200 placeholder-gray-200"
                />
                <span className="font-semibold text-red-600 ">
                  {errors.lastName?.message}
                </span>
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-200">
                  Email
                  <span className="ml-2 text-sm text-gray-300 italic font-light">
                    required
                  </span>
                </label>
                <input
                  {...register("email")}
                  tabIndex={0}
                  role="input"
                  arial-label="Please input your email"
                  type="email"
                  className="text-base leading-none text-gray-200 p-3 focus:oultine-none focus:border-green-700 mt-4 bg-gray-800 border rounded border-gray-200 placeholder-gray-100 "
                />
                <span className="font-semibold text-red-600 ">
                  {errors.email?.message}
                </span>
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-200">
                  Phone Number
                  <span className="ml-2 text-sm text-gray-300 italic font-light">
                    required
                  </span>
                </label>
                <input
                  {...register("phone")}
                  tabIndex={0}
                  arial-label="Please input phone number"
                  type="phone"
                  className="text-base leading-none text-gray-200 p-3 focus:oultine-none focus:border-green-700 mt-4 bg-gray-800 border rounded border-gray-200 placeholder-gray-200"
                />
              </div>
              <span className="font-semibold text-red-600 ">
                {errors.phone?.message}
              </span>
            </div>
            <div classNam="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col mt-10">
                <label className="text-base font-semibold leading-none text-gray-200">
                  Referral Code
                </label>
                <input
                  {...register("referral")}
                  tabIndex={0}
                  arial-label="Referral Code"
                  type="name"
                  className="text-base leading-none text-gray-200 p-3 focus:oultine-none focus:border-green-700 mt-4 bg-gray-800 border rounded border-gray-200 placeholder-gray-200"
                  placeholder="CODE"
                />
                <span className="font-semibold text-red-600 ">
                  {errors.referral?.message}
                </span>
              </div>
              <div className="md:w-72 flex flex-col mt-10">
                <label className="text-base font-semibold leading-none text-gray-200">
                  Do you have a crypto wallet?{" "}
                  <span className="font-thin italic text-gray-300">
                    It's ok if you don't.
                  </span>
                </label>
                <div className="flex flex-row">
                  <div className="bg-gray-800 border rounded-sm border-gray-200 w-5 h-5 flex flex-shrink-0 justify-center items-center relative m-5">
                    <input
                      {...register("alreadyCrypto")}
                      type="checkbox"
                      className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                    />
                    <div className="check-icon hidden bg-green-700 text-white rounded-sm">
                      <svg
                        className="icon icon-tabler icon-tabler-check"
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-4 ml-2 text-base font-normal text-gray-200">
                    Yes
                  </p>
                  <span className="font-semibold text-red-600 ">
                    {errors.alreadyCrypto?.message}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold leading-none text-gray-200">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  tabIndex={0}
                  aria-label="leave a message"
                  role="textbox"
                  type="name"
                  className="h-36 text-base leading-none text-gray-200 p-3 focus:oultine-none focus:border-green-700 mt-4 bg-gray-800 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  defaultValue={""}
                />
                <span className="font-semibold text-red-600 ">
                  {errors.message?.message}
                </span>
              </div>
            </div>
            <p className="text-xs leading-3 text-gray-200 mt-4">
              By clicking submit you agree to our terms of service, privacy
              policy and how we use data as stated
            </p>
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:outline-none">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <style>
          {`  .checkbox:checked + .check-icon {
                            display: flex;
                        }`}
        </style>
      </div>
    </IndexLayout>
  );
}
