import Link from "next/link";
import { useEffect, useState } from "react";
import Wrokshop from "./Wrokshop";
import Footer from "./Footer";
import Fixedbg from "./Fixedbg";
import { Button } from "@nextui-org/react";

const Display = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animations after component mounts
    setLoaded(true);
  }, []);

  return (
    <>
      {/* hero section start */}
      <div className="relative overflow-hidden ">
        <Fixedbg />
        {/* hero section start */}
        <div className="mx-6 md:mx-12 lg:mx-24  md:h-screen lg:h-screen h-[110dvh]  md:overflow-hidden overflow-visible md:mt-0 mt-16">
          <div className="flex-row md:flex justify-between md:items-center items-start w-full h-full">
            <div
              className={`transform transition-transform duration-[1200ms] delay-[300ms] ease-in-out ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } md:text-left text-left`}>
              <div className="text-2xl font-bold">Hi there, I’m Jayanta</div>
              <h1 className="xl:text-6xl text-3xl font-bold mt-4">
                Frontend{" "}
                <span data-text="Developer..." className="strok mx-2">
                  Developer...
                </span>
              </h1>
              <div className="mt-6 md:mt-8 text-[13px] md:text-base leading-relaxed">
                Hello, I am Jayanta Debnath, a UI/UX designer and frontend{" "}
                <br />
                developer with 2 years of experience encompassing all facets of{" "}
                <br />
                the design and development process. My expertise ranges from
                user <br />
                research and information architecture to prototyping and <br />
                implementation.
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button
                    className="relative md:text-[14px] text-[12px] h-12 border-2 bg-transparent py-2.5 px-5 font-medium uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-none"
                    style={{
                      letterSpacing: "2px",
                    }}>
                    Know More
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className={`mt-20 md:mt-0 transform transition-transform duration-[1200ms] delay-[300ms] ease-in-out ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              } md:text-right text-right w-full md:w-auto `}>
              <Link href={"/"}>
                <img
                  src="/PORTFOLIO IMAGE.png"
                  alt="Portfolio"
                  className="w-[220px] sm:w-[270px] md:w-[450px] ml-auto md:ml-0 -mt-20 md:mt-0"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* hero section end */}
      </div>
      {/* hero section end */}
      {/* workshop section start */}
      <div className="">
        <Wrokshop />
      </div>
      {/* workshop section end */}

      {/* workshop carousel section start */}
      {/* <div className="">
        <Workcarousel />
      </div> */}
      {/* workshop carousel section end */}

      {/* footer section start */}
      <Footer />
      {/* footer section end */}
    </>
  );
};

export default Display;
