import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { setUser } = useContext(MyContext);
  let navigate = useNavigate();
  function handleClick() {
    setUser(null);
    navigate("/");
  }
  return (
    <div>
      Dashboard
      <button onClick={handleClick}>logout</button>
    </div>
  );
};

export default Dashboard;
