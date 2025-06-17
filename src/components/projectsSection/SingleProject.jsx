import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ title, description, image, github, live }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex w-full sm:flex-col-reverse items-center gap-8 md:flex-row justify-end sm:flex-col"
    >
      <div className="flex flex-col gap-4">
        <h2 className="md:text-3xl sm:text-2xl text-orange">{title}</h2>
        <p className="text-lg text-lightGrey">{description}</p>
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
          >
            GitHub <BsFillArrowUpRightCircleFill />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
          >
            Live Demo <BsFillArrowUpRightCircleFill />
          </a>
        </div>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={`/images/${image}`} alt={title} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
