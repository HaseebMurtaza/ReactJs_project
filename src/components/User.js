import { useState, useEffect } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increased
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @haseeb07</h4>
    </div>
  );
};

export default User;
