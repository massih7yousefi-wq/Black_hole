import "./WhyCineverse.css";

function WhyCineverse() {
    return (
        <section className="why-cineverse">

            <div className="why-cineverse-container">

                {/* ================= HEADER ================= */}

                <div className="why-cineverse-header">

                    <span className="why-cineverse-eyebrow">
                        WHY CINEVERSE
                    </span>

                    <h2 className="why-cineverse-title">
                        MORE THAN
                        <span>JUST STORIES.</span>
                    </h2>

                    <p className="why-cineverse-description">
                        Cinema is more than something you watch.
                        It is a world you enter, explore, and remember.
                    </p>

                </div>


                {/* ================= FEATURES ================= */}

                <div className="why-cineverse-features">

                    {/* FEATURE 01 */}

                    <article className="why-feature">

                        <span className="why-feature-number">
                            01
                        </span>

                        <div className="why-feature-line" />

                        <h3 className="why-feature-title">
                            DISCOVER
                        </h3>

                        <p className="why-feature-description">
                            Discover stories, characters, and worlds
                            waiting beyond the ordinary.
                        </p>

                        <span className="why-feature-symbol">
                            +
                        </span>

                    </article>


                    {/* FEATURE 02 */}

                    <article className="why-feature">

                        <span className="why-feature-number">
                            02
                        </span>

                        <div className="why-feature-line" />

                        <h3 className="why-feature-title">
                            EXPLORE
                        </h3>

                        <p className="why-feature-description">
                            Explore different genres and cinematic
                            universes built for every mood.
                        </p>

                        <span className="why-feature-symbol">
                            +
                        </span>

                    </article>


                    {/* FEATURE 03 */}

                    <article className="why-feature">

                        <span className="why-feature-number">
                            03
                        </span>

                        <div className="why-feature-line" />

                        <h3 className="why-feature-title">
                            EXPERIENCE
                        </h3>

                        <p className="why-feature-description">
                            Turn every movie and series into an
                            experience worth remembering.
                        </p>

                        <span className="why-feature-symbol">
                            +
                        </span>

                    </article>

                </div>

            </div>

        </section>
    );
}

export default WhyCineverse;