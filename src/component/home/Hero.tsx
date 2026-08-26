import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            {/* ================= BACKGROUND ================= */}

            <div className="hero-background" aria-hidden="true">
                <div className="hero-glow hero-glow-one" />
                <div className="hero-glow hero-glow-two" />

                <div className="hero-grid" />

                <span className="hero-star hero-star-1" />
                <span className="hero-star hero-star-2" />
                <span className="hero-star hero-star-3" />
                <span className="hero-star hero-star-4" />
                <span className="hero-star hero-star-5" />
            </div>


            <div className="hero-container container">

                {/* ================= CONTENT ================= */}

                <div className="hero-content">

                    <span className="hero-eyebrow">
                        YOUR NEXT STORY AWAITS
                    </span>


                    <h1 className="hero-title">

                        DISCOVER
                        <span>YOUR NEXT</span>
                        MOVIE

                    </h1>


                    <p className="hero-description">
                        Explore movies and series worth watching.
                        Discover new stories, unforgettable characters,
                        and your next favorite title.
                    </p>


                    <div className="hero-actions">

                        <Link
                            to="/movies"
                            className="hero-button hero-button-primary"
                        >
                            Explore Movies
                        </Link>


                        <Link
                            to="/series"
                            className="hero-button hero-button-secondary"
                        >
                            Browse Series
                        </Link>

                    </div>


                    {/* ================= META ================= */}

                    <div className="hero-meta">

                        <div className="hero-meta-item">
                            <span className="hero-meta-number">
                                10K+
                            </span>

                            <span className="hero-meta-label">
                                Titles
                            </span>
                        </div>


                        <div className="hero-meta-divider" />


                        <div className="hero-meta-item">
                            <span className="hero-meta-number">
                                500+
                            </span>

                            <span className="hero-meta-label">
                                Series
                            </span>
                        </div>


                        <div className="hero-meta-divider" />


                        <div className="hero-meta-item">
                            <span className="hero-meta-number">
                                4K
                            </span>

                            <span className="hero-meta-label">
                                Quality
                            </span>
                        </div>

                    </div>

                </div>


                {/* ================= VISUAL ================= */}

                <div
                    className="hero-visual"
                    aria-hidden="true"
                >

                    <div className="cinema-space">

                        {/* Ambient glow */}

                        <div className="cinema-glow" />


                        {/* Floating particles */}

                        <span className="cinema-particle particle-1" />
                        <span className="cinema-particle particle-2" />
                        <span className="cinema-particle particle-3" />
                        <span className="cinema-particle particle-4" />
                        <span className="cinema-particle particle-5" />


                        {/* Main cinematic object */}

                        <div className="cinema-orbit orbit-one" />
                        <div className="cinema-orbit orbit-two" />


                        <div className="cinema-poster">

                            <div className="poster-shine" />

                            <div className="poster-content">

                                <span className="poster-label">
                                    FEATURED
                                </span>

                                <span className="poster-title">
                                    YOUR
                                </span>

                                <span className="poster-title">
                                    STORY
                                </span>

                                <span className="poster-year">
                                    MOVIES · SERIES
                                </span>

                            </div>

                        </div>


                        {/* Floating info cards */}

                        <div className="floating-card floating-card-rating">

                            <span className="floating-card-icon">
                                ★
                            </span>

                            <span>
                                <strong>9.2</strong>
                                <small>Rating</small>
                            </span>

                        </div>


                        <div className="floating-card floating-card-type">

                            <span className="floating-dot" />

                            <span>
                                <strong>Trending</strong>
                                <small>Right now</small>
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;