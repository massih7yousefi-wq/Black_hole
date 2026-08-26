import "./CinematicExperience.css";

function CinematicExperience() {
    return (
        <section className="cinematic-experience">

            <div className="cinematic-experience-container">

                {/* ================= VISUAL ================= */}

                <div
                    className="cinematic-visual"
                    aria-hidden="true"
                >

                    <div className="cinematic-orbit orbit-one" />
                    <div className="cinematic-orbit orbit-two" />
                    <div className="cinematic-orbit orbit-three" />

                    <div className="cinematic-glow" />

                    <div className="cinematic-core">

                        <span className="core-light" />

                    </div>


                    <div className="cinematic-particle particle-one" />
                    <div className="cinematic-particle particle-two" />
                    <div className="cinematic-particle particle-three" />
                    <div className="cinematic-particle particle-four" />

                </div>


                {/* ================= CONTENT ================= */}

                <div className="cinematic-content">

                    <span className="cinematic-eyebrow">
                        THE CINEMATIC EXPERIENCE
                    </span>

                    <h2 className="cinematic-title">
                        ENTER
                        <span>ANOTHER WORLD.</span>
                    </h2>

                    <p className="cinematic-description">
                        Every story opens a door to somewhere else.
                        CINEVERSE brings movies, series, genres, and
                        unforgettable moments together in one universe.
                    </p>


                    <div className="cinematic-stats">

                        <div className="cinematic-stat">

                            <span className="cinematic-stat-number">
                                01
                            </span>

                            <span className="cinematic-stat-label">
                                DISCOVER
                            </span>

                        </div>


                        <div className="cinematic-stat">

                            <span className="cinematic-stat-number">
                                02
                            </span>

                            <span className="cinematic-stat-label">
                                EXPLORE
                            </span>

                        </div>


                        <div className="cinematic-stat">

                            <span className="cinematic-stat-number">
                                03
                            </span>

                            <span className="cinematic-stat-label">
                                EXPERIENCE
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default CinematicExperience;