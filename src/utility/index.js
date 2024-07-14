// const formattedPrice = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: currency,
//   minimumFractionDigits: 0,
//   maximumFractionDigits: 0,
// }).format(price);
export const extractPrice = (priceString) => {
    const match = priceString.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  };
