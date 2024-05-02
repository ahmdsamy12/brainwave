import { companyLogos } from "../constants";

// eslint-disable-next-line react/prop-types
const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="mb-6 tagline text-center text-n-1/50">
        Helping People create beautiful content at
      </h5>

      <ul className="flex">
        {companyLogos.map((logo, i) => (
          <li
            key={i}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <img src={logo} alt="logo" width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
