//imports-------------------------
import Hero from "../../component/home/Hero";
import WhyCineverse from "../../component/home/WhyCineverse.tsx";
import CinematicExperience from "../../component/home/CinematicExperience.tsx";
import GenresPreview from "../../component/home/GenresPreview.tsx";
import FinalCTA from "../../component/home/FinalCTA.tsx";
//component----------------------
function HomePage() {
    return (
        <>
        <Hero />
            <WhyCineverse />
            <CinematicExperience />
            <GenresPreview/>
            <FinalCTA />
        </>
    );
}
export default HomePage;