import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "./MainLayout.css";

function MainLayout() {
    return (
        <div className="app-shell">

            {/* =================================================
                SPACE BACKGROUND
            ================================================= */}

            <div
                className="space-background"
                aria-hidden="true"
            >

                {/* Deep space */}

                <div className="space-depth" />


                {/* Nebula */}

                <div className="nebula nebula-one" />

                <div className="nebula nebula-two" />

                <div className="nebula nebula-three" />


                {/* Ambient energy */}

                <div className="space-energy energy-one" />

                <div className="space-energy energy-two" />


                {/* Stars */}

                <div className="stars stars-small" />

                <div className="stars stars-medium" />

                <div className="stars stars-large" />


                {/* Moving dust */}

                <div className="space-dust dust-one" />

                <div className="space-dust dust-two" />


                {/* Vignette */}

                <div className="space-vignette" />

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