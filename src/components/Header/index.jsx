import { ContentHeader, Brand, Span } from "./style"
import Search from '../../components/Search'

const Header = () => {
  return (
    <ContentHeader>
      <Brand />
      <Span>
        filmes
      </Span>
      <Search />
    </ContentHeader>
  )
}

export default Header