import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Apollo GraphQL",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "RESTful APIs",
    "GraphQL",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8  bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-black border hover:-translate-y-1 transition-all">
            <p className="text-black text-lg mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gray-300 text-black py-1 px-3 rounded-full text-sm hover:bg-black/25 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gray-300 text-black py-1 px-3 rounded-full text-sm hover:bg-black/25
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-black border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-black space-y-2">
                <li>
                  <strong>
                    {" "}
                    Bachelor of Science (B.S.) in Computer Science and
                    Information Technology{" "}
                  </strong>{" "}
                  - Igbinedion University Okada, Edo State. (2016-2020)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-black border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-black">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer | DLHO SOLUTIONS (Nov 2024 - Present){" "}
                  </h4>
                  <ul className="list-disc list-inside text-black space-y-2">
                    <li>
                      Developed and maintained robust full-stack applications
                      using Node.js, Next.js, GraphQL, TypeScript, and Redux
                      Toolkit, ensuring high performance, scalability, and
                      security.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to gather and
                      analyze requirements design architectures, and implement
                      end-to-end solutions for different projects.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
