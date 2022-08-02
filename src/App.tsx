import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ErrorMessage } from "./components/Atoms";
import { MainHeader, MainFooter } from "./components/Organisms";
import { Home } from "./components/Pages";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recipes" element={<ErrorMessage />} />
          <Route path="/blogListPage" element={<ErrorMessage />} />
          <Route path="/aboutUs" element={<ErrorMessage />} />
          <Route path="/contact" element={<ErrorMessage />} />
        </Routes>
      </main>
      <MainFooter />
    </>
  );
}

export default App;
