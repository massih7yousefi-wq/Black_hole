import { NavLink } from "react-router-dom";
import "./GenresPreview.css";

function GenresPreview() {
    const genres = [
        {
            name: "ACTION",
            description: "Adrenaline, conflict and unforgettable moments.",
            number: "01",
        },
        {
            name: "DRAMA",
            description: "Stories driven by emotion, people and choices.",
            number: "02",
        },
        {
            name: "SCI-FI",
            description: "Worlds beyond imagination and the limits of reality.",
            number: "03",
        },
        {
            name: "HORROR",
            description: "Dark stories designed to stay with you.",
            number: "04",
        },
        {
            name: "COMEDY",
            description: "Light moments, strange situations and good chaos.",
            number: "05",
        },
        {
            name: "THRILLER",
            description: "Suspense, mystery and stories that keep you guessing.",
            number: "06",
        },
    ];

    return (
        <section className="genres-preview">

            <div className="genres-preview-container container">

                {/* ================= HEADER ================= */}

                <div className="genres-preview-header">

                    <div>

                        <span className="genres-preview-eyebrow">
                            EXPLORE THE UNIVERSE
                        </span>

                        <h2 className="genres-preview-title">
                            FIND YOUR
                            <span>WORLD</span>
                        </h2>

                    </div>


                    <p className="genres-preview-description">
                        Every story belongs somewhere.
                        Explore different worlds and discover
                        the kind of experience you're looking for.
                    </p>

                </div>


                {/* ================= GRID ================= */}

                <div className="genres-preview-grid">

                    {genres.map((genre) => (
                        <NavLink
                            key={genre.name}
                            to={`/genres/${genre.name.toLowerCase()}`}
                            className="genre-card"
                        >

                            <span className="genre-card-number">
                                {genre.number}
                            </span>

                            <span className="genre-card-content">

                                <span className="genre-card-name">
                                    {genre.name}
                                </span>

                                <span className="genre-card-description">
                                    {genre.description}
                                </span>

                            </span>


                            <span
                                className="genre-card-arrow"
                                aria-hidden="true"
                            >
                                ↗
                            </span>

                        </NavLink>
                    ))}

                </div>


                {/* ================= FOOTER ================= */}

                <div className="genres-preview-footer">

                    <span className="genres-preview-line" />

                    <NavLink
                        to="/genres"
                        className="genres-preview-link"
                    >
                        VIEW ALL GENRES
                        <span>→</span>
                    </NavLink>

                    <span className="genres-preview-line" />

                </div>

            </div>

        </section>
    );
}

export default GenresPreview;