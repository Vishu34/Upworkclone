import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
   <>
    <footer>
        <div>
            <h1 id="nav-title">LaborLink</h1>
        </div>
        <div className=''>
            <h2>LaborLink</h2>
            
            
            <div className="flex-col flex list-child">
            <Link href="">Home</Link>
            
            <Link href="">About</Link>
            
            <Link href="">Post Works</Link>
            
            <Link href="">Review</Link>
            </div>
        </div>

        <div>
            <h2>Features</h2>
            
            
            <div className="flex-col flex list-child">
            <Link href="">Join as a Contractor</Link>
            
            <Link href="">Post Works</Link>
            
            <Link href="">See Works</Link>
            
            <Link href="">Join as a laborer</Link>
            </div>
        </div>

        <div>
            <h2>LaborLink</h2>
            
            
            <nav className="flex flex-col list-child">
            <Link href="">Email</Link>
            
            <Link href="">Linkedin</Link>
            
            <Link href="">Instagram</Link>
            
            <Link href="contact-us/index.html">Contact-Us</Link>
            </nav>
        </div>

        <div>
            <h2>Join Our Newsletter</h2>
            <div class="div">
                <div class="div-2">Email Address</div>
                <div class="div-3">SUBMIT</div>
              </div>
        </div>
    </footer>
   </>
  )
}
