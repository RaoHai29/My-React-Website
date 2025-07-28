import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/intro/Intro";
import './App.css'
import Services from "./Components/Services/Services";
<<<<<<< HEAD
=======
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
>>>>>>> 43eb28148d147ac2230ea1346d71f1979f7ea8ad
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import {useContext} from 'react'
<<<<<<< HEAD
import { Element } from 'react-scroll';
=======
>>>>>>> 43eb28148d147ac2230ea1346d71f1979f7ea8ad

function App() {
  const theme= useContext(themeContext);
  const darkMode=theme.state.darkMode;
<<<<<<< HEAD

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

=======
  return (
    <div className="App"
    style={{background: darkMode? '#00004d':'',
            color: darkMode? 'white':''
  }}    
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Projects />
      <Contact />
>>>>>>> 43eb28148d147ac2230ea1346d71f1979f7ea8ad
      <Footer />
    </div>
  );
}

export default App;
