import React, { useEffect, useState } from "react";
import logo from "../assets/react.svg";

// Chat component
const Chat = (props) => {
  const [message, setMessage] = useState("");
  useEffect(() => {}, [props.message]);

  return (
    <div>
      <div className="flex flex-col w-screen mt-12 items-center">
        <div className="w-96">
          {props.message.map((ele, key) => (
            <div>
              <div
                key={key}
                className="badge badge-lg my-1 py-6 max-w-lg h-auto justify-start transition-opacity duration-1000 ease-out"
                style={{ backgroundColor: "#fff", borderRadius: "0 20px 20px" }}
              >
                {ele}
              </div>
              <br />
              {key === 4 ? (
                <div
                  key={key}
                  className="badge badge-lg my-1 py-6 max-w-lg h-auto justify-start transition-opacity duration-1000 ease-out"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "0 20px 20px",
                  }}
                >
                  <img className="flex" src={logo} alt="" />{" "}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
