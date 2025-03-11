import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function login() {
    try {
      if (!email || !password) {
        setError("Email and password not provided");
        return;
      }
      navigate("/articles");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className="mx-auto w-96 rounded-lg border border-secondary p-4 shadow-lg">
      <h2 className="mb-2 text-2xl font-bold">Login</h2>
      {error && <p className="text-danger">{error}</p>}
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your email Address"
          value={email}
          className="rounded-lg bg-secondary p-2"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          className="rounded-lg bg-secondary p-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
        <Link to={"/create-account"} className="text-center">
          Don&apos;t Have an account? Create one
        </Link>
      </div>
    </div>
  );
}
