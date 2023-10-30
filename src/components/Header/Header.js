import "./Header.css"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    Shop Store
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link className="links-header" to="/">Home</Link></li>
                    <li><Link className="links-header" to="about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
