// imports --------------------------------------
import { NavLink } from "react-router-dom";
import "./Header.css";

// component ------------------------------------
function Header() {
    return (
        <header className="site-header">

            <div className="header-container">

                {/* ================= BRAND ================= */}

                <NavLink
                    to="/"
                    className="brand"
                    aria-label="BlackHole Home"
                >

                    <span className="brand-logo">

                        <span className="logo-glow" />

                        <span className="logo-ring logo-ring-outer" />

                        <span className="logo-ring logo-ring-inner" />

                        <span className="logo-core" />

                    </span>


                    <span className="brand-content">

                        <span className="brand-name">
                            BLACKHOLE
                        </span>

                        <span className="brand-owner">
                            BY ELENDIL
                        </span>

                    </span>

                </NavLink>


                {/* ================= NAVIGATION ================= */}

                <nav
                    className="main-nav"
                    aria-label="Main navigation"
                >

                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        <span>Home</span>
                    </NavLink>


                    <NavLink
                        to="/giveaway"
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        <span>Giveaway</span>
                    </NavLink>

                </nav>

            </div>

        </header>
    );
}

export default Header;