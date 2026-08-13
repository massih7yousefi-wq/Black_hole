//imports--------------------------------------
import { NavLink } from "react-router-dom";
import "./Header.css";
//component---------------------------------
function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                <NavLink to="/" className="brand">
                    <span className="brand-mark">◉</span>

                    <span className="brand-content">
                        <span className="brand-name">BLACKHOLE</span>
                        <span className="brand-owner">by Elendil</span>
                    </span>
                </NavLink>

                <nav className="main-nav" aria-label="Main navigation">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/giveaway"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Giveaway
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;