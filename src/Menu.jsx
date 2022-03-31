import {BrowserRouter as Router, Route, Routes, Link, Outlet} from 'react-router-dom';

const Menu = () => {
  return(
    <>
      <nav>
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo"> Nasa </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/AllLaunches"> All Launches </Link></li>
            </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;
