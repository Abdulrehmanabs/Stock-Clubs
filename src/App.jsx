import "./App.css";
import Gardian_Angel from "./components/Gardian_Angel";
import Investor_Report from "./components/Investor_Report";
import Portfolio_Structure from "./components/Portfolio_Structure";
import Sign_Up from "./components/Sign_Up";
import StockClubs_Comunity from "./components/StockClubs_Comunity";

function App() {
  return (
    <>
      <Sign_Up />
      <StockClubs_Comunity />
      <Portfolio_Structure />
      <Gardian_Angel />
      <Investor_Report />
    </>
  );
}

export default App;
