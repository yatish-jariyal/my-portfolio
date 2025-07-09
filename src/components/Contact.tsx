import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white/60">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
            <Mail className="text-white" size={24} />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Let's Connect
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:yatishjariyal@gmail.com"
                  className="flex items-center justify-center space-x-4 text-gray-700 hover:text-blue-600 transition-colors duration-300 bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:border-blue-300"
                >
                  <Mail size={24} />
                  <span className="text-lg">yatishjariyal@gmail.com</span>
                </a>
                <a
                  href="github.com/yatish-jariyal"
                  className="flex items-center justify-center space-x-4 text-gray-700 hover:text-blue-600 transition-colors duration-300 bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:border-blue-300"
                >
                  <Github size={24} />
                  <span className="text-lg">github.com/yatish-jariyal</span>
                </a>
                <a
                  href="linkedin.com/in/yatish-jariyal/"
                  className="flex items-center justify-center space-x-4 text-gray-700 hover:text-blue-600 transition-colors duration-300 bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:border-blue-300"
                >
                  <Linkedin size={24} />
                  <span className="text-lg">
                    linkedin.com/in/yatish-jariyal/
                  </span>
                </a>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Quick Facts
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>📍 Based in Mumbai, IN</p>
                <p>🕐 Available for contract work</p>
                <p>💼 Open to full-time opportunities</p>
                <p>🌍 Remote-friendly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
