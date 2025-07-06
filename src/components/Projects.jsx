import { motion } from "framer-motion";

const projects = [
  {
    title: "QuickChat",
    description:
      "Real-time messaging app with 10+ REST APIs, WebSocket, JWT auth, and MongoDB.",
    stack: ["Java", "Spring Boot", "React", "JWT", "MongoDB", "Socket"],
    github: "https://github.com/ashokram004/quickchat",
    demo: "#",
  },
  {
    title: "Smuggler Game",
    description:
      "Browser game with 100+ animated components, levels, and character logic using JS/CSS.",
    stack: ["HTML", "CSS", "Vanilla JS", "Firebase"],
    github: "https://github.com/ashokram004/smartsmuggler.io",
    demo: "https://smartsmuggler.netlify.app/",
  },
  {
    title: "V PREP",
    description:
      "Interview preparation website for Students using Voice based AI with Javascript, Google Firebase.",
    stack: ["HTML", "CSS", "Vanilla JS", "Firebase"],
    github: "https://github.com/ashokram004/vprep",
    demo: "https://vprep.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="py-20 bg-gray-100 dark:bg-[#111827] dark:text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#1e1e2e] rounded-2xl shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-pink-600">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-pink-100 text-pink-700 dark:bg-pink-800 dark:text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-4 justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  GitHub
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded bg-pink-600 text-white hover:bg-pink-700 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 👉 View All Button */}
        <motion.a
          href="https://github.com/ashokram004?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition"
        >
          View All Projects
        </motion.a>
      </div>
    </div>
  );
};

export default Projects;
