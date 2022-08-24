import CartWidget from './CartWidget/CartWidget';
const NavBar = () => {
    return (
        <nav id="navShop" className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Bikestore</a>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Home
                            <span className="visually-hidden">(current)</span>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>

                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
