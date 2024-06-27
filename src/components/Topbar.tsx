import { ReactNode } from "react";
import Navbar from "./Navbar";

type ChildernPropsType = {
  children: ReactNode;
};

const Topbar = ({ children }: ChildernPropsType) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Topbar;
