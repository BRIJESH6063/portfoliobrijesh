import React from 'react'
import './menu.scss' 

export default function menu({menuOpen, setMenuOpen}) {
  return (
    <div>
        <div className={"menu "+(menuOpen && 'active')}>
            <ul>
                <li onClick = {()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
                </li>
                <li onClick = {()=>setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick = {()=>setMenuOpen(false)}>
                <a href="#works">Work</a>
                </li>
                <li onClick = {()=>setMenuOpen(false)}>
                <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick = {()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
  )
}
