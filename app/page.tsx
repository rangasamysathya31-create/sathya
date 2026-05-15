"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  const skills = [
    "HTML",
    "CSS",
    "PYTHON",
    "CLOUD COMPUTING",
    "NEXT JS",
  ];

  return (
    <main className="min-h-screen bg-black py-10 px-4">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-purple-900"
      >

        {/* Header */}
        <section className="bg-gradient-to-r from-black via-purple-950 to-purple-700 text-white px-8 md:px-14 py-12">

          <div className="flex flex-col md:flex-row items-center gap-10">

            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/sathya.jpeg"
              alt="profile"
              className="w-44 h-44 rounded-full border-4 border-purple-400 shadow-2xl object-cover"
            />

            <div className="text-center md:text-left">

              <h1 className="text-5xl md:text-6xl font-extrabold">
                Sathya R
              </h1>

              <p className="mt-4 text-2xl text-purple-200">
                Diploma in Computer Engineering (3rd Year)
              </p>

              <p className="mt-3 text-lg text-gray-300">
                Paavai Polytechnic College - Namakkal, Tamilnadu - 637201
              </p>

              <div className="mt-6 flex flex-col md:flex-row gap-4 md:gap-8 text-gray-300 text-base">
                <p>📞 8220292319</p>
                <p>✉️ rangasamysathya31@gmail.com</p>
              </div>

              <p className="mt-3 text-gray-300">
                📍 Namakkal, Tamilnadu
              </p>

            </div>

          </div>

        </section>

        {/* About */}
        <section className="px-8 md:px-14 py-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-purple-200 rounded-3xl p-8 shadow-lg"
          >

            <h2 className="text-4xl font-extrabold text-purple-900">
              About Me
            </h2>

            <div className="w-24 h-1 bg-purple-700 rounded-full mt-3"></div>

            <p className="mt-6 text-gray-700 text-lg leading-9">
              Enthusiastic and hardworking Computer Engineering student
              with strong interest in software development, cloud
              computing, and web technologies. Passionate about learning
              modern tools and creating responsive applications with
              user-friendly interfaces. Quick learner with good teamwork,
              communication, and problem-solving skills.
            </p>

          </motion.div>

        </section>

        {/* Skills */}
        <section className="px-8 md:px-14 pb-12">

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white border border-purple-200 rounded-3xl p-8 shadow-lg"
          >

            <h2 className="text-4xl font-extrabold text-purple-900">
              Skills
            </h2>

            <div className="w-24 h-1 bg-purple-700 rounded-full mt-3"></div>

            <div className="flex flex-wrap gap-5 mt-8">

              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  className="bg-gradient-to-r from-black via-purple-900 to-purple-700 text-white px-6 py-4 rounded-2xl shadow-xl font-semibold text-lg"
                >
                  {skill}
                </motion.div>
              ))}

            </div>

          </motion.div>

        </section>

        {/* Education */}
        <section className="px-8 md:px-14 pb-12">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white border border-purple-200 rounded-3xl p-8 shadow-lg"
          >

            <h2 className="text-4xl font-extrabold text-purple-900">
              Education
            </h2>

            <div className="w-24 h-1 bg-purple-700 rounded-full mt-3"></div>

            <div className="mt-6">

              <h3 className="text-2xl font-bold text-gray-800">
                Diploma in Computer Engineering
              </h3>

              <p className="mt-2 text-lg text-gray-700">
                Paavai Polytechnic College
              </p>

              <p className="text-gray-600">
                Namakkal, Tamilnadu - 637201
              </p>

              <p className="mt-2 font-semibold text-purple-700">
                Currently Pursuing 3rd Year
              </p>

            </div>

          </motion.div>

        </section>

        {/* Project */}
        <section className="px-8 md:px-14 pb-12">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="bg-gradient-to-r from-black via-purple-950 to-purple-800 text-white rounded-3xl p-8 shadow-2xl"
          >

            <h2 className="text-4xl font-extrabold">
              Project
            </h2>

            <div className="w-24 h-1 bg-purple-400 rounded-full mt-3"></div>

            <h3 className="mt-6 text-2xl font-bold text-purple-200">
              Online Library Book Management System
            </h3>

            <p className="mt-5 text-lg leading-9 text-gray-200">
              Developed an Online Library Book Management System to
              simplify the process of maintaining library records and
              managing books digitally. The project helps students and
              administrators easily handle library operations without
              manual paperwork.
            </p>

            <p className="mt-5 text-lg leading-9 text-gray-200">
              The system includes features such as adding books,
              searching books by title or category, issuing and returning
              books, student management, and tracking book availability.
              Admin users can efficiently update records and manage all
              library activities through a simple dashboard.
            </p>

            <p className="mt-5 text-lg leading-9 text-gray-200">
              This project improved knowledge in frontend development,
              database management, responsive UI design, and handling
              real-time data efficiently in web applications.
            </p>

          </motion.div>

        </section>

        {/* Achievement */}
        <section className="px-8 md:px-14 pb-14">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-white border border-purple-300 rounded-3xl p-8 shadow-lg"
          >

            <h2 className="text-4xl font-extrabold text-purple-900">
              Achievement
            </h2>

            <div className="w-24 h-1 bg-purple-700 rounded-full mt-3"></div>

            <div className="mt-6">

              <h3 className="text-2xl font-bold text-purple-700">
                Futures of AI Hackathon
              </h3>

              <p className="mt-4 text-lg text-gray-700 leading-9">
                Participated in the Futures of AI Hackathon and secured
                Third Place. Received certification for innovative idea
                presentation, teamwork, and technical performance during
                the competition.
              </p>

            </div>

          </motion.div>

        </section>

      </motion.div>

    </main>
  );
}
