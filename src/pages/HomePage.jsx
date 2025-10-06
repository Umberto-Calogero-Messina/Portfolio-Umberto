
import Presentation from '../components/presentation/Presentation';
import Education from '../components/Education/Education';
import Contact from '../components/contact/Contact';
import WorkScroll from '../components/workScroll/WorkScroll';

const HomePage = ({ isLoading }) => {
  return (
    <>
      <Presentation isLoading={isLoading} />
      <Education />
      <WorkScroll />
      <Contact />
    </>
  );
};

export default HomePage;
