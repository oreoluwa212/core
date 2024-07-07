import { item1a } from "../assets";
import Header from "../components/Header";
import { FaPlus, FaMinus } from "react-icons/fa"; // Assuming you use react-icons for the plus and minus icons

function CartPage() {
  return (
    <div className="w-full font-montserrat bg-white text-black">
      <Header />
      <div className="py-[5%] mt-16 w-full flex flex-col justify-between gap-16 lg:px-[5%]">
        <div className="overflow-x-auto mt-14 pt-5">
          {/* Desktop Table */}
          <table className="min-w-full hidden md:table">
            <thead>
              <tr>
                <th className="px-[9.3%] border-b border-black py-3 text-left">
                  Artwork
                </th>
                <th className="px-6 py-3 border-b border-black text-left">
                  Quantity
                </th>
                <th className="px-6 py-3 border-b border-black text-left">
                  Price
                </th>
                <th className="px-6 py-3 border-b border-black text-left">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-6 flex items-start">
                  <img
                    src={item1a}
                    alt="Heaven on Earth"
                    className="w-24 h-24 object-cover mr-4"
                  />
                  <div>
                    <p className="text-lg font-medium">Heaven on Earth</p>
                    <p className="text-sm text-gray-500">(Album)</p>
                  </div>
                </td>
                <td className="px-6 text-left">
                  <div className="flex items-center">
                    <button className="border p-1">
                      <FaMinus />
                    </button>
                    <input
                      type="text"
                      value="1"
                      readOnly
                      className="w-12 text-center mx-2 border"
                    />
                    <button className="border p-1">
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td className="px-6 text-left">€ 2,000</td>
                <td className="px-6 text-left">€ 2,000</td>
              </tr>
            </tbody>
          </table>

          {/* Mobile View */}
          <div className="md:hidden">
            <div className="flex flex-col border-b border-black py-6 px-5">
              <div className="flex items-start mb-4">
                <img
                  src={item1a}
                  alt="Heaven on Earth"
                  className="w-24 h-24 object-cover mr-4"
                />
                <div>
                  <p className="text-lg font-medium">Heaven on Earth</p>
                  <p className="text-sm text-gray-500">(Album)</p>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-medium">Price:</span>
                <span>€ 2,000</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center">
                  <button className="border p-1">
                    <FaMinus />
                  </button>
                  <input
                    type="text"
                    value="1"
                    readOnly
                    className="w-12 text-center mx-2 border"
                  />
                  <button className="border p-1">
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total:</span>
                <span>€ 2,000</span>
              </div>
            </div>
            <div className="flex flex-col border-b border-black py-6 px-5">
              <div className="flex items-start mb-4">
                <img
                  src={item1a}
                  alt="Heaven on Earth"
                  className="w-24 h-24 object-cover mr-4"
                />
                <div>
                  <p className="text-lg font-medium">Heaven on Earth</p>
                  <p className="text-sm text-gray-500">(Album)</p>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-medium">Price:</span>
                <span>€ 2,000</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center">
                  <button className="border p-1">
                    <FaMinus />
                  </button>
                  <input
                    type="text"
                    value="1"
                    readOnly
                    className="w-12 text-center mx-2 border"
                  />
                  <button className="border p-1">
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total:</span>
                <span>€ 2,000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-12 pt-12">
          <button className="bg-black text-white px-6 py-3 rounded-full">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
