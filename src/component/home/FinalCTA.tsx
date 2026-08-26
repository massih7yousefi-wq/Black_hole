import { Link } from "react-router-dom";
import "./FinalCTA.css";

function FinalCTA() {
    return (
        <section className="final-cta">

            {/* ================= BACKGROUND ================= */}

            <div
                className="final-cta-background"
                aria-hidden="true"
            >

                <div className="final-cta-glow final-cta-glow-one" />

                <div className="final-cta-glow final-cta-glow-two" />

                <div className="final-cta-grid" />

            </div>


            {/* ================= CONTENT ================= */}

            <div className="final-cta-container">

                <span className="final-cta-eyebrow">
                    YOUR NEXT STORY AWAITS
                </span>


                <h2 className="final-cta-title">
                    FIND YOUR
                    <span> NEXT UNIVERSE</span>
                </h2>


                <p className="final-cta-description">
                    Explore movies, discover new series,
                    and find something worth watching.
                </p>


                <div className="final-cta-actions">

                    <Link
                        to="/movies"
                        className="final-cta-button final-cta-button-primary"
                    >
                        Explore Movies
                    </Link>


                    <Link
                        to="/series"
                        className="final-cta-button final-cta-button-secondary"
                    >
                        Explore Series
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default FinalCTA;