import React from "react";

import { Inventory } from "../features/inventory/Inventory.jsx";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter.jsx";
import { Cart } from "../features/cart/Cart.jsx";
import { SearchTerm } from "../features/searchTerm/SearchTerm.jsx";

// hands each feature its slice of state plus dispatch
export const App = (props) => {
  const { state, dispatch } = props;

  // only the products that match what's typed in the search bar
  const visibleInventory = getFilteredItems(state.inventory, state.searchTerm);

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />

      <Inventory
        inventory={visibleInventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};

/* Utility Helpers */

// lowercase both sides so "hat" still finds "Hello World Hat"
function getFilteredItems(items, searchTerm) {
  return items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
}
