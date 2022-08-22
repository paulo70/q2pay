import { createContext, useState } from "react";

export const SearchContext = createContext()
SearchContext.displayName = "Searching"

const SearchContextProvider = ({ children }) => {
  const [value, setValue] = useState('')

  const handleSearch = () => { }

  return (
    <SearchContext.Provider value={{ value, setValue, handleSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider