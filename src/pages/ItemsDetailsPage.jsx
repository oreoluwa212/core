import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { FaAngleDown } from "react-icons/fa";
import { footerCountryUK } from "../assets";

function ItemDetailsPage() {
  const location = useLocation();
  const { img } = location.state || { img: null };

  return (
    <div className="w-full font-montserrat bg-white text-black">
      <Header />
      <div className="py-[5%] mt-16 w-full flex flex-col justify-start lgss:px-[5%]">
        {img ? (
          <div className="flex lgss:flex-row flex-col justify-center w-full lgss:justify-between pt-10 lgss:pt-0 lgss:px-0 px-5">
            <div className="w-[10%] hidden lgss:flex h-[100px]">
              <img src={img} className="w-full rounded-lg h-full" alt="" />
            </div>
            <div className="lgss:w-[45%] h-[70vh]">
              <img
                src={img}
                alt="Selected Item"
                className="w-full rounded-lg h-full"
              />
            </div>
            <div className="lgss:w-[40%] pt-7 px-4 lgss:pt-0 lgss:px-0">
              <div className="flex flex-col gap-2 pb-4">
                <div className="lgss:w-[50%] w-full md:w-[70%] grid grid-cols-2">
                  <div className="flex flex-col gap-3">
                    <strong>Artist:</strong>
                    <strong>Medium:</strong>
                    <strong>Year:</strong>
                    <strong>Album:</strong>
                    <strong>Condition:</strong>
                    <strong>Size:</strong>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p>Oji</p>
                    <p>Photography</p>
                    <p>2012</p>
                    <p>Heaven on earth</p>
                    <p>Excellent</p>
                    <p>100 cm x 70 cm</p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-2">
                  <img
                    src={footerCountryUK}
                    alt="UK flag"
                    className="w-5 h-5"
                  />
                  <span>CURRENCY</span>
                  <FaAngleDown />
                </div>
                <div className="py-3 flex items-center gap-2">
                  <span className="font-semibold">EUR</span>
                  <span>€ 2,000</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">Free Shipping</span>
                </div>
                <div className="mt-5 flex gap-8">
                  <button className="bg-black text-white py-2 px-4 rounded-[20px]">
                    Added to cart ✓
                  </button>
                  <button className="border-2 py-2 px-4 rounded-[20px]">
                    Invest
                  </button>
                </div>
                <div className="mt-7 flex flex-wrap md:flex-row gap-8">
                  <button className="border-2 py-2 px-4 rounded-[20px]">
                    Message
                  </button>
                  <button className="border-2 py-2 px-4 rounded-[20px]">
                    Share
                  </button>
                  <button className="border-2 py-2 px-4 rounded-[20px]">
                    Sell Yours
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ItemDetailsPage;
