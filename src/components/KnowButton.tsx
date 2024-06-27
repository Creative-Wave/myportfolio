import { Button } from "@nextui-org/react";
import Link from "next/link";

const KnowButton = () => {
  return (
    <>
      {" "}
      <Link href="/work">
        <Button
          className="relative md:text-[14px] text-[12px] h-12 border-2 bg-transparent py-2.5 px-5 font-medium uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-none"
          style={{
            letterSpacing: "2px",
          }}>
          See More
        </Button>
      </Link>
    </>
  );
};

export default KnowButton;
