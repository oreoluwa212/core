import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HeaderText from "../components/textComponents/HeaderText";
import ProductSlider from "../components/cards/products/ProductSlider";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductCard from "../components/cards/products/ProductCard";
import { useNavigate } from "react-router-dom";
import {
  footerCountryUK,
  product1,
  product2,
  product3,
  product4,
} from "../assets";
import TopSlideSkeleton from "../components/cards/products/TopSlideSkeleton";

const products = [
  { img: product1, text: "Digital Art" },
  { img: product2, text: "NFTs" },
  { img: product3, text: "Plaster" },
  { img: product4, text: "Photography" },
  { img: product2, text: "Ceramic" },
  { img: product3, text: "Fumage" },
];

const ProductsPage = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const handleImageClick = (id, price) => {
    console.log("Navigating to item details with ID:", id);
    console.log("Navigating to item details with price:", price);
    navigate("/galleries/products/item-details", { state: { id, price } });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Ensure loading state is set to true at the start of fetch
      try {
        const response = await fetch(import.meta.env.VITE_API_URL);
        const data = await response.json();
        const formattedData = data.items.map((item) => {
          let price = "Price not available";
          if (item.selling_price) {
            price = `₦${item.selling_price}`;
          } else if (item.current_price && item.current_price.length > 0) {
            const currencyPrice = item.current_price[0];
            const [currency, value] = Object.entries(currencyPrice)[0];
            price = `${currency} ${value[0]}`;
          }

          const [subtitle, description, description1] = (
            item.description || ""
          ).split("\r\n");

          return {
            id: item.id,
            img: item.photos[0]
              ? `https://api.timbu.cloud/images/${item.photos[0].url}`
              : "default-image-url",
            title: item.name,
            subtitle: subtitle || "Sarah Ojunwa. Nigeria",
            description: description || "2014. Oil linen canvas",
            description1: description1 || "200 x 350. Sounds (Album)",
            category: item.categories[0]?.name.toLowerCase() || "uncategorized",
            price: price,
            quantityAvailable: item.available_quantity || 0,
          };
        });
        setProductDetails(formattedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchProducts();
  }, []);

  const getFilteredProducts = () => {
    switch (activeScreen) {
      case 2:
        return productDetails.filter(
          (product) => product.category === "photography"
        );
      case 3:
        return productDetails.filter(
          (product) => product.category === "digital"
        );
      case 4:
        return productDetails.filter((product) => product.category === "nfts");
      default:
        return productDetails;
    }
  };

  const totalPages = Math.ceil(getFilteredProducts().length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = getFilteredProducts().slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const renderPageNumbers = () => {
    const maxPagesToShow = 2;
    const pageNumbers = [];
    const ellipsis = "...";

    pageNumbers.push(
      <button
        key="prev"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 mx-1 bg-gray-300 rounded"
      >
        <FaAngleLeft />
      </button>
    );

    if (currentPage > maxPagesToShow + 1) {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => setCurrentPage(1)}
          className={`px-3 py-1 mx-1 ${
            currentPage === 1 ? "bg-gray-500 text-white" : "bg-gray-300"
          } rounded`}
        >
          1
        </button>,
        <span key="ellipsis1" className="px-3 py-1 mx-1">
          {ellipsis}
        </span>
      );
    }

    const start = Math.max(1, currentPage - maxPagesToShow);
    const end = Math.min(totalPages, currentPage + maxPagesToShow);

    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 mx-1 ${
            currentPage === i ? "bg-gray-500 text-white" : "bg-gray-300"
          } rounded`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - maxPagesToShow) {
      pageNumbers.push(
        <span key="ellipsis2" className="px-3 py-1 mx-1">
          {ellipsis}
        </span>,
        <button
          key={totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className={`px-3 py-1 mx-1 ${
            currentPage === totalPages
              ? "bg-gray-500 text-white"
              : "bg-gray-300"
          } rounded`}
        >
          {totalPages}
        </button>
      );
    }

    pageNumbers.push(
      <button
        key="next"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 mx-1 bg-gray-300 rounded"
      >
        <FaAngleRight />
      </button>
    );

    return pageNumbers;
  };

  return (
    <div className="w-full font-montserrat bg-white text-black">
      <Header />
      <div className="py-[5%] mt-16 w-full flex flex-col justify-start lgss:px-14">
        <HeaderText
          className={"text-black pt-5 ml-8"}
          title={"Discover physical digital and NFT artworks "}
        />
        <div className="w-full px-[15%] lgss:px-0">
          <ProductSlider products={products} />
        </div>
        <div className="w-full px-[5%] lgss:px-0">
          <div className="w-full flex flex-col pt-7">
            <div className="w-full lgss:px-5 lgss:h-[80px] h-fit lgss:py-0 py-4 flex lgss:flex-row flex-col gap-2 justify-between">
              <div className="flex lgss:flex-row flex-col lgss:px-8 gap-5 justify-start lgss:items-center text-primary font-medium h-[92px] ">
                <p>Artwork type:</p>
                <div className="">
                  <button
                    onClick={() => setActiveScreen(1)}
                    className={
                      activeScreen === 1
                        ? "text-primary border-primary border-b-2 font-semibold px-[12px]"
                        : "px-[12px]"
                    }
                  >
                    ALL
                  </button>
                  <button
                    onClick={() => setActiveScreen(2)}
                    className={
                      activeScreen === 2
                        ? "text-primary border-primary border-b-2 font-semibold px-[12px]"
                        : "px-[12px]"
                    }
                  >
                    PHYSICAL
                  </button>
                  <button
                    onClick={() => setActiveScreen(3)}
                    className={
                      activeScreen === 3
                        ? "text-primary border-primary border-b-2 font-semibold px-[12px]"
                        : "px-[12px]"
                    }
                  >
                    DIGITAL
                  </button>
                  <button
                    onClick={() => setActiveScreen(4)}
                    className={
                      activeScreen === 4
                        ? "text-primary border-primary border-b-2 font-semibold px-[12px]"
                        : "px-[12px]"
                    }
                  >
                    NFTs
                  </button>
                </div>
              </div>
              <div className="flex justify-end pr-8 items-center">
                <FaAngleDown className="cursor-pointer" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading
                ? Array.from({ length: itemsPerPage }, (_, index) => (
                    <TopSlideSkeleton key={index} /> // Render skeleton loaders while loading is true
                  ))
                : currentItems.map((product, index) => (
                    <ProductCard
                      key={index}
                      img={product.img}
                      title={product.title}
                      subtitle={product.subtitle}
                      description={product.description}
                      description1={product.description1}
                      category={product.category}
                      price={product.price}
                      quantityAvailable={product.quantityAvailable}
                      onClick={() =>
                        handleImageClick(product.id, product.price)
                      }
                    />
                  ))}
            </div>
            <div className="flex justify-center mt-4">
              {renderPageNumbers()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
