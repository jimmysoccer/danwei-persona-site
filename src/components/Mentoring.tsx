
const Mentoring = () => {
  const mentoringExperience = [
    {
      role: "Graduate Student Mentor",
      program: "Harvard Medical School Research Program",
      period: "2023 - Present",
      description: "Mentored 4 medical students on research projects related to AI applications in healthcare."
    },
    {
      role: "Undergraduate Research Advisor",
      program: "Summer Research Program at Maastricht University",
      period: "2024",
      description: "Supervised 3 undergraduate students on developing natural language processing tools for medical text analysis."
    }
  ];

  return (
    <section id="mentoring" className="py-12 bg-gray-50">
      <div className="container max-w-2xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">Mentoring</h2>
        <div className="space-y-6">
          {mentoringExperience.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-300 pl-4">
              <h3 className="font-bold text-lg">{exp.role}</h3>
              <p className="text-gray-700 mb-1">{exp.program}, {exp.period}</p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentoring;
