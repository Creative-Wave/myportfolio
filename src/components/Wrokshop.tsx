import Link from "next/link";
import KnowButton from "./KnowButton";

const Workshop = () => {
  return (
    <div className="">
      <div className="h-screen md:h-screen md:mx-24 mx-12 flex justify-center items-center">
        <div className="">
          <h1 className="md:text-4xl text-3xl font-bold text- mb-8 md:mb-12">
            Workshop
          </h1>

          <div className="md:flex block justify-center items-center w-full gap-20">
            {/* Background Image Section */}
            <div className="w-full md:w-1/2">
              <img src="/img1.png" className="md:w-[500px] w-[300px]" alt="" />
            </div>

            {/* Text and Button Section */}
            <div className="w-full md:w-1/2 md:text-left">
              <div className="font-bold md:text-xl text-lg">
                Japan Checkpoint
              </div>
              <div className="mt-4 md:text-base text-sm">
                “Discovering Trending Checkpoints in Japan,” “Look Local Area,”
                and images of various locations and user profiles, implying
                social interaction features. Overall, it combines cultural
                elements with social connectivity for travelers in Japan.
              </div>
              <div className="font-black mt-4">UI/UX Design Name</div>
              <div className="mt-6 md:mt-10 ">
                <KnowButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen md:h-screen md:mx-24 mx-12 overflow-hidde flex justify-center items-center">
        <div className="hidden md:block w-full">
          <div className="md:flex block justify-center items-center w-full gap-20">
            <div className="w-full md:w-1/2 md:text-left">
              <h1 className="text-3xl italic font-serif">
                {" "}
                _"As a front-end designer, I merge beauty and function to craft
                engaging digital experiences."_
              </h1>
            </div>

            <div className="w-full md:w-1/2">
              <img src="/tagline.png" className="md:w-full w-[300px]" alt="" />
            </div>
          </div>
        </div>
        <div className="visible md:hidden">
          <div className="md:flex block justify-center items-center w-full gap-20">
            <div className="w-full md:w-1/2">
              <img src="/tagline.png" className="md:w-full w-[300px]" alt="" />
            </div>

            <div className="w-full md:w-1/2 md:text-left">
              <h1 className="md:text-3xl text-xl italic font-serif">
                {" "}
                _"As a front-end designer, I merge beauty and function to craft
                engaging digital experiences."_
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen md:h-screen md:mx-24 mx-12 flex justify-center items-center">
        <div className="">
          <div className="md:flex block justify-center items-center w-full gap-20">
            {/* Background Image Section */}
            <div className="w-full md:w-1/2">
              <img src="/img2.png" className="md:w-[700px] w-[300px]" alt="" />
            </div>

            {/* Text and Button Section */}
            <div className="w-full md:w-1/2 md:text-left">
              <div className="font-bold md:text-xl text-lg">
                Easy and quick Learn Language online
              </div>
              <div className="mt-4 md:text-base text-sm">
                This is a modern and dynamic feel for language learners.It will
                korks Smartphone with a language learning application’s UI
                design.
              </div>
              <div className="font-black mt-4">UI/UX Design Name</div>
              <div className="mt-6 md:mt-10 ">
                <KnowButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
