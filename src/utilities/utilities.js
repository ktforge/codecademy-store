// prices are stored in USD, this converts them for the picked currency
export function calculatePrice(price, currency) {
  switch (currency) {
    case "EUR":
      return price * 0.86;
    case "CAD":
      return price * 1.33;
    default:
      return price;
  }
}

// adds up price x quantity for every cart item, then converts
export function calculateTotal(cart, currency) {
  let totalUSD = 0;
  Object.keys(cart).forEach((itemName) => {
    totalUSD += cart[itemName].price * cart[itemName].quantity;
  });
  return calculatePrice(totalUSD, currency).toFixed(2);
}

// CAD uses $ too, the currency code after the price tells them apart
export function getCurrencySymbol(currencyFilter) {
  switch (currencyFilter) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "CAD":
      return "$";
    default:
      return "";
  }
}
