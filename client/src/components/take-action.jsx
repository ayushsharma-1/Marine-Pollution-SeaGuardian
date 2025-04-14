import React, { useState } from 'react';
import "../style/take-action.css"
import Header from "../common-components/header";
import Footer from "../common-components/footer";

const AnalyzeImg = () => {
    const [image, setImage] = useState(null);
    const [pollutionValues, setPollutionValues] = useState([]);

    const pollutionMetrics = [
        "PM2.5", "PM10", "CO2", "NO2", "SO2",
        "O3", "Lead", "Ammonia", "Benzene", "CO"
    ];

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            generateRandomValues();
        }
    };

    const generateRandomValues = () => {
        const selectedMetrics = pollutionMetrics
            .sort(() => 0.5 - Math.random())
            .slice(0, 2)
            .map(metric => ({
                type: metric,
                value: (Math.random() * 500).toFixed(2)
            }));

        setPollutionValues(selectedMetrics);
    };

    return (
        <>
            <Header />
            <div className="analyze-img-container">
                <h2 className="analyze-img-title">Polluted Area Uploader</h2>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="analyze-img-upload-input"
                />

                {image && (
                    <div className="analyze-img-result-section">
                        <img src={image} alt="Polluted Area" className="analyze-img-uploaded-image" />
                        <h3 className="analyze-img-subtitle">Estimated Pollution Levels</h3>
                        <ul className="analyze-img-pollution-list">
                            {pollutionValues.map((item, index) => (
                                <li key={index}>
                                    <strong>{item.type}</strong>: {item.value} µg/m³
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default AnalyzeImg;