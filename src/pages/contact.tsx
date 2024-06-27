import Topbar from "@/components/Topbar";
import { darkTheam } from "@/utilities/darktheam";
import { useAtom } from "jotai";
import { useEffect } from "react";

const contact = () => {
  const [theam, setTheam] = useAtom(darkTheam);

  useEffect(() => {
    if (theam) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theam]);
  return (
    <>
      <Topbar children />
    </>
  );
};

export default contact;
