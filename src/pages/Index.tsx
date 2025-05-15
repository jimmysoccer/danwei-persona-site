
import Header from '../components/Header';
import About from '../components/About';
import News from '../components/News';
import Publications from '../components/Publications';
import Mentoring from '../components/Mentoring';
import Honors from '../components/Honors';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className='min-h-screen bg-white text-gray-800'>
      <Header />

      <div className='flex justify-center'>
        <div className='flex flex-col lg:flex-row w-full max-w-[1000px] mx-auto'>
          <div className='mt-16 p-4 lg:sticky lg:top-16 lg:h-fit space-y-4 w-full lg:w-[250px] bg-white/95'>
            <div className='my-12 flex justify-center'>
              <img
                className='w-40 h-40 object-cover rounded-full shadow-md'
                src='https://res.cloudinary.com/ds4h9nepa/image/upload/v1747102467/Weixin_Image_20250512221344_z8a7xp.jpg'
                alt="Danwei Yao profile"
              />
            </div>
            <Contact />
          </div>
          <div className='lg:max-w-[750px] mt-16 p-4 space-y-8 w-full'>
            <About />
            <Publications />
            <Mentoring />
            <Honors />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
