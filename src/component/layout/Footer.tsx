// imports -------------------------------------
import { NavLink } from "react-router-dom";
import "./Footer.css";

// component -----------------------------------
function Footer() {
    return (
        <footer className="site-footer">

            {/* Ambient space */}

            <div className="footer-space" aria-hidden="true">

                <span className="footer-star footer-star-1" />
                <span className="footer-star footer-star-2" />
                <span className="footer-star footer-star-3" />
                <span className="footer-star footer-star-4" />

            </div>


            <div className="footer-container">


                {/* ================= BRAND ================= */}

                <div className="footer-brand">

                    <NavLink
                        to="/"
                        className="footer-logo"
                        aria-label="BlackHole Home"
                    >

                        <span className="footer-logo-glow" />

                        <span className="footer-logo-ring" />

                        <span className="footer-logo-core" />

                    </NavLink>


                    <div className="footer-brand-text">

                        <span className="footer-title">
                            BLACKHOLE
                        </span>

                        <span className="footer-subtitle">
                            BY ELENDIL
                        </span>

                    </div>

                </div>


                {/* ================= CENTER ================= */}

                <div className="footer-center">

                    <span className="footer-line" />

                    <span className="footer-tagline">
                        EXPLORING THE UNKNOWN
                    </span>

                    <span className="footer-line" />

                </div>


                {/* ================= META ================= */}

                <div className="footer-meta">

                    <span>
                        © 2026 BLACKHOLE
                    </span>

                    <span>
                        CREATED BY ELENDIL
                    </span>

                </div>

            </div>


            {/* Bottom glow */}

            <div
                className="footer-bottom-glow"
                aria-hidden="true"
            />

        </footer>
    );
}

export default Footer;