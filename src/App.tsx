import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";

const App = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <Analytics />
    </main>
  </>
);

export default App;
