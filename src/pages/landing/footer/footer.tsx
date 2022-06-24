/* Import Styles */
import "../../../styles.css";
import "./footer.css";

/* Import Files */

/* Code */
export default function LandingFooter() {
    return (
        <div className="LandingFooter">
            <div className="LandingFooterSection">
                <h3 className="LandingFooterLogo">PROCURE</h3>
            </div>
            <div className="LandingFooterSection">
                <h3 className="LandingFooterHeadline">RESOURCES</h3>
                <a href={""}>
                    <p className="LandingFooterLink">Contact</p></a>
                <a href={""}>
                    <p className="LandingFooterLink">Blog</p></a>
                <a href={""}>
                    <p className="LandingFooterLink">Help</p></a>
                <a href={""}>
                    <p className="LandingFooterLink">Press</p></a>
            </div>
            <div className="LandingFooterSection">
                <h3 className="LandingFooterHeadline">PRODUCT</h3>
                <a href={""}>
                    <p className="LandingFooterLink">Dashboard</p></a>
                <a href={""}>
                    <p className="LandingFooterLink">Pricing</p></a>
                <a href={""}>
                    <p className="LandingFooterLink">Inquiries</p></a>
            </div>
            <div className="LandingFooterSection">
                <h3 className="LandingFooterHeadline">COMPANY</h3>
                <a href={""}>
                    <p className="LandingFooterLink">Mission</p></a>
                <a href={""}>
                    <p className="LandingFooterLink">Careers</p></a>
            </div>
        </div>
    );
}