"use client";
import Header from "../common-components/header";
import Footer from "../common-components/footer";

import { useState, useEffect } from "react";
import '../style/Ewaste.css'
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  ArrowRight,
  Recycle,
  BookOpen,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import CountUp from "react-countup";

// Data for charts
const lineChartData = [
  { year: 2010, value: 33.8 },
  { year: 2012, value: 36.3 },
  { year: 2014, value: 41.8 },
  { year: 2016, value: 45.7 },
  { year: 2018, value: 50.5 },
  { year: 2020, value: 53.6 },
  { year: 2022, value: 59.4 },
  { year: 2023, value: 61.8 },
  { year: 2024, value: 63.2 },
  { year: 2025, value: 65.5 },
];

const pieChartData = [
  { name: "Recycled", value: 40 },
  { name: "Landfilled", value: 45 },
  { name: "Illegal Export", value: 10 },
  { name: "Others", value: 5 },
];

const COLORS = [
  "rgba(36, 238, 43, 0.8)",
  "rgba(228, 34, 34, 0.8)",
  "rgba(113, 199, 242, 0.7)",
  "rgba(7, 32, 25, 0.7)",
];

export default function Ewaste() {
  const [isVisible, setIsVisible] = useState({
    stats: false,
    charts: false,
    video: false,
    solutions: false,
    impact: false,
    cta: false,
    mission: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.id;
        if (sectionTop < window.innerHeight * 0.75) {
          setIsVisible((prev) => ({ ...prev, [sectionId]: true }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   
   <div style={{color: "#f1f1f1", background: "linear-gradient(to bottom, rgba(2, 81, 199, 0.9), rgba(4,120,87,0.9))" }}>

       <Header/>
      {/* Intro Section */}
      <section className="intro-section">
  <div className="intro-overlay"></div>
  <div className="intro-content">
    <h1>Welcome to E-Waste Management</h1>
    <div className="intro-grid">
      <div className="intro-text">
        <p>
          Transforming electronic waste into sustainable resources for a cleaner, greener future. 
          Every year, millions of tons of electronic waste end up in landfills, releasing toxic 
          materials into our environment. Our planet is facing an unprecedented challenge with 
          the rapid growth of discarded electronics containing harmful substances like lead, 
          mercury, and cadmium.
        </p>
        <p>
          Through proper recycling and responsible management, we can recover valuable materials 
          like gold, silver, and copper while preventing environmental contamination. Join us in 
          creating a sustainable circular economy for electronics.
        </p>
      </div>
      <div className="intro-image">
        <div className="image-container">
          <img
            src="png-jpg/copy.png"
            alt="Electronic waste recycling process"
            className="responsive-image"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Animated Statistics Panel */}
      <section
        id="stats"
        className={`stats-section ${isVisible.stats ? "opacity-100" : "opacity-0"}`}
      >
        <div className="stats-container">
          <h2>The Growing Challenge</h2>
          <div className="stats-grid">
            {[
              {
                icon: <Recycle size={48} />,
                title: "Total E-Waste Generated",
                value: 65.5,
                suffix: "M Tonnes",
                description: "2025 Projection",
              },
              {
                icon: <Recycle size={48} />,
                title: "Devices Disposed",
                value: 1.5,
                suffix: "B Annually",
                description: "Global Estimate",
              },
              {
                icon: <Recycle size={48} />,
                title: "Recycling Efficiency",
                value: 40,
                suffix: "%",
                description: "Global Average",
              },
            ].map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="icon">{stat.icon}</div>
                <h3>{stat.title}</h3>
                <div className="value">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    suffix={stat.suffix}
                  />
                </div>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section
        id="charts"
        className={`charts-section ${isVisible.charts ? "opacity-100" : "opacity-0"}`}
      >
        <div className="charts-container">
          <h2>E-Waste Trends</h2>
          <div className="charts-grid">
            <div className="chart-card">
              <h3>E-Waste Generated (2010-2025)</h3>
              <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart
  data={lineChartData}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
  <XAxis dataKey="name" stroke="black" />
  <YAxis stroke="black" />
  <Tooltip />
  <Legend />
  <Line
    type="monotone"
    dataKey="value"
    name="Million Tonnes"
    stroke="rgba(0,0,0,1)"
    strokeWidth={3}
    dot={{ fill: "rgba(76, 175, 80, 0.8)", r: 4 }}
    activeDot={{ r: 8, fill: "rgba(76, 175, 80, 1)" }}
  />
</LineChart>

                </ResponsiveContainer>
              </div>
            </div>
            <div className="chart-card">
              <h3>E-Waste Breakdown (2025 Projection)</h3>
              <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0, 0, 0, 1)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "8px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                      labelStyle={{ color: "black" }}
                      itemStyle={{ color: "white" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section
        id="video"
        className={`video-section ${isVisible.video ? "opacity-100" : "opacity-0"}`}
      >
        <div className="video-container">
          <h2>
            <span>How E-Waste is Processed – A Visual Guide</span>
            <span className="highlight"></span>
          </h2>
          <div className="video-frame">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_Y2ePj3wr8M?start=2"
              title="E-Waste Recycling Process"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section
        id="solutions"
        className={`solutions-section ${isVisible.solutions ? "opacity-100" : "opacity-0"}`}
      >
        <div className="solutions-container">
          <h2>Our Solutions</h2>
          <div className="solutions-grid">
            {[
              {
                icon: <BookOpen size={48} />,
                title: "Educate",
                description:
                  "Raising awareness about proper e-waste disposal and its environmental impact.",
                bullets: ["Educational programs", "Community workshops", "Online resources"],
              },
              {
                icon: <Recycle size={48} />,
                title: "Recycle",
                description:
                  "Implementing efficient recycling processes to recover valuable materials.",
                bullets: ["Collection centers", "Responsible dismantling", "Material recovery"],
              },
              {
                icon: <Lightbulb size={48} />,
                title: "Innovate",
                description: "Developing new technologies for better e-waste management.",
                bullets: ["Sustainable design", "Circular economy", "Advanced recovery methods"],
              },
            ].map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul>
                  {solution.bullets.map((bullet, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section
        id="impact"
        className={`impact-section ${isVisible.impact ? "opacity-100" : "opacity-0"}`}
      >
        <div className="impact-overlay">
          <h2>Environmental Impact</h2>
          <div className="impact-container">
            <div>
              <h3>Soil Contamination</h3>
              <p>
                E-waste contains toxic substances like lead, mercury, and cadmium that leach into
                soil when improperly disposed of, contaminating agricultural land and affecting
                food safety.
              </p>
              <div className="info-box">
                <p>Did you know?</p>
                <p>
                  One computer monitor can contaminate 80,000 liters of water with lead and other
                  heavy metals.
                </p>
              </div>
            </div>
            <div>
              <h3>Water Pollution</h3>
              <p>
                Toxic chemicals from e-waste can seep into groundwater and waterways, affecting
                aquatic ecosystems and potentially entering the human water supply.
              </p>
              <div className="info-box">
                <p>Health Hazards:</p>
                <ul>
                  <li>Respiratory problems</li>
                  <li>Neurological damage</li>
                  <li>Reproductive issues</li>
                  <li>Developmental effects in children</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="cta"
        className={`cta-section ${isVisible.cta ? "opacity-100" : "opacity-0"}`}
      >
        <div className="cta-container">
          <h2>Join the Movement – Make a Difference</h2>
          <p>
            Together, we can create a sustainable future by responsibly managing electronic waste
            and preserving our planet for generations to come.
          </p>
          <button className="cta-button">
            <span>
              Learn More <ArrowRight />
            </span>
            <span className="overlay"></span>
            <span className="glow"></span>
          </button>
        </div>
      </section>

      {/* Mission & Vision Panel */}
      <section
        id="mission"
        className={`mission-section ${isVisible.mission ? "opacity-100" : "opacity-0"}`}
      >
        <div className="mission-container">
          <h2>Our Mission & Vision</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <div>
                {[
                  {
                    title: "Reduce E-Waste",
                    description:
                      "Minimize the environmental impact of electronic waste through proper disposal and recycling.",
                  },
                  {
                    title: "Recover Resources",
                    description:
                      "Extract valuable materials from e-waste to reduce the need for virgin resource extraction.",
                  },
                  {
                    title: "Protect Communities",
                    description:
                      "Safeguard vulnerable communities from the harmful effects of improper e-waste handling.",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <CheckCircle2 size={24} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>We envision a world where:</p>
              <ul>
                {[
                  "Electronic products are designed for longevity, repairability, and recyclability",
                  "Consumers are fully aware of the importance of proper e-waste disposal",
                  "Advanced recycling technologies recover 90% or more of materials from e-waste",
                  "A circular economy for electronics eliminates the concept of e-waste entirely",
                  "Global policies ensure responsible management of electronic products throughout their lifecycle",
                ].map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    
  );
}