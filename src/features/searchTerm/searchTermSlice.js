const initialSearchTerm = "";

// only holds the text in the search bar
export const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch (action.type) {
    case "searchTerm/setSearchTerm":
      return action.payload;
    case "searchTerm/clearSearchTerm":
      return "";
    default:
      return searchTerm;
  }
};

// sent on every keystroke in the search bar
export const setSearchTerm = (term) => {
  return {
    type: "searchTerm/setSearchTerm",
    payload: term,
  };
};

// no payload needed, the reducer just resets to ''
export const clearSearchTerm = () => {
  return {
    type: "searchTerm/clearSearchTerm",
  };
};
