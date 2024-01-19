"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "./login";

const Form = () => {
  const [email, setEmail] = useState("hello");
  const [password, setPassword] = useState("world");
  const router = useRouter();

  return (
    <form
      className="max-w-sm mx-auto"
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await login(email, password);
        if (result) {
          router.replace("/");
          return;
        }
        alert("login failed");
      }}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
};

export default Form;
