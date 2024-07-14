import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { FaAngleDown } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { footerCountryUK } from "../assets";
import TransparentBtn from "../components/buttons/TransparentBtn";
import useCartStore from "../zustand/CartStore";

function ImgLoader() {
  return (
    <div className="animate-pulse">
      <div className="w-full h-full bg-gray-300 rounded mb-4"></div>
    </div>
  );
}

function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className="w-full h-64 bg-gray-300 rounded mb-4"></div>
      <div className="w-full h-8 bg-gray-300 rounded mb-4"></div>
      <div className="w-full h-8 bg-gray-300 rounded mb-4"></div>
      <div className="w-full h-8 bg-gray-300 rounded mb-4"></div>
      <div className="w-full h-8 bg-gray-300 rounded mb-4"></div>
      <div className="w-full h-8 bg-gray-300 rounded mb-4"></div>
    </div>
  );
}

function ItemDetailsPage() {
  const location = useLocation();
  const { id, price: passedPrice } = location.state || {
    id: null,
    price: null,
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const { addItem, items } = useCartStore();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/${id}?organization_id=${
            import.meta.env.VITE_ORGANIZATION_ID
          }&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const data = await response.json();
        const formattedItem = {
          img:
            data.photos.length > 0
              ? `https://api.timbu.cloud/images/${data.photos[0].url}`
              : "default-image-url",
          artist:
            data.extra_infos.find((info) => info.key === "Artist")?.value ||
            "Unknown",
          medium:
            data.extra_infos.find((info) => info.key === "Medium")?.value ||
            "Unknown",
          year:
            data.extra_infos.find((info) => info.key === "Year")?.value ||
            "Unknown",
          album:
            data.extra_infos.find((info) => info.key === "Album")?.value ||
            "Unknown",
          condition:
            data.extra_infos.find((info) => info.key === "Condition")?.value ||
            "Unknown",
          size:
            data.extra_infos.find((info) => info.key === "Size")?.value ||
            "Unknown",
          price: data.selling_price
            ? `₦${data.selling_price}`
            : passedPrice || "Price not available",
        };
        setItem(formattedItem);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductDetails();
    }
  }, [id, passedPrice]);

  const handleAddToCart = () => {
    addItem(item)
    navigate("/cart");
  };
  

  return (
    <div className="w-full font-montserrat bg-white text-black">
      <Header />
      <div className="py-[5%] mt-16 w-full flex flex-col justify-start lgss:px-[5%]">
        {loading ? (
          <div className="flex lgss:flex-row flex-col justify-center w-full lgss:justify-between pt-10 lgss:pt-0 lgss:px-0 px-5">
            <div className="w-[10%] hidden lgss:flex h-[100px]">
              <ImgLoader />
            </div>
            <div className="lgss:w-[45%] h-[70vh]">
              <SkeletonLoader />
            </div>
            <div className="lgss:w-[40%] pt-7 px-4 lgss:pt-0 lgss:px-0">
              <SkeletonLoader />
            </div>
          </div>
        ) : (
          item && (
            <div className="flex lgss:flex-row flex-col justify-center w-full lgss:justify-between pt-10 lgss:pt-0 lgss:px-0 px-5">
              <div className="w-[13%] hidden lgss:flex h-[120px]">
                <img
                  src={item.img}
                  className="w-full rounded-lg h-full"
                  alt=""
                />
              </div>
              <div className="h-full lgss:w-[85%] flex lgss:flex-row flex-col justify-between items-center">
              <div className="lgss:w-[50%] w-full h-[80vh]">
                <img
                  src={item.img}
                  alt="Selected Item"
                  className="w-full rounded-lg h-full"
                />
              </div>
              <div className="lgss:w-[47%] w-full px-4 lgss:pt-0 lgss:px-0">
                <div className="flex flex-col gap-2 py-4">
                  <div className="lgss:w-[50%] w-full md:w-[70%] grid grid-cols-2">
                    <div className="flex flex-col gap-10">
                      <strong>Artist:</strong>
                      <strong>Medium:</strong>
                      <strong>Year:</strong>
                      <strong>Album:</strong>
                      <strong>Condition:</strong>
                      <strong>Size:</strong>
                    </div>
                    <div className="flex flex-col gap-10">
                      <p>{item.artist}</p>
                      <p>{item.medium}</p>
                      <p>{item.year}</p>
                      <p>{item.album}</p>
                      <p>{item.condition}</p>
                      <p>{item.size}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 space-y-2">
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
                    <span>{item.price}</span>
                  </div>
                  <div className="flex gap-4 text-lg font-medium">
                    <TbTruckDelivery/>
                    <span className="text-sm">Free Shipping</span>
                  </div>
                  <div className="pt-7">
                    <TransparentBtn
                      btnText={"Add to cart"}
                      onClick={handleAddToCart}
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ItemDetailsPage;
