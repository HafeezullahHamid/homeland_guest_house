// App
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Rooms from "./components/Pages/Room";
import Booking from "./components/Booking";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Rooms />
      <Booking />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
