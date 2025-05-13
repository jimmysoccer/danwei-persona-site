const Honors = () => {
  const honors = [
    {
      title: 'Women In Nature Science Fellowship',
      organization: 'Emory University',
      year: '2023-2028',
    },
    {
      title: 'Johns Hopkins Masters Tuition Scholarship Award',
      organization: 'Johns Hopkins University Bloomberg School of Public Health',
      year: '2021-2023',
    },
    {
      title: 'Syngenta Agricultural Scholarship',
      organization: 'Syngenta Company',
      year: '2020',
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
