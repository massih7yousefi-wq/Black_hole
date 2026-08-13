//Imports-----------------------------------
import { Link } from "react-router-dom";
import "./Hero.css";
//component-------------------------------
function Hero() {
    return (
        <section className="hero">
            <div className="container hero-container">
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
                        <Link to="/giveaway" className="hero-button hero-button-primary">
                            Enter Giveaway
                        </Link>

                        <a href="#about" className="hero-button hero-button-secondary">
                            Explore
                        </a>
                    </div>
                </div>

                <div className="hero-visual" aria-hidden="true">
                    <div className="black-hole">
                        <div className="black-hole-core" />
                        <div className="black-hole-ring" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;