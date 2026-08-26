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
                    aria-label="Cineverse Home"
                >

                    <span className="brand-logo">

                        <span className="logo-glow" />

                        <span className="logo-ring logo-ring-outer" />

                        <span className="logo-ring logo-ring-inner" />

                        <span className="logo-core">
                            <span className="logo-core-shine" />
                        </span>

                    </span>


                    <span className="brand-content">

                        <span className="brand-name">
                            CINEVERSE
                        </span>

                        <span className="brand-owner">
                            MOVIES & SERIES
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
                        to="/movies"
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        <span>Movies</span>
                    </NavLink>


                    <NavLink
                        to="/series"
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        <span>Series</span>
                    </NavLink>


                    <NavLink
                        to="/genres"
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        <span>Genres</span>
                    </NavLink>

                </nav>


                {/* ================= SEARCH ================= */}

                <NavLink
                    to="/search"
                    className="search-button"
                    aria-label="Search movies and series"
                >

                    <span className="search-icon">

                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >

                            <circle
                                cx="11"
                                cy="11"
                                r="6.5"
                            />

                            <path
                                d="M16 16L21 21"
                            />

                        </svg>

                    </span>

                </NavLink>

            </div>

        </header>
    );
}

export default Header;