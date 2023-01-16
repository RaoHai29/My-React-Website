import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/intro/Intro";
import './App.css'
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import {useContext} from 'react'

function App() {
  const theme= useContext(themeContext);
  const darkMode=theme.state.darkMode;
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
      <Footer />
    </div>
  );
}

export default App;
