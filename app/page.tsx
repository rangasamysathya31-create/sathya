import Image from "next/image";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-pink-200">

        {/* Header */}
        <div className="bg-pink-300 text-black p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Profile Image */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-black shadow-xl">
              <Image
                src="/sathya.jpeg"
                alt="Sathya R"
                fill
                className="object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-5xl font-black tracking-wide">
                SATHYA R
              </h1>

              <p className="text-xl mt-3 font-semibold">
                Diploma in Computer Engineering
              </p>

              <div className="mt-5 grid md:grid-cols-2 gap-3 text-sm font-medium">
                <p>📍 Namakkal, Tamil Nadu</p>
                <p>📧 rangasamysathya31@gmail.com</p>
                <p>📞 +91 8220291319</p>
                <p>🏫 Paavai Polytechnic College - Namakkal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-3">

          {/* Sidebar */}
          <aside className="bg-pink-50 p-8 border-r border-pink-200">

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-black text-black mb-5 border-b-2 border-pink-300 pb-3">
                Skills
              </h2>

              <div className="flex flex-wrap gap-3">
                {[
                  "Java",
                  "Python",
                  "Next JS",
                  "HTML",
                  "CSS",
                  "MySQL",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-pink-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-md"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mt-12">
              <h2 className="text-2xl font-black text-black mb-5 border-b-2 border-pink-300 pb-3">
                Education
              </h2>

              <div className="bg-white rounded-2xl p-5 shadow-md border border-pink-100">
                <h3 className="text-lg font-bold text-black">
                  Diploma in Computer Engineering
                </h3>

                <p className="text-gray-700 mt-2 font-medium">
                  Paavai Polytechnic College
                </p>

                <p className="text-gray-600 text-sm mt-1">
                  Namakkal, Tamil Nadu
                </p>
              </div>
            </section>

            {/* Languages */}
            <section className="mt-12">
              <h2 className="text-2xl font-black text-black mb-5 border-b-2 border-pink-300 pb-3">
                Languages
              </h2>

              <div className="bg-white rounded-2xl p-5 shadow-md border border-pink-100">
                <ul className="space-y-3 text-black font-medium">
                  <li>✅ English</li>
                  <li>✅ Tamil</li>
                </ul>
              </div>
            </section>
          </aside>

          {/* Main Content */}
          <section className="md:col-span-2 p-8 md:p-10">

            {/* Profile */}
            <section>
              <h2 className="text-3xl font-black text-black mb-5">
                Profile
              </h2>

              <div className="bg-pink-50 border border-pink-100 rounded-2xl p-6 shadow-sm">
                <p className="text-gray-800 leading-8">
                  Motivated and passionate Computer Engineering student
                  with strong interest in software development, web
                  applications, and modern technologies. Skilled in
                  Java, Python, Next JS, HTML, CSS, and MySQL with
                  practical experience in building responsive
                  applications and database-driven systems.
                </p>
              </div>
            </section>

            {/* Experience */}
            <section className="mt-12">
              <h2 className="text-3xl font-black text-black mb-6">
                Experience
              </h2>

              <div className="space-y-6">

                {/* Internship */}
                <div className="bg-white border border-pink-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <h3 className="text-2xl font-bold text-black">
                      Next JS Intern
                    </h3>

                    <span className="bg-pink-200 text-black px-4 py-1 rounded-full text-sm font-bold">
                      15 Days
                    </span>
                  </div>

                  <p className="text-pink-600 font-bold mt-2">
                    SBS Technologies, Erode
                  </p>

                  <ul className="list-disc ml-6 mt-5 space-y-3 text-gray-800 leading-7">
                    <li>
                      Worked on modern e-commerce web applications
                      using Next JS.
                    </li>

                    <li>
                      Developed responsive UI pages using HTML,
                      CSS, and Tailwind CSS.
                    </li>

                    <li>
                      Learned API integration and frontend
                      optimization techniques.
                    </li>

                    <li>
                      Collaborated with developers to improve
                      user experience and application performance.
                    </li>
                  </ul>
                </div>

                {/* Hackathon */}
                <div className="bg-white border border-pink-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <h3 className="text-2xl font-bold text-black">
                      Hackathon Achievement
                    </h3>

                    <span className="bg-pink-200 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Futures of AI
                    </span>
                  </div>

                  <p className="text-pink-600 font-bold mt-2">
                    Won 3rd Place
                  </p>

                  <ul className="list-disc ml-6 mt-5 space-y-3 text-gray-800 leading-7">
                    <li>
                      Participated in the Futures of AI Hackathon
                      and secured 3rd place.
                    </li>

                    <li>
                      Developed innovative AI-related ideas and
                      collaborated effectively in a team environment.
                    </li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Projects */}
            <section className="mt-12">
              <h2 className="text-3xl font-black text-black mb-6">
                Projects
              </h2>

              <div className="bg-white border border-pink-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-black">
                  Online Library Book Management System
                </h3>

                <ul className="list-disc ml-6 mt-5 space-y-4 text-gray-800 leading-8">
                  <li>
                    Developed a complete Online Library Book
                    Management System for managing books,
                    students, and library records digitally.
                  </li>

                  <li>
                    Created features to add, update, delete,
                    search, issue, and return books through
                    a user-friendly interface.
                  </li>

                  <li>
                    Implemented student management and book
                    availability tracking using MySQL database
                    integration.
                  </li>

                  <li>
                    Reduced manual paperwork and improved
                    library management efficiency through
                    automation.
                  </li>

                  <li>
                    Used Java, Python, HTML, CSS, Next JS,
                    and MySQL for frontend, backend, and
                    database development.
                  </li>

                  <li>
                    Improved knowledge in frontend design,
                    backend logic, database management,
                    and problem-solving skills.
                  </li>
                </ul>
              </div>
            </section>

          </section>
        </div>
      </div>
    </main>
  );
}
