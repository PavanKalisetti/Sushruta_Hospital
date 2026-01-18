import "./footer.css"

import ellipse4 from "../../assets/images/Ellipse 4.png"
import ellipse5 from "../../assets/images/ellipse5.png"

const Footer = () => {
    return (
        <>
            <div className="footer-container">

                <div className="footer-logo">
                    <h2>Sushruta Hospital</h2>
                    <p>We are a medical clinic,<br />helping you for a better life.</p>
                </div>

                <div className="footer-medic">
                    <ul className="footer-lists">
                        <li>Sushruta</li>
                        <li>Home</li>
                        <li>Medical Care</li>
                        <li>Medical Health</li>
                        <li>Medical Test</li>
                        <li>Medical Lab</li>
                    </ul>
                </div>

                <div className="footer-about">
                    <ul className="footer-lists">
                        <li>About</li>
                        <li>Sushruta</li>
                        <li>Vision & Mission</li>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className="footer-social-media">
                    <ul className="footer-lists">
                        <li>Social Media</li>
                        <li>Twitter / X</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <ul className="footer-lists">
                        <li>Contact</li>
                        <li>Opp Dharamana TVS Showroom,<br />Day&Night Jn, Srikakulam</li>
                        <li>9063 68 30 30 | 9063 69 30 30</li>
                        <li>info@sushrutahospital.com</li>
                    </ul>
                </div>

                <img className="footer-ellipse1" src={ellipse4} alt="ellipse4" />
                <img className="footer-ellipse2" src={ellipse5} alt="ellipse5" />

            </div>

            <div className="footer-bottom">
                <p>&copy; Sushruta Hospital 2026</p>
                <p>Legal Policies</p>
                <p>Sitemap</p>
                <p>Cookies</p>
            </div>

        </>


    )
}

export default Footer