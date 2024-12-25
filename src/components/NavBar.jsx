import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
// import logo from "../assets/simple_icon.webp";
export default function NavBar() {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();
  return (
    <nav className="flex justify-center items-center w-full rounded-lg shadow-lg mb-4 ">
      <div className="logo h-12 w-12">
        {/* <img src={logo} alt="My Logo" /> */}
      </div>
      <ul className="w-3/4 mx-auto">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/showcases"}>Show Cases</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
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
