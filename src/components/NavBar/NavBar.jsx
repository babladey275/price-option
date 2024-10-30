import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className="bg-yellow-200 py-6" onClick={() => setOpen(!open)}>
      <div className="w-11/12 mx-auto">
        <AiOutlineMenu className="text-2xl md:hidden" />
      </div>
      <ul
        className={`ml-8 py-2 duration-1000 rounded-xl md:flex gap-8 absolute md:static bg-yellow-200 ${
          open ? "top-16" : "-top-52"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
