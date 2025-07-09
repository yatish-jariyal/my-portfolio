import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 bg-gradient-to-br from-blue-100 via-blue-50 to-slate-100">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Hi, I'm <span className="text-blue-700">Yatish Jariyal</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 font-light">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I’m a web developer driven by curiosity and creativity. I specialize
            in crafting modern, user-focused applications using the latest
            technologies. Whether it's building scalable full-stack solutions or
            creating smooth, intuitive interfaces.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 pt-8">
          <a
            href="github.com/yatish-jariyal"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="linkedin.com/in/yatish-jariyal/"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:yatishjariyal@gmail.com"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown
          className="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors duration-300"
          size={32}
          onClick={() => scrollToSection("about")}
        />
      </div>
    </section>
  );
};

export default Hero;
