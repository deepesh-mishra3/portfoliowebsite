import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub } from "react-icons/si";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "JavaScript",
    icon: SiJavascript,
  },
  {
    skill: "React",
    icon: SiReact,
  },
  {
    skill: "HTML",
    icon: SiHtml5,
  },
  {
    skill: "CSS",
    icon: SiCss3,
  },
  {
    skill: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    skill: "Git",
    icon: SiGit,
  },
  {
    skill: "GitHub",
    icon: SiGithub,
  }
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
