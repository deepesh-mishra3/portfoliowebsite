import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import SingleProject from "./SingleProject";

const ProjectsMain = () => {
  const projects = [
    {
      title: "AI Trip Planner",
      description: "An AI-powered travel planning application that helps users create personalized travel itineraries. Features include destination recommendations, budget planning, and real-time weather updates.",
      image: "ai trip planner.png",
      github: "https://github.com/deepesh-mishra3/AI-Trip-Planner-",
      live: "https://ai-trip-planner-project.netlify.app/"
    },
    {
      title: "Imagify",
      description: "A modern image editing and enhancement platform that allows users to transform and optimize their images. Features include filters, cropping, and AI-powered image enhancement.",
      image: "imagify (1).png",
      github: "https://github.com/deepesh-mishra3/Imagify-Text-To-Image",
      live: "https://imagify-image-generator.netlify.app/"
    }
  ];

  return (
    <div className="w-full">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-full"
            >
              <SingleProject
                title={project.title}
                description={project.description}
                image={project.image}
                github={project.github}
                live={project.live}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
