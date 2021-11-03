export default function InvestmentLedgerRow() {
  return (
    <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
      <td className="pl-4 cursor-pointer">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <img
              className="w-full h-full"
              src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
            />
          </div>
          <div className="pl-4">
            <p className="font-medium">UX Design &amp; Visual Strategy</p>
            <p className="text-xs leading-3 text-gray-600 pt-2">Herman Group</p>
          </div>
        </div>
      </td>
      <td className="pl-12">
        <p className="text-sm font-medium leading-none text-gray-800">72%</p>
        <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
          <div className="w-20 h-3 bg-green-progress rounded-full" />
        </div>
      </td>
      <td className="pl-20">
        <p className="font-medium">$13,000</p>
        <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
      </td>
      <td className="pl-20">
        <p className="font-medium">22.12.21</p>
        <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
      </td>
    </tr>
  );
}
