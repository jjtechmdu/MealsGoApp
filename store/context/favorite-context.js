import { createContext } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteProvider({ children }) {
  <FavoriteContext.Provider>{children}</FavoriteContext.Provider>;
}

export default FavoriteProvider;
