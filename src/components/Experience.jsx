import { motion } from "framer-motion";

const data = [
  {
    type: "Experience",
    role: "Specialist Programmer",
    org: "Infosys, Hyderabad",
    period: "Aug 2023 – Present",
    details: [
      "Completed 12-week full-stack training in Java Spring Boot, Microservices, Angular, Docker, and Kubernetes.",
      "Worked on Openshift to AWS EKS migration, created 10+ Springboot microservices, CI/CD with Jenkins, and UI components for workflow enhancements.",
      "Boosted infra efficiency by 40% and deployment speed by 25%.",
    ],
  },
  {
    type: "Internship",
    role: "Software Engineer Intern",
    org: "Cisco Netacad – Remote",
    period: "Dec 2019 – May 2020",
    details: [
      "Completed 6-month structured internship and 3+ real-world projects.",
      "Gained proficiency in C, HTML, JS, and networking concepts.",
    ],
  },
  {
    type: "Education",
    role: "B.Tech, Computer Science",
    org: "ANITS, Visakhapatnam",
    period: "2017 – 2020",
    details: ["GPA: 8.8/10"],
  },
  {
    type: "Education",
    role: "Diploma, Computer Engineering",
    org: "Govt. Polytechnic, Visakhapatnam",
    period: "2014 – 2017",
    details: ["Grade: 88/100"],
  },
];

const Experience = () => {
  return (
    <div className="py-20 bg-gray-100 dark:bg-[#111827] dark:text-white"> 
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10"
        >
          Experience & Education
        </motion.h2>

        <div className="space-y-8">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#1e1e2e] p-6 rounded-xl border-l-4 border-pink-600 shadow-md"
            >
              <p className="text-sm text-pink-600 font-semibold">
                {item.type}
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {item.role}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {item.org} &middot; <span className="italic">{item.period}</span>
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
