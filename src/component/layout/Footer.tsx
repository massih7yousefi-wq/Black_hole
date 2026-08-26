// imports --------------------------------------
import { NavLink } from "react-router-dom";
import "./Footer.css";

// component ------------------------------------
function Footer() {
    return (
        <footer className="site-footer">

            {/* ================= AMBIENT SPACE ================= */}

            <div
                className="footer-space"
                aria-hidden="true"
            >

                <span className="footer-star footer-star-1" />
                <span className="footer-star footer-star-2" />
                <span className="footer-star footer-star-3" />
                <span className="footer-star footer-star-4" />
                <span className="footer-star footer-star-5" />

            </div>


            {/* ================= TOP GLOW ================= */}

            <div
                className="footer-top-glow"
                aria-hidden="true"
            />


            <div className="footer-container">

                {/* ================= BRAND ================= */}

                <div className="footer-brand-section">

                    <NavLink
                        to="/"
                        className="footer-brand"
                        aria-label="Cineverse Home"
                    >

                        <span className="footer-logo">

                            <span className="footer-logo-glow" />

                            <span className="footer-logo-ring footer-logo-ring-outer" />

                            <span className="footer-logo-ring footer-logo-ring-inner" />

                            <span className="footer-logo-core">

                                <span className="footer-logo-core-shine" />

                            </span>

                        </span>


                        <span className="footer-brand-content">

                            <span className="footer-brand-name">
                                CINEVERSE
                            </span>

                            <span className="footer-brand-subtitle">
                                MOVIES & SERIES
                            </span>

                        </span>

                    </NavLink>


                    <p className="footer-description">
                        Discover movies, explore new series,
                        and find your next story to watch.
                    </p>

                </div>


                {/* ================= NAVIGATION ================= */}

                <div className="footer-navigation">

                    <span className="footer-heading">
                        EXPLORE
                    </span>


                    <nav
                        className="footer-links"
                        aria-label="Footer navigation"
                    >

                        <NavLink
                            to="/"
                            end
                            className="footer-link"
                        >
                            Home
                        </NavLink>


                        <NavLink
                            to="/movies"
                            className="footer-link"
                        >
                            Movies
                        </NavLink>


                        <NavLink
                            to="/series"
                            className="footer-link"
                        >
                            Series
                        </NavLink>


                        <NavLink
                            to="/genres"
                            className="footer-link"
                        >
                            Genres
                        </NavLink>

                    </nav>

                </div>


                {/* ================= DISCOVER ================= */}

                <div className="footer-discover">

                    <span className="footer-heading">
                        DISCOVER
                    </span>


                    <p className="footer-discover-text">
                        Find something worth watching tonight.
                    </p>


                    <NavLink
                        to="/search"
                        className="footer-search-button"
                    >

                        <span>
                            Search Movies & Series
                        </span>


                        <span
                            className="footer-search-icon"
                            aria-hidden="true"
                        >

                            <svg
                                viewBox="0 0 24 24"
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

            </div>


            {/* ================= BOTTOM ================= */}

            <div className="footer-bottom">

                <div className="footer-bottom-container">

                    <span className="footer-copyright">
                        © 2026 CINEVERSE
                    </span>


                    <div className="footer-bottom-center">

                        <span className="footer-bottom-line" />

                        <span className="footer-tagline">
                            EVERY STORY DESERVES TO BE DISCOVERED
                        </span>

                        <span className="footer-bottom-line" />

                    </div>


                    <span className="footer-credit">
                        MOVIES & SERIES
                    </span>

                </div>

            </div>


            {/* ================= BOTTOM GLOW ================= */}

            <div
                className="footer-bottom-glow"
                aria-hidden="true"
            />

        </footer>
    );
}

export default Footer;