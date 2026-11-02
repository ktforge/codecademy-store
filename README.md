# Codecademy Store

This is a small React and Redux store I built for the Codecademy Store project on Codecademy's Full-Stack Engineer path. It shows Codecademy merch, lets you add items to a cart, change how many of each you want, and switch the whole store between US dollars, euros, and Canadian dollars.

**Live site:** https://codecademy-store-devante.netlify.app

## What it does

- Shows six products with their price in the currency you picked
- Add to Cart puts an item in the cart, and clicking it again bumps the quantity up by one
- Each cart item has a dropdown to set the quantity, and setting it to 0 takes the item out of the list
- The cart stays stuck to the bottom of the screen and keeps a running total
- USD, EUR, and CAD buttons change every price and the total at once
- A search bar filters the products by name, with a clear button to reset it

There's no backend, so the cart resets when you refresh the page.

## How it's put together

All the state lives in one Redux store with four slices: `inventory`, `cart`, `currencyFilter`, and `searchTerm`. Each slice has its own folder under `src/features` with a slice file (the reducer and action creators) and the React component that shows it. `store.js` joins the four reducers with `combineReducers`, and `index.jsx` passes the current state and `dispatch` down to `App`, then subscribes the render function so the page redraws after every action.

The cart is an object instead of an array, with each item's name as the key and its price and quantity as the value. That makes updating one item easy: copy the cart, then replace just that key.

## What I learned

Most of my bugs were typos. I misspelled `quantity` as `quanity` in a couple of places, and since JavaScript doesn't complain about a property name it doesn't know, the quantity just never updated. Now when something in the cart acts weird, searching the file for that word is the first thing I check.

I also broke Add to Cart for a while by editing the wrong action creator. I had changed `addItem`'s payload while working on `changeItemQuantity`, so clicking the button crashed. Putting `addItem` back to just `payload: itemToAdd` fixed it.

Writing the reducers made immutable updates click for me. Every case returns a new object with the spread operator instead of changing the old one, and `[name]` in brackets uses the item's actual name as the key.

The search bar was an extra challenge at the end. I added a `searchTerm` slice the same way as the others and filter the inventory in `App` before passing it to `Inventory`.

After it went live I noticed that searching for one product made its card stretch across the whole page. The grid used `auto-fit`, which collapses the empty columns and lets the last card take all the space. Switching to `auto-fill` keeps those empty columns, so a single result stays the same size as the rest.

I built it in Codecademy's workspace first, then moved it over to Vite so I could put it online. That meant renaming the component files to `.jsx`, moving `data.js` into `src`, and importing the CSS in `index.jsx`.

## Running it

```
npm install
npm run dev
```

Then open the local address Vite prints (usually http://localhost:5173/).

Example: add the Hello World Hat twice and the Java Tee once. The cart total shows:

```
Total $65.97 USD
```

Switch to EUR, set the hat's quantity to 3, and it shows:

```
Total €77.37 EUR
```

Built by DeVante Bush
