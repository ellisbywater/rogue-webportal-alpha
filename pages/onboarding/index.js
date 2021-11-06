import React from "react";
import Head from "next/head";
import OnboardingLayout from "@/components/layouts/OnboardLayout";

export default function Index() {
  return (
    <OnboardingLayout>
      <div className="bg-gray-900">
        <section className="mx-auto container w-full py-36">
          <div className="flex flex-col justify-center items-center">
            <div className="md:text-4xl text-3xl font-black text-center text-green-500 leading-snug lg:w-3/4">
              <h2>Welcome to the fund!</h2>
            </div>
            <h3 className="text-lg text-gray-900 mt-5 bg-white px-3 py-2 rounded shadow-lg">
              First, there are a few steps to complete to ensure your security
              and complete your account.
            </h3>
            <div className="flex justify-center items-center mt-16">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 hover:opacity-90 w-48 h-12 text-lg text-white bg-gradient-to-l from-green-600 to-green-700 rounded-sm">
                Let's Start
              </button>
            </div>
          </div>
        </section>
      </div>
    </OnboardingLayout>
  );
}
