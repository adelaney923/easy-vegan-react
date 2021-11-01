import React from "react";
import {Link} from 'react-router-dom'
import '../nav.css'

const Nav = () => {
    return (
      <>
        <nav>
          <Link to="/">
            <span className="easy">easy</span>
            <span className="vegan">vegan</span>
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Recipes</Link>
            </li>
            <li>
              <Link to="/">Why go Vegan</Link>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Nav