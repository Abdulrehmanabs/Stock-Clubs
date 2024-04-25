import Gardian_Angel from "./components/Gardian_Angel";
import Header from "./components/Header";
import Investor_Report from "./components/Investor_Report";
import Navbar from "./components/Navbar";
import Portfolio_Structure from "./components/Portfolio_Structure";
import Security from "./components/Security";
import Sign_Up from "./components/Sign_Up";
import StockClubs_Comunity from "./components/StockClubs_Comunity";
import Contact_Us from "./components/Contact-Us";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Sign_Up />
      <StockClubs_Comunity />
      <Portfolio_Structure />
      <Gardian_Angel />
      <Investor_Report />
      <Security />
      <Contact_Us />
      <Footer />
    </>
  );
}

export default App;
