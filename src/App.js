import './App.css';
import Navbar from './components/navbar'
import Hero from './components/hero';
import Projects from './components/projects';
import Project2 from './components/project2';
import Project3 from './components/project3';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Projects/>
      <Project2/>
      <Project3/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
