import { User } from "lucide-react";
import myImage from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
            <User className="text-white" size={24} />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I’m a passionate Full Stack Developer with over a year of
              experience building modern web applications using the MERN stack.
              Fueled by curiosity and a love for problem-solving, I’m always
              eager to learn new technologies and stay ahead in this
              ever-evolving field.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I’m not coding, I love exploring new technologies, diving
              into fresh topics, playing or watching football, enjoying movies,
              and listening to music.
            </p>
            {/* <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg shadow-md border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg shadow-md border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">1+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div> */}
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <img
                  src={myImage}
                  alt="Yatish Jariyal"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
