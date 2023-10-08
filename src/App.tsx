import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";

const App = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <Analytics />
      <Newsletter />
    </main>
  </>
);

export default App;
