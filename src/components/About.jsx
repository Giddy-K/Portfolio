import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p>
          I am a dynamic and versatile full stack developer with expertise in
          web and Android application development. With a strong foundation in
          frontend technologies such as HTML, CSS, and JavaScript, I create
          engaging and interactive user interfaces. My proficiency in backend
          languages like Node.js and Python allows me to design efficient APIs
          and integrate databases for seamless data flow. Additionally, my
          skills in Java and Flutter[dart] enable me to develop intuitive and
          feature-rich Android applications. I bring an added creative flair to
          my projects through my expertise in Figma designs, ensuring visually
          appealing and user-centric interfaces. Furthermore, my knowledge of
          computer system maintenance ensures smooth operations and optimized
          performance. With a passion for delivering comprehensive solutions, I
          am dedicated to creating robust and scalable applications that exceed
          expectations.
        </p>

        <p className="mt-4">
          As an aspiring game developer, I am driven by a deep passion for
          creating immersive and captivating gaming experiences. I envision
          developing games that transport players to new worlds, evoke emotions,
          and provide endless hours of enjoyment. I believe that game
          development is an art form that combines technical expertise with
          creativity. I strive to master various game development frameworks,
          engines, and programming languages to bring my ideas to life. Whether
          it&apos;s Unity, Unreal Engine, or other tools, I am committed to
          honing my skills and staying up-to-date with the latest advancements
          in the industry. In my game development journey, I aim to explore
          different genres, from action-packed adventures to puzzle-solving
          challenges and thought-provoking narratives. I am excited about
          crafting engaging gameplay mechanics, designing visually stunning
          environments, and implementing captivating storytelling elements that
          resonate with players.
        </p>

        <p className="mt-4">
          I value the player experience above all else. I want players
          to feel a sense of wonder, excitement, and satisfaction when they
          interact with my games. I strive to create intuitive controls,
          balanced gameplay mechanics, and memorable moments that leave a
          lasting impact. Furthermore, I am fascinated by the potential of
          emerging technologies such as virtual reality (VR) and augmented
          reality (AR) in game development. I see these technologies as powerful
          tools for delivering even more immersive and transformative
          experiences to players.
        </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
