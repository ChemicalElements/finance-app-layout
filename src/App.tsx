import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </main>
  </>
);

export default App;
