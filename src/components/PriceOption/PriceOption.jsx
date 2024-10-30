import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-600 m-2 flex flex-col text-white rounded-lg p-4">
      <h2 className=" text-center">
        <span className="text-7xl">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-4xl my-8  text-center">{name}</h4>
      <div className="pl-8 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-12 mb-5 w-full bg-green-600 py-2 rounded-full text-xl font-bold hover:bg-green-900">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
