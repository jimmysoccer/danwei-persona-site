const News = () => {
  const newsItems = [
    {
      date: '01/04/2025',
      description:
        'Our paper on SDoH in EHR was the most cited journal-wide in 2024 (NPJ Digital Medicine).',
    },
    {
      date: '12/15/2024',
      description:
        'Presented our research on interpretable healthcare AI at NeurIPS 2024 workshop.',
    },
    {
      date: '10/02/2024',
      description:
        'Received the Excellence in AI Research grant from the National Science Foundation.',
    },
    {
      date: '07/18/2024',
      description:
        'Our multilingual medical QA dataset was accepted to EMNLP 2024.',
    },
  ];

  return (
    <section id='news' className='py-12'>
      <div className='container max-w-2xl mx-2'>
        <h2 className='text-2xl font-bold'>News</h2>
        <div className='mb-6 h-1 bg-blue-500'></div>
        <div className='space-y-4'>
          {newsItems.map((item, index) => (
            <div key={index} className='flex'>
              <span className='font-sans font-bold text-gray-800 min-w-[7rem]'>
                {item.date}:
              </span>
              <span className='text-gray-700'>{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
