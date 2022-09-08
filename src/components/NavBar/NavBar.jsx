import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <p className="navbar-brand orderMob0">Bikestore</p>
            
            <div className="collapse navbar-collapse orderMob2" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <p className="nav-link dropdownToggle">bikes</p>
                        <div className="dropdown-menu">
                            <Link to="/category/road" className="dropdown-item">Road</Link>
                            <Link to="/category/mountain" className="dropdown-item">Mountain</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='display_flex a_i_center orderMob1' style={{order: 0}}>
                <CartWidget/>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
            </div>
        </div>
        </nav>
    );
}

export default NavBar;
