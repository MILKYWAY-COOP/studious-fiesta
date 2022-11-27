import './App.scss';
import {
  Header,
  Nav,
  About,
  Experience,
  Services,
  Portfolio,
  Footer,
  Testimonials,
  Contact
} from './components';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
