import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Info</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
        consequuntur debitis repellat mollitia quisquam blanditiis illo
        praesentium, provident quos beatae?
      </p>
      <button className="btn" onClick={() => navigate("/")}>
        Back to business
      </button>
    </>
  );
};
