import { Button } from "./style";

const LoadMore = ({ children, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  )
}

export default LoadMore