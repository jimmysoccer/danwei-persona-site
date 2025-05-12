
import Header from "../components/Header";
import About from "../components/About";
import News from "../components/News";
import Publications from "../components/Publications";
import Mentoring from "../components/Mentoring";
import Honors from "../components/Honors";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <About />
        <News />
        <Publications />
        <Mentoring />
        <Honors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
