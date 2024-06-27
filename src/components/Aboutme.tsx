import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "./Footer";
import { Progress } from "@nextui-org/react";
import Fixedbg from "./Fixedbg";

const Aboutme = () => {
  const [animateProgress, setAnimateProgress] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimateProgress(true);
          observer.disconnect(); // stop observing after animation starts
        }
      },
      {
        threshold: 0.5, // Adjust this value to trigger animation at different visibility levels
      }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <Fixedbg />

      {/* Content Section */}
      <div className="md:h-screen lg:h-[110dvh] h-auto">
        <div className="md:flex block justify-center items-center md:mx-24 mx-12 md:gap-11 gap-6 h-full">
          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-start pt-8 md:mb-0">
            <Link href={"/"}>
              <img
                src="/PORTFOLIO IMAGE2.png"
                alt="Portfolio"
                className="w-[220px] sm:w-[270px] md:w-[350px] lg:w-[450px] md:mt-0 mt-6 "
              />
            </Link>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 w-full text-left">
            <h1 className="text-2xl md:text-2xl lg:text-5xl font-bold lg:mb-6 mb-4 md:mt-9 mt-8">
              About me
            </h1>
            <div className="text-[14px] md:text-xl font-bold mb-5">
              Hi there, I'm Jayanta Debnath
            </div>
            <p className="text-xs lg:text-[15px] font-mono md:mb-8 mb-0">
              I am a skilled UI/UX Designer with 2 years of experience, bringing
              a combined focus on user-centric design and front-end development
              to create exceptional mobile applications. I excel at translating
              complex user needs into intuitive and visually engaging interfaces
              that prioritize user experience (UX) principles. My expertise lies
              in crafting user flows and information architecture to optimize
              the user journey, while ensuring a seamless and efficient
              interaction through strong front-end development skills.
              <br />
              <br />
              I'm a quick learner and eager to expand my knowledge in the
              ever-evolving field of UX design. I'm confident that my skills and
              enthusiasm would be a valuable asset to your team.
            </p>
          </div>
        </div>
      </div>

      {/* About Content Start */}
      <div
        ref={progressRef}
        className="md:h-screen h-auto md:mx-24 mx-12 md:mt-0 mt-20">
        <div className="md:flex block justify-center items-center">
          <div className="md:w-1/2 w-full">
            <h1 className="text-xl md:text-2xl lg:text-5xl font-bold mt-7">
              <span className="">My</span> <br />
              Expertise
            </h1>
            <p className="mt-5">
              Domain expertise in specific mobile application sectors (e.g.,
              e-commerce, education, gaming). Your design and development
              process (e.g., user research, wireframing, prototyping,
              development using specific frameworks). Quantifiable achievements
              from past projects showcasing the impact of your design and
              development solutions (e.g., increased user engagement, improved
              conversion rates, reduced development time).
            </p>

            {/* Progress Bars */}
            <div className="mt-5">
              <div className="font-bold mt-2">
                Creativity
                <Progress
                  aria-label="HTML Skill Level"
                  value={animateProgress ? 70 : 0}
                  className="max-w-md mt-3 transition-all duration-1000 ease-in-out"
                />
              </div>
              <div className="font-bold mt-2">
                Designing
                <Progress
                  aria-label="CSS Skill Level"
                  value={animateProgress ? 85 : 0}
                  className="max-w-md mt-3 transition-all duration-1000 ease-in-out "
                  color="success"
                />
              </div>
              <div className="font-bold mt-2">
                Concept
                <Progress
                  aria-label="JavaScript Skill Level"
                  value={animateProgress ? 75 : 0}
                  className="max-w-md mt-3 transition-all duration-1000 ease-in-out "
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <img src="/about.png" className="mt-10" alt="About" />
          </div>
        </div>
      </div>
      {/* About Content End */}
      <div className="md:h-screen h-auto md:mx-24 mx-12 md:mt-10 mt-20">
        <div className="h-full flex justify-center items-center">
          <div className="flex justify-between items-center w-full">
            <div className="md:w-2/3 w-full">
              <h1 className="text-xl md:text-2xl lg:text-5xl font-bold">
                Key Skills
              </h1>
              <p className="mt-5">
                <span className="text-xl font-bold">
                  User Interface (UI) Design:{" "}
                </span>
                Adept at creating user-friendly and aesthetically pleasing
                interfaces that are clear, concise, and foster a positive user
                experience.
              </p>{" "}
              <p className="mt-5">
                <span className="text-xl font-bold">
                  User Experience (UX) Design:{" "}
                </span>
                Proficient in applying UX best practices to design user flows,
                information architecture, and interaction models that prioritize
                user needs and goals.
              </p>{" "}
              <p className="mt-5">
                <span className="text-xl font-bold">
                  Front-End Development:{" "}
                </span>
                Possess a strong understanding of front-end technologies
                (mention specific languages and frameworks you're proficient in
                here) to bring design mockups to life and ensure smooth user
                interaction.
              </p>{" "}
              <p className="mt-5">
                <span className="text-xl font-bold">Mobile App Design: </span>
                Deep understanding of mobile application design best practices
                and guidelines to create responsive and performant interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Aboutme;
