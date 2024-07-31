import "./App.css";
import Cards from "./Components/Cards/Cards";
import Customers from "./Components/Customers/Customers";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Cards />
      <AboutUs />
      <Services />
      <Customers />
      <Form />
      <Footer />
    </>
  );
}

export default App;
