import React, { useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "../style/home.css";
import Header from "../common-components/header";
import Footer from "../common-components/footer";

function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Header />
      {/* Background Video Section */}
      <div className="background-video">
        <video autoPlay loop muted playsInline>
          <source src="/videos/ocean.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container">
        <div className="panel-left">
          <h1>Give Today</h1>
          <h3>We couldn't do our marine conservation work without you.</h3>
        </div>

        <div id="about-us" className="mid">
          <h3>
            SeaGuardian is working with you to protect the ocean from India's greatest challenges.
          </h3>

          {/* Image Contribution Section */}
          <div className="slide-img">
            <div className="parallax-image parallax-image-01"></div>
            <section className="sec">
              <h2 className="about-us-h2">Analyze Marine Pollution: Upload Your Image and Help Make a Difference</h2>
              <ul className="about-us-p">
                <li><b>Detect Pollution:</b> Upload a photo of a polluted marine area and get a quick analysis of potential pollutants.</li>
                <li><b>Raise Awareness:</b> Your images contribute to a growing database helping visualize the scale of ocean pollution.</li>
                <li><b>Drive Action:</b> Empower communities and policymakers with visual evidence that sparks real change.</li>
              </ul>
              <b className="about-us-h2">How You Can Help:</b>
              <ol className="about-us-p">
                <li>Capture a photo of a visibly polluted beach, river, or ocean area.</li>
                <li>
                  <Link to="/analyze-img">
                    <button className="about-us-btn">Upload & Analyze</button>
                  </Link>
                </li>
                <li>Your privacy is respected — anonymous submissions are welcome.</li>
              </ol>
            </section>

            {/* Blog Contribution Section */}
            <div className="parallax-image parallax-image-02"></div>
            <section className="sec">
              <h2 className="about-us-h2">Share Your Insights: Contribute to Our Blog</h2>
              <ul className="about-us-p">
                <li><b>Amplify Your Voice:</b> Influence positive change.</li>
                <li><b>Educate and Inspire:</b> Share marine conservation knowledge.</li>
                <li><b>Build a Community:</b> Connect with ocean sustainability advocates.</li>
              </ul>
              <b className="about-us-h2">How to contribute:</b>
              <ol className="about-us-p">
                <li>
                  Submit your article via
                  <Link to="/our-program">
                    <button className="about-us-btn">Our Program</button>
                  </Link>
                </li>
                <li>Our editorial team will review your article.</li>
                <li>Approved content will be featured on our blog.</li>
              </ol>
            </section>

            {/* Donation Section */}
            <div className="parallax-image parallax-image-03"></div>
            <section className="sec">
              <h2 className="about-us-h2">Support the Cause: Donate for Cleaner Oceans</h2>
              <ul className="about-us-p">
                <li><b>Empower Change:</b> Donations help combat marine pollution.</li>
                <li><b>Community Impact:</b> Every contribution strengthens our mission.</li>
                <li><b>Initiative Growth:</b> Supports outreach and environmental efforts.</li>
              </ul>
              <b className="about-us-h2">How to donate:</b>
              <ol className="about-us-p">
                <li>
                  Visit our
                  <Link to="/donate">
                    <button className="about-us-btn">Donate Page</button>
                  </Link>
                </li>
              </ol>
            </section>
          </div>

          {/* Endangered Species Section */}
          <h1>It's Sad</h1>
          <div className="history">
            <div className="his-img">
              <img src="/png-jpg/historyimg.jpg" alt="Beluga Whale affected by pollution" />
            </div>
            <div className="his-p">
              <h4>~ Endangered</h4>
              <h2>Beluga Whales</h2>
              <p>
                These amazingly beautiful creatures are paying a huge toll for ocean pollution. In fact, they are considered the most “toxic” marine animal in the world. Dead beluga whales are often found heavily saturated with herbicides, pesticides and other runoff-delivered chemicals. These whales are so pumped full of toxins that they must be treated as “toxic waste.” As a result of these exposures, rates of cancer are higher in Beluga Whales than any other species on land or at sea.
                <br />
                <Link to="/distinctones" className="link1">Know More</Link>
              </p>
            </div>
          </div>

          <div id="about-us" className="mid">
            <h3>
              SeaGuardian is working to protect oceans from India's challenges. <br />
              <Link to="/details" className="link2">Know More</Link>
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
