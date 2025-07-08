import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Craftsperson",
      company: "Red Panda Innovations Labs",
      period: "03/2021 - 10/2021",
      description:
        "Developed a responsive web application for an environmental initiative using React.js, TypeScript, and Redux",
      achievements: [
        "Created reusable UI components with Styled Components and documented them in Storybook",
        "Implemented payment processing with Stripe and styled UI with Styled System",
        "Wrote unit and integration tests using Jest and React Testing Library to ensure component reliability",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-blue-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
            <Briefcase className="text-white" size={24} />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg ml-12 md:ml-0 hover:bg-white/90 transition-colors duration-300 shadow-lg border border-blue-100">
                  <div className="text-blue-600 text-sm font-semibold mb-1">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-blue-700 mb-4">{exp.company}</h4>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
