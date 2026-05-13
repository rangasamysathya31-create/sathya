"use client";

import { motion } from "framer-motion";

export default function Home() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "API Integration",
    "VS Code",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white overflow-hidden relative">

      {/* Background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">

            <motion.img
              whileHover={{ scale: 1.08 }}
              src="/sathya.jpeg"
              alt="profile"
              className="w-44 h-44 rounded-full border-4 border-pink-500 shadow-2xl object-cover"
            />

            <div className="text-center md:text-left">
              <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Sathya R
              </h1>

              <p className="text-2xl mt-3 text-gray-300">
                Frontend Developer | Next.js Developer
              </p>
            </div>

          </div>
        </motion.div>

        {/* About */}
        <motion.section
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-pink-400">
            About Me
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-9">
            Passionate frontend developer interested in creating modern
            and responsive web applications using React, Next.js and Tailwind CSS.
          </p>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-pink-400">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-5 rounded-2xl text-center text-lg font-semibold shadow-xl"
              >
                {skill}
              </motion.div>
            ))}

          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-pink-400">
            Education
          </h2>

          <div className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold">
              Diploma in Computer Science Engineering
            </h3>

            <p>Paavai Polytechnic College</p>

            <p>2023 - 2026</p>
          </div>
        </motion.section>

      </div>

    </main>
  );
}