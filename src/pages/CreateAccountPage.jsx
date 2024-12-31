import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function CreateAccountPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  async function createAccount() {
    if (!email || !password || !confirmPassword) {
      setError("Email and password not provided");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/articles");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className="mx-auto w-96 rounded-lg border border-secondary p-4 shadow-lg">
      <h2 className="mb-2 text-2xl font-bold">Create account</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          className="rounded-lg bg-secondary p-2"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={createAccount}>Create Account</button>
        <Link className="text-center" to={"/login"}>
          Already have account? Login in
        </Link>
      </div>
    </div>
  );
}
