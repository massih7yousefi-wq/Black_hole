import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "./MainLayout.css";

function MainLayout() {
    return (
        <div className="app-shell">

            {/* =================================================
                CINEMATIC BACKGROUND
            ================================================= */}

            <div
                className="cinematic-background"
                aria-hidden="true"
            >

                {/* Deep cinematic depth */}
                <div className="cinematic-depth" />


                {/* Ambient glows */}
                <div className="cinematic-glow cinematic-glow-one" />

                <div className="cinematic-glow cinematic-glow-two" />

                <div className="cinematic-glow cinematic-glow-three" />


                {/* Subtle light beams */}
                <div className="cinematic-beam cinematic-beam-one" />

                <div className="cinematic-beam cinematic-beam-two" />


                {/* Stars / particles */}
                <div className="cinematic-stars cinematic-stars-small" />

                <div className="cinematic-stars cinematic-stars-medium" />

                <div className="cinematic-stars cinematic-stars-large" />


                {/* Floating dust */}
                <div className="cinematic-dust cinematic-dust-one" />

                <div className="cinematic-dust cinematic-dust-two" />


                {/* Film grain */}
                <div className="film-grain" />


                {/* Vignette */}
                <div className="cinematic-vignette" />

            </div>


            {/* =================================================
                HEADER
            ================================================= */}

            <Header />


            {/* =================================================
                PAGE
            ================================================= */}

            <main className="page-content">

                <Outlet />

            </main>


            {/* =================================================
                FOOTER
            ================================================= */}

            <Footer />

        </div>
    );
}

export default MainLayout;