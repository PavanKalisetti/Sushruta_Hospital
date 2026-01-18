import "./banner.css"
import ellipse from "../../assets/images/ellipse.png"
import doctor from "../../assets/images/banner-doctor.png"

const Banner = () => {
    return (
        <div className="banner-container">

            <div className="banner-content">

                <div className="banner-heading">
                    <h2>Advanced Laparoscopic<br />Surgery & Gynaecology<br />Care</h2>
                </div>

                <div className="banner-subheading">
                    <p>Providing 24hr Emergency Services in Srikakulam with patient centered-care for better lives.</p>
                </div>

                <div className="banner-buttons">
                    <button className="banner-appointment-button" onClick={() => window.open("https://wa.me/919989122023", "_blank")}>Request appointment</button>
                    <button className="banner-learn-button">Learn More</button>
                </div>

            </div>

            <div className="banner-graphic">
                <img src={ellipse} alt="ellipse" />
                <img src={doctor} alt="doctor" />
            </div>

        </div>
    )
}

export default Banner