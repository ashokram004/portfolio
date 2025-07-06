import { motion } from "framer-motion";

const certs = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Infosys",
    date: "Jun 2024",
    link: "https://drive.google.com/drive/folders/1GlKWIDmtgw3-jY15gg3tQhp5WaYTHbY_", 
  },
  {
    title: "React Professional",
    issuer: "Infosys",
    date: "Aug 2024",
    link: "https://drive.google.com/file/d/1JjjFdgTaSiOWzA9AuisWYjLYLK5Gy4je/view?usp=sharing", 
  },
  {
    title: "Python for Everybody",
    issuer: "University of Michigan / Coursera",
    date: "Jun 2021",
    link: "https://drive.google.com/file/d/1LjrKAHuvrtKyJ5pYH5-cVpOVDFJ1qqzl/view?usp=sharing", 
  },
];

const Certifications = () => {
  return (
    <div className="py-20 bg-white dark:bg-[#0f0f1a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10"
        >
          Certifications
        </motion.h2>

        <div className="space-y-6 text-left">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-gray-50 dark:bg-[#1c1c2c] p-5 rounded-xl shadow-md border-l-4 border-pink-600"
            >
              <h3 className="text-lg font-semibold text-pink-600">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {cert.issuer} &middot;{" "}
                <span className="italic">{cert.date}</span>
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-500 hover:underline mt-1 inline-block"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>

        <a
          href="https://drive.google.com/drive/folders/1GlKWIDmtgw3-jY15gg3tQhp5WaYTHbY_"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition"
        >
          View All Certifications
        </a>
      </div>
    </div>
  );
};

export default Certifications;
