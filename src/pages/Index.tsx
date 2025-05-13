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

      <div className='flex justify-center h-[100vh]'>
        <div className='flex w-[1000px]'>
          <div className='my-16 p-4 space-y-4 fixed left-[calc(50%-400px)] z-10 w-[200px] bg-white/95'>
            <div className='my-12'>
              <img src='https://res.cloudinary.com/ds4h9nepa/image/upload/v1747102467/Weixin_Image_20250512221344_z8a7xp.jpg'></img>
            </div>
            <Contact />
          </div>
          <div className='max-w-[2000px] ml-[300px] my-16 p-4 space-y-4 flex-grow'>
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
