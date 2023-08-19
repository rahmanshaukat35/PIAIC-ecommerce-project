import React, { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-full mx-auto px-4 md:px-28">{children}</div>;
};

export default Wrapper;
