"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    // console.log(data)
    e.preventDefault(); // prevents page reload on submit

    const res = await fetch("/api/route", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(data),
    });

    const r = await res.json();
    console.log(r);
  };

  return (
    <div className="container flex justify-center items-center flex-col min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
