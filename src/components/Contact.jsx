import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-20 bg-gray-100 dark:bg-[#111827] text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Contact Me
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-white dark:bg-[#1e1e2e] border border-gray-300 dark:border-gray-600 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-white dark:bg-[#1e1e2e] border border-gray-300 dark:border-gray-600 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded bg-white dark:bg-[#1e1e2e] border border-gray-300 dark:border-gray-600 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10 flex justify-center gap-6 text-2xl"
        >
          <a
            href="https://github.com/ashokram004"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ashok-kumar-thammineni-b250aa194/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ashok.thammineni1@gmail.com"
            className="hover:text-pink-600 transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
