import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="py-20 bg-white dark:bg-[#0f0f1a]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg leading-8 text-center"
        >
          I'm <span className="font-semibold text-pink-600">Ashok Kumar Thammineni</span> — a passionate full stack developer with 2 years of experience building scalable, production-grade applications. I specialize in Java Spring Boot for backend microservices, React for modern frontends, and AWS for cloud-native deployments. I enjoy designing robust systems, integrating CI/CD pipelines, and crafting seamless user experiences. I'm also passionate about DSA and exploring AI technologies to stay ahead in the tech landscape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          Based in Visakhapatnam | Full Stack Developer | Open to Opportunities
        </motion.div>
      </div>
    </div>
  );
};

export default About;
