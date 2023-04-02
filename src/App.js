import Topbar from "./Components/topbars/Topbar";
import Intro from "./Components/intro/intro" ;
import Portfolio from "./Components/Portfolio/portfolio" ;
import Works from "./Components/works/works" ;
import Contacts from "./Components/contact/Contact" ;
import Menu from './Components/menu/menu' ;
import Testimonials from './Components/testimonials/testimonial'
import "./App.scss" ;
import {useState} from 'react' ;

function App() {
  const [menuOpen, setMenuOpen] = useState(false) ;
  return (
    
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <div className="sections">
        {/* Section Part Here! */}
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
