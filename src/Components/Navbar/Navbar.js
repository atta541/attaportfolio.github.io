// import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main">
      <div className="contents">
        <button
          style={{
            backgroundColor: "transparent",
            marginLeft: "60px",
            fontSize: "22px",
            marginTop: "24px",
            color: "white",
            border: "none",
            fontStyle: "italic",
            cursor:"pointer"
          }}
        >
          Home
        </button>
        <button
          style={{
            backgroundColor: "transparent",
            marginLeft: "100px",
            fontSize: "22px",
            marginTop: "24px",
            color: "white",
            border: "none",
            fontStyle: "italic",
            cursor:"pointer"

          }}
        >
          About us
        </button>
        <button
          style={{
            backgroundColor: "transparent",
            marginLeft: "120px",
            fontSize: "22px",
            marginTop: "24px",
            color: "white",
            border: "none",
            cursor:"pointer",

            fontStyle: "italic",
          }}
        >
          Services
        </button>
        <button
          style={{
            backgroundColor: "transparent",
            marginLeft: "160px",
            fontSize: "22px",
            marginTop: "24px",
            color: "white",
            border: "none",
            fontStyle: "italic",
            cursor:"pointer"

          }}
        >
          Login
        </button>

        <input
        
          style={{
            marginLeft: "500px",
            height: "25px",
            textAlign: "center",
            borderRadius: "12px",
            border: "none",
            // background: "transparent",
            color: "white",
            fontStyle: "initial",
            cursor:"pointer"


          }}
          placeholder="Search Here"
          type="text"
          name=""
          id=""
        />
        <button
        className="btn"
          style={{
            marginLeft: "8px",
            height: "23px",
            color: "white",
            background: "none",
            cursor: "pointer",
            fontSize: "16px",
            border:"2px solid",
            // width:"12px",
            marginTop:"2px",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
