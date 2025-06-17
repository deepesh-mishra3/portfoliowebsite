import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/deepesh-mishra3",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/deepesh-mishra-720882257/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/deepesh.mishra3/",
    },
  ];

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="w-full max-w-[600px]"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-lightGrey">Let's Connect</h2>
        <p className="text-lightGrey">
          Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="flex gap-4 mt-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-lightGrey hover:text-white transition-all duration-500"
              aria-label={social.name}
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
