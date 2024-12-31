import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
// import logo from "../assets/simple_icon.webp";
export default function NavBar() {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();
  return (
    <nav className="mb-4 flex w-full items-center justify-center rounded-lg shadow-lg">
      <div className="logo h-12 w-12">
        {/* <img src={logo} alt="My Logo" /> */}
      </div>
      <ul className="mx-auto w-3/4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About Me</Link>
        </li>
        {/* <li>
          <Link to={"/about/showcases"}>Show Cases</Link>
        </li> */}
        <li>
          <Link to={"/articles"}>Articles</Link>
        </li>
      </ul>
      <div className="">
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          <>
            {user && (
              <li style={{ color: "white" }}>Logged in as {user.email}</li>
            )}
            <li>
              {user ? (
                <button onClick={() => signOut(getAuth())}>Sign Out</button>
              ) : (
                <button onClick={() => navigate("/login")}>Sign In</button>
              )}
            </li>
          </>
        )}
      </div>
    </nav>
  );
}
