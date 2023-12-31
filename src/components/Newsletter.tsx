const Newsletter = () => (
  <section className="w-full p-16 text-white">
    <div className="lg:gap- mx-auto flex max-w-[1240px] flex-col gap-8 lg:flex-row">
      {/* left  */}
      <hgroup className="my-4">
        <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
          Want tips & tricks to optimize your flow?
        </h1>
        <p>Sign up to our newsletter and stay up to date.</p>
      </hgroup>

      {/* right  */}
      <div className="my-4">
        {/* form  */}
        <form className="flex w-full flex-col items-center justify-between sm:flex-row">
          <input
            className="flex w-full rounded-md p-3 text-black"
            type="email"
            placeholder="Enter Email"
          />
          <button className="my-6 ml-4 w-[200px] rounded-md bg-green-300 px-6 py-3 font-medium text-black">
            Notify Me
          </button>
        </form>
        {/* privacy  */}
        <p>
          We care bout the protection of your data. Read our{" "}
          <span className="text-green-300">Privacy Policy.</span>
        </p>
      </div>
    </div>
  </section>
);

export default Newsletter;
