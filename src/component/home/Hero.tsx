import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-container container">

                {/* ================= CONTENT ================= */}

                <div className="hero-content">

                    <span className="hero-eyebrow">
                        A SPACE BEYOND THE ORDINARY
                    </span>

                    <h1 className="hero-title">
                        BLACK
                        <span>HOLE</span>
                    </h1>

                    <p className="hero-description">
                        A small universe created by Elendil.
                        Explore the unknown, discover new worlds,
                        and enter the BlackHole giveaway.
                    </p>

                    <div className="hero-actions">

                        <Link
                            to="/giveaway"
                            className="hero-button hero-button-primary"
                        >
                            Enter Giveaway
                        </Link>

                        <a
                            href="#about"
                            className="hero-button hero-button-secondary"
                        >
                            Explore
                        </a>

                    </div>

                </div>


                {/* ================= BLACK HOLE ================= */}

                <div
                    className="hero-visual"
                    aria-hidden="true"
                >

                    <div className="black-hole-space">

                        {/* Ambient glow */}
                        <div className="space-glow" />

                        {/* Stars */}
                        <span className="star star-1" />
                        <span className="star star-2" />
                        <span className="star star-3" />
                        <span className="star star-4" />
                        <span className="star star-5" />
                        <span className="star star-6" />
                        <span className="star star-7" />
                        <span className="star star-8" />

                        {/* Main black hole */}
                        <div className="black-hole">

                            {/* Outer energy */}
                            <div className="black-hole-energy" />

                            {/* Outer glow */}
                            <div className="black-hole-outer-ring" />

                            {/* Main accretion disk */}
                            <div className="black-hole-disk" />

                            {/* Hot inner disk */}
                            <div className="black-hole-inner-ring" />

                            {/* Photon ring */}
                            <div className="black-hole-photon-ring" />

                            {/* Event horizon */}
                            <div className="black-hole-horizon">

                                <div className="black-hole-core" />

                            </div>

                        </div>


                        {/* Falling particles */}

                        <span className="falling-particle falling-1" />
                        <span className="falling-particle falling-2" />
                        <span className="falling-particle falling-3" />
                        <span className="falling-particle falling-4" />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;