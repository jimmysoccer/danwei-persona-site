const Publications = () => {
  const publications = [
    {
      title: 'WorldMedQA-V: Multilingual, multimodal medical dataset',
      conference: 'NAACL 2025',
      description:
        'A comprehensive dataset covering 12 languages and multiple modalities for medical question answering.',
    },
    {
      title:
        'Interpretable prediction of adverse drug events using LLM-based approaches',
      conference: 'Nature Medicine, 2024',
      description:
        'Novel methods for explainable AI in predicting medication side effects.',
    },
    {
      title:
        'Social determinants of health in electronic health records: Analysis using foundation models',
      conference: 'NPJ Digital Medicine, 2024',
      description:
        'Using large language models to extract and analyze social determinants of health from unstructured EHR data.',
    },
    {
      title: 'Safety considerations for healthcare LLMs: A systematic review',
      conference: 'EMNLP 2024',
      description:
        'Comprehensive analysis of safety risks in healthcare-specific language models.',
    },
  ];

  return (
    <section id='publications' className='py-12'>
      <div className='container max-w-2xl mx-auto px-4 md:px-6'>
        <h2 className='text-2xl font-bold mb-6'>Selected Publications</h2>
        <ul className='space-y-6'>
          {publications.map((pub, index) => (
            <div className='bg-white shadow-md rounded-lg p-4'>
              <li key={index} className='ml-6'>
                <span className='font-bold'>{pub.title}.</span> {pub.conference}
                <p className='text-gray-700 text-sm'>{pub.description}</p>
              </li>
              <div className='ml-6 mt-4 flex space-x-4'>
                <a
                  href='#'
                  className='px-4 py-2 bg-gray-200 text-blue-500 rounded-lg shadow hover:bg-gray-300 transition duration-200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Paper
                </a>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Publications;
