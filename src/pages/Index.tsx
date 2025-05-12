import Header from '../components/Header';
import About from '../components/About';
import News from '../components/News';
import Publications from '../components/Publications';
import Mentoring from '../components/Mentoring';
import Honors from '../components/Honors';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className='min-h-screen bg-white text-gray-800'>
      <Header />

      <main className='flex justify-center' style={{ marginTop: '56px' }}>
        <div className='max-w-[300px] p-4 space-y-4'>
          <div className='my-12'>
            <img src='https://res.cloudinary.com/ds4h9nepa/image/upload/v1746471349/61c015f3512ce04ccdc418f6_1_wpuwh4.jpg'></img>
          </div>
          <Contact />
        </div>
        <div className='max-w-[2000px] p-4 space-y-4'>
          <About />
          <News />
          <Publications />
          <Mentoring />
          <Honors />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
