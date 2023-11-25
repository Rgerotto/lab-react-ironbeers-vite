import { Link } from "react-router-dom";
import './NavBar.css'

function Navbar() {
    return (
        <div>
            <nav>
                <div className="navbar">
                    <Link to='/'><i class="fa-solid fa-house-chimney"></i></Link>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
