import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-[#0f0f1a] text-white px-6 py-20"
    >
      {/* 🔮 Animated Blobs with parallax-style movement */}
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

      {/* 📫 CTA Button */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-block bg-pink-600 px-8 py-3 text-lg font-medium rounded-lg hover:bg-pink-700 transition relative z-10"
      >
        Contact Me
      </motion.a>
    </section>
  );
};

export default Hero;
