import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center my-5">
        <h1 className="text-secondary">Chopar Cargo Xizmatiga Xush Kelibsiz</h1>
        <button className="btn btn-primary" onClick={() => navigate("/add")}>
          Add Contact
        </button>
      </div>
    </>
  );
}

export default Header;
