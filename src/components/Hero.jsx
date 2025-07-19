import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaTimes } from "react-icons/fa";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const previewLink =
    "https://drive.google.com/file/d/1W3mKTuRzBvm49aedgo5HlOOv_NHRlZgk/preview";
  const downloadLink =
    "https://drive.google.com/uc?export=download&id=1W3mKTuRzBvm49aedgo5HlOOv_NHRlZgk";

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-[#0f0f1a] text-white px-6 py-20"
    >
      {/* 🔮 Animated Blobs */}
      <motion.div
        className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-pink-500 opacity-50 rounded-full filter blur-[120px] z-0"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-150px] w-[500px] h-[500px] bg-purple-600 opacity-50 rounded-full filter blur-[120px] z-0"
        animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔥 Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-4 text-center relative z-10"
      >
        Hey, I'm <span className="text-pink-500">Ashok</span>
      </motion.h1>

      {/* 🧠 Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-300 max-w-xl text-center relative z-10"
      >
        Engineer by heart — I build clean, scalable apps from frontend to backend to cloud, ready for production.
      </motion.p>

      {/* 🚀 Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-10 z-10"
      >
        <a
          href="#contact"
          className="bg-pink-600 px-8 py-3 text-lg font-medium rounded-lg hover:bg-pink-700 transition"
        >
          Contact Me
        </a>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 border border-pink-600 text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-600 hover:text-white transition cursor-pointer"
        >
          <FaDownload />
          Preview Resume
        </button>
      </motion.div>

      {/* 🪟 Resume Preview Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg w-[90%] max-w-3xl h-[80vh] p-4">
            {/* ❌ Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-pink-600"
            >
              <FaTimes size={20} />
            </button>

            {/* 📝 Embedded Preview */}
            <iframe
              src={previewLink}
              title="Resume Preview"
              className="w-full h-[90%] border rounded"
              allow="autoplay"
            ></iframe>

            {/* ⬇️ Download Button */}
            <div className="flex justify-center mt-4">
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-pink-600 text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-600 hover:text-white transition cursor-pointer"
              >
              <FaDownload />
              Download Resume
            </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
