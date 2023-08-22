import React, { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-full mx-auto px-12 md:px-52">{children}</div>;
};

export default Wrapper;
