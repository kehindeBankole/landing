import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";
import Token from "./components/tokens/Token";
// import Home from "./pages/Home"
import Howto from "./components/howto/Howto";
import Guide from "./components/guide/Guide";
import Swap from "./components/swap/Swap";
function App() {
  return (
    <>
      <Nav />
      <Banner/>
      <About/>
      <Token/>
     <Howto/>
     <Guide/>
     <Swap/>
    </>
  );
}

export default App;
