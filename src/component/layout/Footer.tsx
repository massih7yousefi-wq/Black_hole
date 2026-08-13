//imports-----------------------------
import "./Footer.css";
//components-----------------------------------
function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <span className="footer-title">BLACKHOLE</span>
                    <span className="footer-subtitle">by Elendil</span>
                </div>

                <div className="footer-meta">
                    <span>Exploring the unknown.</span>
                    <span>© 2026 BlackHole</span>
                </div>
            </div>
        </footer>
    );
}
export default Footer;