import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/intro/Intro";
import './App.css'
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import {useContext} from 'react'
import { Element } from 'react-scroll';

function App() {
  const theme= useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background: darkMode ? '#00004d' : '',
        color: darkMode ? 'white' : ''
      }}
    >
      <Navbar />

      <Element name="Home">
        <Intro />
      </Element>

      <Element name="Services">
        <Services />
      </Element>

      <Element name="Projects">
        <Projects />
      </Element>

      <Element name="Contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
