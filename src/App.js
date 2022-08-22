import Container from './components/Wrapper'
import Header from './components/Header';
import Movies from './Pages/Movies';

import SearchContextProvider from './contexts/Search';

function App() {
  return (
    <>
      <SearchContextProvider>
        <Header />
        <Container>
          <Movies />
        </Container>
      </SearchContextProvider>
    </>
  );
}

export default App;
