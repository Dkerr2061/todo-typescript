import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="mb-4 shadow-2xl">
      <div className="flex justify-between px-3 bg-black h-20 items-center">
        <h1 className="text-3xl font-bold text-white">React TODO List</h1>
        <div className="text-white underline text-xl">
          <Link to="/" className="mx-1">
            Home
          </Link>
          <Link to="/about" className="mx-1">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
