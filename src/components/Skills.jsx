import { motion } from "framer-motion";

const skills = [
  "Java",
  "Spring Boot",
  "Python",
  "Node.js",
  "React",
  "JavaScript",
  "TypeScript",
  "MongoDB",
  "SQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Tibco",
  "Kafka",
  "Git",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <div className="py-20 bg-white dark:bg-[#0f0f1a]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-10"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="px-5 py-2 bg-pink-600 text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transform transition"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
