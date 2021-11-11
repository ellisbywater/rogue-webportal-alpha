import DashboardLayout from "@/layouts/DashboardLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";

export default function UpdateSecurityInfo() {
  return (
    <DashboardLayout>
      <div className="md:ml-60 md:w-80 text-center">
        <h1 className="text-3xl text-white my-12">Wallet</h1>
        <form className="text-center w-full flex flex-col justify-center">
          <div className="">
            <label className="text-sm leading-none text-gray-200">
              Withdraw Wallet Address
            </label>
            <input
              type="text"
              tabIndex="0"
              className="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline-none focus:border-gray-200 text-sm font-medium leading-none text-gray-200"
              aria-labelledby="recovery email"
              placeholder=""
            />
          </div>
          <div className="my-6">
            <label className="text-sm leading-none text-gray-200">Wallet</label>
            <input
              type="tel"
              tabIndex="0"
              className="w-full p-3 mt-3 bg-gray-800 border rounded border-gray-200 focus:outline focus:border-green-700 text-sm font-medium leading-none text-gray-200"
              aria-labelledby="recovery phone"
              placeholder="Doe"
            />
          </div>
          <div className="my-6">
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:outline-none">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
