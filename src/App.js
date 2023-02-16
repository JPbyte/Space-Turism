import Home from "./components/home/home";
import GlobalStyle from "./style/GlobalStyle";
import Paths from "./components/routes";

function App() {
  return (
    <>
        <GlobalStyle />
        <Paths>
          <Home />
        </Paths>
    </>
  );
}

export default App;
