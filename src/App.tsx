import { Github, Linkedin, Mail, Download, Code, Server, GraduationCap, Wrench, } from 'lucide-react';
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 py-32">
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm Karri Naga Anusha
                <span className="block text-2xl md:text-3xl text-blue-200 mt-2">Software Developer | AI & ML Enthusiast | Data Analyst</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Passionate about software development, AI, and problem-solving. Exploring innovative solutions to make an impact.
              </p>
              <div className="flex space-x-6">
                <a href="https://github.com/anukarri891" className="transform hover:scale-110 transition-transform hover:text-blue-200">
                  <Github size={28} />
                </a>
                <a href="https://www.linkedin.com/in/karri-naga-anusha-0a119b229/" className="transform hover:scale-110 transition-transform hover:text-blue-200">
                  <Linkedin size={28} />
                </a>
                <a href="mailto:anushakarri79435@gmail.com" className="transform hover:scale-110 transition-transform hover:text-blue-200">
                  <Mail size={28} />
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30"></div>
                <img
                  src="https://drive.google.com/file/d/1M-Od0Y0OPAZ5F1arc-Q_7FYx_9xr6BPo/view?usp=sharing"
                  alt="Profile"
                  className="relative rounded-full w-64 h-64 object-cover border-4 border-white/30 shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
      </header>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
            <p className="text-xl text-gray-700 leading-relaxed">
              Enthusiastic software developer with experience in Python, AI/ML, and web development. Passionate about solving real-world challenges through technology.
            </p>
          </div>
        </div>
      </section>


      {/* Education Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Bachelor's Degree */}
            <div className="p-6 bg-white rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-2 flex items-center">
                <GraduationCap className="text-blue-600 mr-2" /> B.Tech (AI & ML)
              </h3>
              <p className="text-gray-700 font-semibold">Kakinada Institute of Engineering and Technology for Women</p>
              <p className="text-gray-600">2021 - 2025</p>
              <p className="text-gray-600">GPA: 74%</p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Coursework:</span> ML, SDLC, NLP.
              </p>
            </div>

            {/* Intermediate */}
            <div className="p-6 bg-white rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-2 flex items-center">
                <GraduationCap className="text-blue-600 mr-2" /> Intermediate (M.P.C)
              </h3>
              <p className="text-gray-700 font-semibold">Sri Chaitanya Junior College</p>
              <p className="text-gray-600">2019 - 2021</p>
              <p className="text-gray-600">GPA: 94%</p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Achievement:</span> Top 10 in Mathematics.
              </p>
            </div>

            {/* SSC (10th Grade) */}
            <div className="p-6 bg-white rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-2 flex items-center">
                <GraduationCap className="text-blue-600 mr-2" /> SSC (10th Grade)
              </h3>
              <p className="text-gray-700 font-semibold">Z P Girls High School</p>
              <p className="text-gray-600">2019</p>
              <p className="text-gray-600">GPA: 93%</p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Extracurricular:</span> Science club, Debate team.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Heart Disease Prediction",
                description: "Developed a machine learning model to predict heart disease risk based on patient health data.",
                link: "https://github.com/anukarri891/Heart_Disease_Prediction/tree/main/heart-disease-prediction",
                image: "https://images.unsplash.com/photo-1576091160501-bbe57469278b"
                // },

              },
              {
                name: "Fake News Detection",
                description: "Created an NLP-based model to classify news articles as real or fake using Python and ML techniques.",
                link: "https://github.com/KH-KIEW/FakeNewsDetection",
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
              },
              {
                name: "Simple Quiz App",
                description: "Built an AI-powered system to recognize facial features and verify identities.",
                link: "https://github.com/anukarri891/QuizApp/tree/main",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
              }



            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-700">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-600 font-semibold hover:underline">
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Skills Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">Skills</h2>
          <div className="relative overflow-hidden whitespace-nowrap">
            <div className="inline-flex min-w-full space-x-10 animate-scroll hover:pause-animation">
              {[
                { name: "Python", icon: Code },
                { name: "Object-Oriented Programming (OOP)", icon: Code },
                { name: "Java", icon: Code },
                { name: "MySQL", icon: Server },
                { name: "Machine Learning", icon: Wrench },
                { name: "Deep Learning", icon: Wrench },
                { name: "NLP", icon: Wrench },
                { name: "Flask", icon: Code },
                { name: "Power BI", icon: Server },
                { name: "Excel", icon: Server },
                { name: "Tableau", icon: Server },
                { name: "Git/GitHub", icon: Server },
              ].map((skill, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-md flex items-center">
                  <skill.icon className="text-blue-600 mr-2" />
                  <span className="text-lg font-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
        @keyframes scroll {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}
      </style>





      {/* Achievements Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Academic Excellence */}
            <div className="p-6 bg-white rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Wrench className="text-blue-600 mr-2" />Academic Excellence, KIET
              </h3>
              <p className="text-gray-700">
                Secured a Top 5 Rank in academics among students across the campus, demonstrating consistent excellence in coursework and technical proficiency.
              </p>
            </div>

            {/* SPOC (Single Point of Contact) */}
            <div className="p-6 bg-white rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Server className="text-blue-600 mr-2" /> Single Point of Contact, KIET
              </h3>
              <p className="text-gray-700">
                As a Class Representative, served as a liaison between students and faculty, ensuring effective communication and addressing student concerns.
              </p>
            </div>

          </div>
        </div>
      </section>




      {/* Certifications Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Data Analytics using Tableau", link: "https://drive.google.com/file/d/1KV7eXVSLjjY2wTf_4XHTgM2pjgAnNZ4W/view" },
              { name: "Salesforce Developer", link: "https://drive.google.com/file/d/104YnlnI8_cwuYAmK2Y8L8CuqGc557J67/view" },
              { name: "Foundational Modern Machine Learning", link: "https://drive.google.com/file/d/1dVPb1kkVxPHO6F7XgldtB3LvTzip-cPF/view" },

            ].map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center">
                  <GraduationCap className="text-blue-600 mr-2" /> {cert.name}
                </h3>
                <p className="text-gray-700">View Here</p>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* Resume Download */}
      <section className="py-24 text-center">
        <a
          href="https://drive.google.com/uc?export=download&id=1MKc3OPrIGeLtWNU64NHaNuTb6361g9Nj"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <Download className="mr-2" size={24} />
          Download Resume
        </a>
      </section>


      {/* COntact Section */}

      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
          <p className="text-center text-gray-700 mb-8">
            Interested in working together? Reach out via email or fill out the form below.
          </p>

          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <form action="https://formspree.io/f/meoebwlr" method="POST">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" name="name" className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" name="email" className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea name="message" rows={4} className="w-full px-4 py-2 border rounded-lg" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>

          <div className="text-center mt-8">
            <p>Email: <a href="mailto:anushakarri79435@gmail.com" className="text-blue-600">anushakarri79435@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/karri-naga-anusha-0a119b229/" className="text-blue-600">Karri Naga Anusha</a></p>
            <p>GitHub: <a href="https://github.com/anukarri891" target="_blank" className="text-blue-600">github.com/anukarri891</a></p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <div className="container mx-auto">
          <p>© 2025 Karri Naga Anusha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;