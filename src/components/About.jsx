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
          I am a dynamic and versatile full-stack developer specializing in
          modern web and Android application development. My expertise spans the
          MERN stack (MongoDB, Express.js, React, and Node.js), enabling me to
          build robust, scalable, and data-driven applications. With a strong
          foundation in frontend technologies such as HTML, CSS, and JavaScript
          (ES6+), along with experience in frameworks like React and Next.js, I
          craft engaging and interactive user interfaces. On the backend, my
          proficiency in Node.js, Express.js, and Python empowers me to design
          efficient APIs and seamlessly integrate databases, including MongoDB
          and PostgreSQL, for smooth data flow. In addition, my skills in Java
          and Flutter (Dart) allow me to develop intuitive, cross-platform, and
          feature-rich mobile applications for Android. I enhance my projects
          with visually appealing, user-centric designs created using Figma,
          bringing a refined creative touch to every application. My technical
          knowledge extends to DevOps practices, containerization with Docker,
          and deployment pipelines, ensuring optimized, production-ready
          solutions. Driven by a passion for delivering comprehensive,
          innovative, and scalable applications, I am dedicated to exceeding
          expectations in every project.
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
          I value the player experience above all else. I want players to feel a
          sense of wonder, excitement, and satisfaction when they interact with
          my games. I strive to create intuitive controls, balanced gameplay
          mechanics, and memorable moments that leave a lasting impact.
          Furthermore, I am fascinated by the potential of emerging technologies
          such as virtual reality (VR) and augmented reality (AR) in game
          development. I see these technologies as powerful tools for delivering
          even more immersive and transformative experiences to players.
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
