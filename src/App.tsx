import { Navbar, Footer, Welcome, Transactions, Services } from "./components";
import "./App.css";

const App = (): JSX.Element => {
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
