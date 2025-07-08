import { Folder, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommImage from "../assets/ecomm.png";
import jobAppImage from "../assets/jobApp.png";
import youtubeImage from "../assets/youtube-clone.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with MERN stack featuring user authentication, payment integration, and admin dashboard.",
      image: ecommImage,
      technologies: ["React", "Node.js", "MongoDB", "PayPal API"],
      github: "https://github.com/yatish-jariyal/Ecommerce-Website",
      demo: "https://digitalcube.onrender.com/",
    },
    {
      title: "Job Application Tracker",
      description:
        "An application to store all your interview information built using MongoDB, Express JS, React JS and Node JS",
      image: jobAppImage,
      technologies: ["React", "Express.js", "MongoDB", "Heroku"],
      github:
        "https://github.com/yatish-jariyal/JobApplicationTracker/tree/master",
      demo: "https://job-app-tracker-frontend-m5vdnipxo-yatish-jariyal.vercel.app/login",
    },
    {
      title: "Youtube Clone",
      description: "Youtube clone using ReactJS and Youtube API.",
      image: youtubeImage,
      technologies: ["React", "Node.js", "Youtube API"],
      github: "https://github.com/yatish-jariyal/youtube-clone",
      demo: "https://youtube-clone-1-9zho.onrender.com/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
            <Folder className="text-white" size={24} />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-50/50 rounded-lg overflow-hidden hover:bg-blue-50/70 transition-all duration-300 group shadow-lg border border-blue-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white transition-all duration-300"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
