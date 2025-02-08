import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8  bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent text-center">
            {" "}
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-black hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">PAYDEET APPLICATION</h3>
              <p className="text-black mb-4">
                Paydeet is a pioneering fintech platform designed to provide a
                centralized banking identity solution. Through Paydeet, users
                can seamlessly link multiple bank accounts using a single,
                dynamically generated link.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Node.js", "AWS", "TypeScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-gray-300 text-black py-1 px-3 rounded-full text-sm hover:bg-black/25 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://www.paydeet.com/"
                  className="text-black hover:text-black/70 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-black hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">E-AID APPLICATION</h3>
              <p className="text-black mb-4">
              Health-tech product that allows users to get access to verified medical experts through the app 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node.js", "MySQL", "TypeScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-gray-300 text-black py-1 px-3 rounded-full text-sm hover:bg-black/25 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-black hover:text-black/70 transition-colors my-4"
                >
                  {/* View Project → */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
