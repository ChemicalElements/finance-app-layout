import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto grid max-w-[1240px] gap-8 p-16  text-gray-300 lg:grid-cols-3">
      <div>
        <FooterIntro />
      </div>

      <div className="mt-6 flex justify-between lg:col-span-2">
        <FooterList
          title="Solutions"
          items={["Analytics", "Marketing", "Commerce", "Insights"]}
        />

        <FooterList
          title="Support"
          items={["Pricing", "Documentation", "Guides", "API Status"]}
        />

        <FooterList
          title="Company"
          items={["About", "Blog", "Jobs", "Press", "Careers"]}
        />

        <FooterList title="Legal" items={["Claim", "Policy", "Terms"]} />
      </div>
    </footer>
  );
};

const FooterIntro = () => {
  return (
    <>
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <p className="py-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam
        iste repellat consequatur libero reiciendis, blanditiis accusantium.
      </p>
      <div className="my-6 flex justify-between md:w-[75%]">
        <FaFacebookSquare size={30} />
        <FaInstagram size={30} />
        <FaTwitterSquare size={30} />
        <FaGithubSquare size={30} />
        <FaDribbbleSquare size={30} />
      </div>
    </>
  );
};

const FooterList = ({ title, items }: { title: string; items: string[] }) => {
  const list = items.map((item) => <li className="py-2 text-sm">{item}</li>);

  return (
    <div>
      <h6 className="font-medium text-gray-400">{title}</h6>
      <ul>{list}</ul>
    </div>
  );
};

export default Footer;
