import "./App.css";
import React from "react";
import zeroUmHooks from "./components/zeroUmHooks";
import zeroDoisHooks from "./components/zeroDoisHooks";
import zeroTresHooks from "./components/zeroTresHooks";
import useStateStrObj from "./components/useStateStrObj";

export default function App() {
  return (
    <>
      {/* {zeroUmHooks()}
      {zeroDoisHooks()}
      {zeroTresHooks()} */}
      {useStateStrObj()}
    </>
  );
}
