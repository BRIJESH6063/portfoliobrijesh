import './topbar.scss'
import {Person, Mail} from '@material-ui/icons' ;


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'Topbar '+(menuOpen && 'active')}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className='Logo'>Portfolio.</a>
            <div className="itemContainer">
              <Person className='Icon' />
              <span>+91 9936193424</span>
            </div>
            <div className="itemContainer">
              <Mail className='Icon' />
              <span>brijeshkumar377140@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
          </div>
        </div>
    </div>
  )
}
