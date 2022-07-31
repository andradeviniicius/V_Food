import React, { FC } from "react";

const MainButton: React.FC<{ title: string }> = ({ title }) => {
  return <button>{title}</button>;
};

export default MainButton;