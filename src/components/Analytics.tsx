import Laptop from "../assets/laptop.jpg";

const Analytics = () => (
  <section className="w-full bg-white py-16 px-4 text-black">
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 md:gap-10">
      <img src={Laptop} className="w-[500px] mx-auto m-4" alt="laptop image" />

      <article className="flex flex-col justify-center">
        <h2 className="text-green-500 font-semibold uppercase">
          Data analytics dashboard
        </h2>

        <h1 className="text-2xl md:text-3xl font-bold capitalize mb-2">
          Manage data analytics centrally
        </h1>

        <p className="text-gray-800/90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          sunt, minima beatae dicta nihil suscipit, adipisci quod ullam id ipsum
          aliquam quae cumque nesciunt recusandae esse ut quia! Consectetur,
          dolores!
        </p>

        <button className="text-green-300 mt-8 w-48 rounded-lg py-3 bg-black font-semibold self-center md:self-start">
          Get Started
        </button>
      </article>
    </div>
  </section>
);

export default Analytics;
