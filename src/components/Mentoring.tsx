const Mentoring = () => {
  const mentoringExperience = [
    {
      role: 'Teaching Assistant',
      program: 'Bruce Weir Summer Institute in Statistical Genetics (SISG) 2024, Georgia Tech',
      period: '2024',
      description:
        'Served as a teaching assistant for SISG Module 5 “Bayesian Statistics”',
    },
    {
      role: 'Undergraduate Teaching Instructor',
      program: 'Emory QTM100 Lab',
      period: '2024-2025',
      description:
        'Teaching Instuctor for QTM100 lab, an introductory course in Quantitative Theory and Methods at Emory University. Responsibilities include creating homework, teaching lab manuual, grading assignments, and providing support to students.',
    },
  ];

  return (
    <section id='mentoring' className='py-12'>
      <div className='container max-w-2xl mx-2'>
        <h2 className='text-2xl font-bold'>Mentoring</h2>
        <div className='mb-6 h-1 bg-blue-500'></div>
        <div className='space-y-6'>
          {mentoringExperience.map((exp, index) => (
            <div key={index} className='border-l-2 border-gray-300 pl-4'>
              <h3 className='font-bold text-lg'>{exp.role}</h3>
              <p className='text-gray-700 mb-1'>
                {exp.program}, {exp.period}
              </p>
              <p className='text-gray-600'>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentoring;
