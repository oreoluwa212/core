export const extractPrice = (priceString) => {
    const match = priceString.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  };
