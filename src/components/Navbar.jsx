import {FaShoppingCart} from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="nav-title">黒</a>
            <ul className="nav-list">
            <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Products</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Contact us</a>
                </li>
            </ul>
            <a href="#" className="nav-icon">
                    <FaShoppingCart size={25}/>
                </a>
        </nav>

    );
    }

    export default Navbar
