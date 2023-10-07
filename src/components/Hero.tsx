import Typed from "react-typed";

const Hero = () => {
  return (
    <>
      <section className="mx-auto flex h-screen w-full max-w-3xl flex-col justify-center pb-24 text-center">
        <h2 className="font-semibold uppercase text-green-300">
          Growing with data analytics
        </h2>
        <h1 className="my-4 text-4xl font-bold sm:text-6xl md:text-7xl">
          Grow with data
        </h1>
        <p className="text-xl sm:text-4xl md:text-5xl" data-cy="hero-typed">
          Fast, flexible financing for{" "}
          <Typed
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </p>

        <button
          data-cy="hero-button"
          className="mt-8 w-48 self-center rounded-lg bg-green-300 py-3 font-semibold text-black"
        >
          Get Started
        </button>
      </section>
    </>
  );
};

export default Hero;
