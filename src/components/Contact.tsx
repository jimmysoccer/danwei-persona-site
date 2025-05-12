import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id='contact' className='py-12 bg-gray-50'>
      <div className='container w-full mx-auto px-4 md:px-6 text-center'>
        <h2 className='text-2xl font-bold mb-6'>Contact</h2>
        <div className='flex flex-col items-center space-y-4'>
          <a
            href='mailto:shan.chen@example.edu'
            className='text-gray-700 hover:text-gray-900 transition-colors'
          >
            shan.chen@example.edu
          </a>
          <div className='flex space-x-4'>
            <a
              href='https://github.com/shanchen'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 hover:text-gray-900 transition-colors p-2'
              aria-label='GitHub'
            >
              <Github size={24} />
            </a>
            <a
              href='https://linkedin.com/in/shanchen'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 hover:text-gray-900 transition-colors p-2'
              aria-label='LinkedIn'
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
