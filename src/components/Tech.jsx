import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc/index";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint if needed
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile); // Update on resize

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {!isMobile &&
        technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
