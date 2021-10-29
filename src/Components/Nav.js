import React from "react";
import {Link} from 'react-router-dom'
import nav from '../nav.css'

const Nav = () => {
    return (
      <>
        <nav>
          <Link to="/">
            <span className="easy">easy</span>
            <span className="veganNav">vegan</span>
          </Link>
          <ul className='nav-links'>
            <li>
              <Link to="/">Why go Vegan</Link>
            </li>
            <li>
              <Link to="/">Recipes</Link>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Nav