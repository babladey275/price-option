import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div>
      <li className="hover:bg-yellow-500 pl-6 pr-8 md:pr-2 my-2  rounded-lg">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
