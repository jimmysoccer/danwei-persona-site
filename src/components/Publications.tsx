
const Publications = () => {
  const publications = [
    {
      title:
        'Modeling Disease Risk from Genetic Variants Using Language Embeddings',
      conference:('Poster Presented at Intelligent Systems for Molecular Biology / European Conference on Computational Biology (ISMB/ECCB 2025), Liverpool, United Kingdom'),
      description:
        'A novel approach to modeling disease risk from genetic variants using language embeddings (abstract; accepted).',
      posterLink: 'https://iscb.junolive.co/ISMB/live/exhibitor/ISMBECCB2025_poster_1262',
      figure: '/Genetic_variation.png',
    },
    {
      title:
        'Hospitalization Burden Among Children With Leukemia and Lymphoma by Treatment Type in the United States',
      conference: ('Submitted to JAMA Oncology; Accepted for 2025 ASCO Quality Care Symposium'),
      description:
        'Hospitalization burden among children with leukemia and lymphoma by treatment type in the United States from HCUP dataset.',
    },


    {
      title:
        'The impact of COVID-19 restrictions on HIV prevention and treatment services for key populations in South Africa: an interrupted time series analysis',
      conference: 'BMC Public Health',
      description:
        'A time series analysis on COVID-19 impact on HIV care, evaluating how national lockdown policies affected HIV testing and treatment for key populations in South Africa.',
      link: 'https://link.springer.com/article/10.1186/s12889-024-19679-0',
    },
    {
      title:
        'Impact of chronic obstructive pulmonary disease on immune checkpoint inhibitor efficacy in advanced lung cancer and the potential prognostic factors',
      conference: 'Translational Lung Cancer Research',
      description:
        'impact of COPD on the clinical outcomes of lung cancer patients treated with immunotherapy and investigate the potential prognostic factors.',
      link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8182718/',
    },
  ];

  return (
    <section id='publications' className='py-12'>
      <div className='container max-w-2xl'>
        <h2 className='text-2xl font-bold'>Selected Publications</h2>
        <div className='mb-6 h-1 bg-blue-500'></div>
        <ul className='space-y-6'>
          {publications.map((pub, index) => (
            <div key={index} className='bg-white shadow-md rounded-lg p-4'>
              <li className='ml-6'>
                <span className='font-bold'>{pub.title}.</span> 
                <span>
                  {pub.conference.includes('2025 ASCO Quality Care Symposium') 
                    ? <>Submitted to JAMA Oncology; Accepted for <strong>2025 ASCO Quality Care Symposium</strong></>
                    : pub.conference.includes('ISMB/ECCB 2025')
                    ? <>Poster Presented at Intelligent Systems for Molecular Biology / European Conference on Computational Biology (<strong>ISMB/ECCB 2025</strong>), Liverpool, United Kingdom</>
                    : pub.conference
                  }
                </span>
                <p className='text-gray-700 text-sm'>{pub.description}</p>
              </li>
              
              {/* Display figure if available */}
              {pub.figure && (
                <div className='ml-6 mt-4'>
                  <img 
                    src={pub.figure} 
                    alt="Research Figure" 
                    className='max-w-full h-auto rounded-lg shadow-md'
                  />
                </div>
              )}
              
              <div className='ml-6 mt-4 flex space-x-4'>
                {pub?.link && (
                  <a
                    href={pub.link}
                    className='px-4 py-2 bg-gray-200 text-blue-500 rounded-lg shadow hover:bg-gray-300 transition duration-200'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Paper
                  </a>
                )}
                {pub?.posterLink && (
                  <a
                    href={pub.posterLink}
                    className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Poster
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

export default Publications;
