import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => (
  <div className="w-full bg-white px-4 py-[10rem]">
    <div className="mx-auto grid max-w-[1240px] gap-8 text-black md:grid-cols-3">
      <Card
        icon={Single}
        title="Single User"
        price="$149"
        storage="500 GB Storage"
        usersAllowed="1 Granted User"
        dataTransferLimit="Send up to 2 GB"
      />

      <Card
        icon={Double}
        title="Partnership"
        price="$199"
        storage="1 TB Storage"
        usersAllowed="3 Granted User"
        dataTransferLimit="Send up to 10 GB"
      />

      <Card
        icon={Triple}
        title="Group Account"
        price="$299"
        storage="5 TB Storage"
        usersAllowed="10 Granted User"
        dataTransferLimit="Send up to 20 GB"
      />
    </div>
  </div>
);

const Card = ({
  icon,
  title,
  price,
  storage,
  usersAllowed,
  dataTransferLimit,
}: Record<string, string>) => {
  return (
    <div
      data-cy="cards-card"
      className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 even:bg-gray-100 hover:scale-105"
    >
      <img className="mx-auto mt-[-3rem] w-20" src={icon} alt="/" />
      <h2 className="py-8 text-center text-2xl font-bold">{title}</h2>
      <p className="text-center text-4xl font-bold">{price}</p>
      <div className="text-center font-medium">
        <p className="mx-8 mt-8 border-b py-2">{storage}</p>
        <p className="mx-8 border-b py-2">{usersAllowed}</p>
        <p className="mx-8 border-b py-2">{dataTransferLimit}</p>
      </div>
      <button className="mx-auto my-6 w-[200px] rounded-md bg-green-200 px-6 py-3 font-medium hover:bg-green-100">
        Start Trial
      </button>
    </div>
  );
};

export default Cards;
