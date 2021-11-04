import React, { useState } from "react";
import InvestmentLedgerRow from "./investment-ledger-row";

export default function InvestmentLedger() {
  const [show, setShow] = useState(null);
  return (
    <>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Investments
            </p>
            <div>
              <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-700 hover:bg-green-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">
                  New Investment
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Transaction I.D.</th>
                <th className="font-normal text-left pl-12">Status</th>
                <th className="font-normal text-left pl-20">Amount</th>
                <th className="font-normal text-left pl-20">Date</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <InvestmentLedgerRow />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
