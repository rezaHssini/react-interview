import { useState } from "react";
import { login } from "../lib/api";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await login(email, password);
    if (res.token) {
      localStorage.setItem("token", res.token);
      router.push("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
