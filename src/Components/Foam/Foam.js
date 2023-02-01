import React, { useState } from "react";
import "./Foam.css";

const Foam = () => {
  const[first,second]=useState('');
const email=(event)=>{
second(event.target.value);
}
  return (
    <>

    
    <div className="main-foam">
      <div className="Login">
        <h1
          style={{
            color: "white",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Login
        </h1>

        <span style={{ display: "flex", justifyContent: "center" }}>
          <input
          onChange={email}
            style={{
              height: "35px",
              width: "300px",
              textAlign: "center",
              borderRadius: "9px",
              border: "none",
            }}
            placeholder="Enter Email"
            type="text"
            name=""
            id=""
          />
        </span>
        <br />
        <span style={{ display: "flex", justifyContent: "center" }}>
          <input
            style={{
              height: "35px",
              width: "300px",
              textAlign: "center",
              borderRadius: "9px",
              border: "none",
            }}
            placeholder="Enter Passowrd"
            type="password"
            name=""
            id=""
          />
        </span>
        <br />
        <button
          className="btn"
          style={{
            marginLeft: "155px",
            height: "30px",
            width: "100px",
            fontWeight: "bolder",
            borderRadius:"12px",marginTop:"6px"
          }}
        >
          Login
        </button>

      </div>
      <div style={{backgroundColor:"white"}}>
      {first}

      </div>
    </div>




    </>
  );
};

export default Foam;
