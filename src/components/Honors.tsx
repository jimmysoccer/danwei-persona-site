const Honors = () => {
  const honors = [
    {
      title: 'Excellence in AI Research Grant',
      organization: 'National Science Foundation',
      year: '2024',
    },
    {
      title: 'Outstanding Paper Award',
      organization: 'Medical Natural Language Processing Workshop, NAACL',
      year: '2024',
    },
    {
      title: 'Harvard-MGB AIM Fellowship',
      organization: 'Harvard Medical School',
      year: '2023-2025',
    },
    {
      title: 'Young Investigator Award',
      organization: 'International Conference on Medical Image Computing',
      year: '2023',
    },
  ];

  return (
    <section id='honors' className='py-12'>
      <div className='container max-w-2xl mx-2'>
        <h2 className='text-2xl font-bold'>Honors & Awards</h2>
        <div className='mb-6 h-1 bg-blue-500'></div>
        <ul className='space-y-4'>
          {honors.map((honor, index) => (
            <li key={index} className='list-disc ml-6'>
              <span className='font-semibold'>{honor.title}</span> -{' '}
              {honor.organization}, {honor.year}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Honors;
