import { darkTheam } from "@/utilities/darktheam";
import { useAtom } from "jotai";
import { MoonIcon, SunIcon } from "lucide-react";

const Darkswitch = () => {
  const [theam, setTheam] = useAtom(darkTheam);

  // Toggle the theme between true (dark) and false (light)
  const toggleTheme = () => {
    setTheam(!theam);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="p-2 rounded-full focus:outline-none transition-transform duration-300">
        {theam ? <MoonIcon size={24} /> : <SunIcon size={24} />}
      </button>
    </div>
  );
};

export default Darkswitch;
