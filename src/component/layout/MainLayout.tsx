import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./MainLayout.css";

function MainLayout() {
    return (
        <div className="app-shell">
            <div className="space-background" aria-hidden="true">
                <div className="nebula nebula-one" />
                <div className="nebula nebula-two" />
            </div>

            <Header />

            <main className="page-content">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;