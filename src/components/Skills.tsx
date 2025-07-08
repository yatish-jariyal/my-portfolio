import { Code, Server, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        "React",
        "TypeScript",
        "Redux",
        "JavaScript",
        "Storybook",
        "HTML5",
        "CSS3",
        "SCSS/SASS",
        "Tailwind CSS",
        "Bootstrap",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Backend",
      icon: <Server className="text-blue-600" size={24} />,
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "SQL",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
      ],
      color: "from-blue-600 to-blue-700",
    },
    {
      title: "Testing",
      icon: <Settings className="text-blue-600" size={24} />,
      skills: [
        "Jest",
        "React Testing Library",
        "Cypress",
        "Test Driven Development (TDD)",
      ],
      color: "from-blue-400 to-blue-500",
    },
    {
      title: "Tools and Cloud",
      icon: <Settings className="text-blue-600" size={24} />,
      skills: [
        "Git",
        "Docker",
        "AWS",
        "Firebase",
        "Webpack",
        "CI/CD",
        "Vercel",
        "Postman",
        "ChatGPT API",
        "Google API",
        "Jira",
      ],
      color: "from-blue-400 to-blue-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-blue-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
            <Settings className="text-white" size={24} />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {category.title}
                  </h3>
                  <div
                    className={`w-16 h-1 bg-gradient-to-r ${category.color}`}
                  ></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors duration-200 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
