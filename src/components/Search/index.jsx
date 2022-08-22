import { Search } from "./style"
const Input = ({ value, onChange }) => {
  return (
    <Search
      value={value}
      onChange={onChange}
      type="search"
      placeholder="search an movie"
    />
  )
}

export default Input