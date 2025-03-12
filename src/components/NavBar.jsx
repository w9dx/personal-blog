import { Link } from "react-router-dom";

// import logo from "../assets/simple_icon.webp";
export default function NavBar() {
  return (
    <nav className="mb-4 flex w-full items-center rounded-lg shadow-lg">
      <div className="logo h-12 w-12">
        {/* <img src={logo} alt="My Logo" /> */}
      </div>
      <ul className="mr-auto">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About Me</Link>
        </li>
        {/* <li>
          <Link to={"/about/showcases"}>Show Cases</Link>
        </li> */}
      </ul>
      <button>Login</button>

    </nav>
  );
}
