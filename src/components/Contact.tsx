import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id='contact' className='py-12'>
      <div className='container w-full mx-auto px-4 md:px-6 text-center'>
        <h2 className='text-2xl font-bold'>Contact</h2>
        <div className='mb-6 h-1 bg-gray-700'></div>
        <div className='flex flex-col items-center space-y-4'>
          <a
            href='mailto:dyao8@emory.edu'
            className='text-gray-700 hover:text-gray-900 transition-colors'
          >
            dyao8@emory.edu
          </a>
          <div className='flex space-x-4'>
            <a
              href='https://github.com/hereagain-Y'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 hover:text-gray-900 transition-colors p-2'
              aria-label='GitHub'
            >
              <Github size={24} />
            </a>
            <a
              href='https://www.linkedin.com/in/danwei-yao-1450501a5/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 hover:text-gray-900 transition-colors p-2'
              aria-label='LinkedIn'
            >
              <Linkedin size={24} />
            </a>
            <a
              href='https://scholar.google.com/citations?user=u4ED2YMAAAAJ&hl=en'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 hover:text-gray-900 transition-colors p-2'
              aria-label='Google Scholar'
            >
              <span className='text-sm font-semibold'>Scholar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
