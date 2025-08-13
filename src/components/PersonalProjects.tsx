const PersonalProjects = () => {
  const projects = [
    {
      title: 'Ancient Footprints, Modern Pathways to Sustainability',
      platform: 'OpenAI to Z Challenge held by OpenAI and Kaggle',
      description:
        'We used OpenAI’s o3/o4 models with multi-modal geospatial data to pinpoint likely undiscovered archaeological sites in the Upper Xingu, uncovering ancient ecological wisdom for today’s climate challenges.',
      link: 'https://www.kaggle.com/competitions/openai-to-z-challenge/writeups/ancient-footprints-modern-pathways-to-sustainabili',
      challengeLink: 'https://openai.com/openai-to-z-challenge/',
      figure: '/project_flowchart.png',
    },
  ];

  return (
    <section id='personal-projects' className='py-12 bg-gray-50'>
      <div className='container max-w-2xl'>
        <h2 className='text-2xl font-bold'>Personal Projects</h2>
        <div className='mb-6 h-1 bg-blue-500'></div>
        <ul className='space-y-6'>
          {projects.map((project, index) => (
            <div key={index} className='bg-white shadow-md rounded-lg p-4'>
              <li className='ml-6'>
                <span className='font-bold'>{project.title}.</span> 
                <span> OpenAI to Z Challenge by <strong>OpenAI</strong> and <strong>Kaggle</strong></span>
                <p className='text-gray-700 text-sm'>{project.description}</p>
              </li>
              
              {/* Display figure if available */}
              {project.figure && (
                <div className='ml-6 mt-4'>
                  <img 
                    src={project.figure} 
                    alt="Project Flowchart" 
                    className='max-w-full h-auto rounded-lg shadow-md'
                  />
                </div>
              )}
              
              <div className='ml-6 mt-4 flex space-x-4'>
                {project?.link && (
                  <a
                    href={project.link}
                    className='px-4 py-2 bg-gray-200 text-blue-500 rounded-lg shadow hover:bg-gray-300 transition duration-200'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Project
                  </a>
                )}
                {project?.challengeLink && (
                  <a
                    href={project.challengeLink}
                    className='px-4 py-2 bg-gray-200 text-blue-500 rounded-lg shadow hover:bg-gray-300 transition duration-200'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Challenge
                  </a>
                )}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PersonalProjects;
