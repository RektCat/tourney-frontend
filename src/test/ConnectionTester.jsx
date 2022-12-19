import React, { useEffect } from "react";
import { io } from "socket.io-client";
import APIURL from "../static/constants/apiurl";

function ConnectionTester() {
  const socket = io(APIURL, { reconnectionAttempts: 5, reconnectionDelay: 2500 });

  const click = () => {
    console.log("clicked");
    socket.emit("hello", "world", (res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(APIURL);
        const json = response.json();
        console.log({ json });
      } catch (error) {
        console.log({ error });
      }
    })();
  }, []);

  return (
    <div>
      <h1>Connection Tester</h1>
      <button onClick={click}>Socket test</button>
    </div>
  );
}

export default ConnectionTester;
