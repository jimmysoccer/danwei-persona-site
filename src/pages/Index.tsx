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

      <div className='flex justify-center lg:h-[100vh]'>
        <div className='flex flex-col lg:flex-row w-full lg:w-[1000px]'>
          <div className='mt-16 p-4 space-y-4 lg:fixed lg:left-[calc(50%-400px)] lg:w-[200px] bg-white/95'>
            <div className='my-12 flex justify-center'>
              <img
                className=''
                src='https://res.cloudinary.com/ds4h9nepa/image/upload/v1747102467/Weixin_Image_20250512221344_z8a7xp.jpg'
              ></img>
            </div>
            <Contact />
          </div>
          <div className='lg:max-w-[2000px] lg:ml-[300px] mt-16 p-4 space-y-4 flex-grow'>
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
