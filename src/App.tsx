
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Transactions from "./components/Transactions";

import "./App.css";

const App = () => {
  return (
    <div className="screen-min-height">
      <div className="welcome-bg-gradient">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App;
