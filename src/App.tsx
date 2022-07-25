import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainHeader from "./components/Organisms/MainHeader";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <Routes>
        <Route path="/" element={<Navigate to={'/home'}/>}/>
      </Routes>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
