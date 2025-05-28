import Header from "./components/Header";
import About from "./components/About";
import Calculator from "./components/Calculator";
import HowWeWork from "./components/HowWeWork";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <About />
        <Calculator />
        <HowWeWork />
        <Portfolio />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
