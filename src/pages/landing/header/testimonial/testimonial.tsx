/* Import Styles */
import "../../../../styles.css";
import "./testimonial.css";

/* Import Files */

/* Code */
export default function Testimonial() {
    return (
        <div className="Testimonial">
            {/* Testimonial */}
            <div className="LandingTestimonial">
                <div className="LandingTestimonialContent">

                    <div>
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                             className="LandingTestimonialImage"
                             alt="headshot photo" />
                    </div>

                    <div style={{display: "grid"}}>
                        <p className="LandingTestimonialText">
                            “A testimonial that absolutely nails the value
                            proposition in a sentence or two”. </p>
                        <p className="LandingTestimonialText"
                           style={{
                               fontSize: "13px",
                               marginTop: "-2px",
                               paddingBottom: "20px"
                           }}>
                            McKinsey Woods, CEO, McKinsey & Co.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}