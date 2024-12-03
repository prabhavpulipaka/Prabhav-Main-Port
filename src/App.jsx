import { ReactLenis, useLenis } from 'lenis/react';
/**
 * Components
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
const App = () => {

  return(
    <ReactLenis root>
    <Header />
    <main>
    <Hero />
    <About />
    <Skill />
    <Work />
    <Contact />
    </main>
    </ReactLenis>
  )
}

export default App;