import Link from "next/link";
import KnowButton from "./KnowButton";

const ImageSlider = () => {
  return (
    <>
      <div className="mx-12 md:mx-12 lg:mx-24  md:h-screen h-auto flex justify-center items-center md:overflow-hidden overflow-visible md:mt-0 mt-20">
        <div className="hidden md:block">
          <div className="md:flex block justify-between items-center gap-10">
            <div className="md:w-1/2 w-full">
              <div className="">
                <div className="md:text-4xl text-xl font-bold">
                  Invites users to explore an adventurous world.
                </div>

                <div className="mt-6 md:mt-8 text-[13px] md:text-base leading-relaxed">
                  This UI design combines aesthetics and functionality to engage
                  gaming enthusiasts.
                </div>
                <div className="mt-8">
                  A good UI ensures players can effortlessly understand the
                  information presented. This involves clear menus, intuitive
                  icons, and well-chosen fonts that are easy to read during
                  gameplay. pen_spark
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <Link href={"/"}>
                <img
                  src="/project4.png"
                  className="w-[480px] sm:w-[500px] md:w-[600px]"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="visible md:hidden">
          <div className="md:flex block justify-between items-center">
            <div className="md:w-1/2 w-full">
              <Link href={"/"}>
                <img
                  src="/project4.png"
                  className="w-[480px] sm:w-[500px] md:w-[600px]"
                  alt=""
                />
              </Link>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="">
                <div className="md:text-4xl text-xl font-bold mt-10 md:mt-0">
                  Invites users to explore an adventurous world.
                </div>

                <div className="mt-6 md:mt-8 text-[13px] md:text-base leading-relaxed">
                  This UI design combines aesthetics and functionality to engage
                  gaming enthusiasts.
                </div>
                <div className="mt-8">
                  A good UI ensures players can effortlessly understand the
                  information presented. This involves clear menus, intuitive
                  icons, and well-chosen fonts that are easy to read during
                  gameplay. pen_spark
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
