import React, { useState } from "react";

const Clock = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { userName, email, password, confirmPassword } = data;
  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password id incorrect");
    } else {
      console.log(data);
    }
  };
  return (
    <form onSubmit={submit}>
      <input type="text" name="userName" value={userName} onChange={change} />
      <br />
      <input type="email" name="email" value={email} onChange={change} /> <br />
      <input
        type="password"
        name="password"
        value={password}
        onChange={change}
      />
      <br />
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={change}
      />
      <br />
      <input type="submit" name="submit" />
    </form>
  );
};

export default Clock;
