import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex gap-2 items-center">
        <IoIosCheckmarkCircle className="text-green-400" />
        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
