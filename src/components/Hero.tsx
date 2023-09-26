import Typed from "react-typed";

const Hero = () => {
  return (
    <>
      <main className="max-w-3xl -mt-24 mx-auto w-full h-screen text-center flex flex-col justify-center">
        <h2 className="uppercase text-green-300 font-semibold">
          Growing with data analytics
        </h2>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold my-4">
          Grow with data
        </h1>
        <p className="text-xl sm:text-4xl md:text-5xl">
          Fast, flexible financing for{" "}
          <Typed
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </p>

        <button className="bg-green-300 mt-8 w-48 rounded-lg py-3 text-black font-semibold self-center">
          Get Started
        </button>
      </main>
    </>
  );
};

export default Hero;
