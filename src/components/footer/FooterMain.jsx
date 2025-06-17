import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];

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
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey">Deepesh Mishra</p>
        <div className="flex items-center gap-8">
          <ul className="flex gap-4 text-lightGrey text-xl">
            {footerLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-120}
                    to={item.section}
                    className="hover:text-white transition-all duration-500 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-lightGrey hover:text-white transition-all duration-500"
                aria-label={social.name}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2024 Deepesh | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
