import React from 'react';
import '../style/details.css';
import Header from '../common-components/header';
import Footer from '../common-components/footer';

const Details = () => {
    // Card data to make the component more maintainable
    const cards = [
        { id: 1, title: "Whaling", link: "/whaling", className: "details-card-1" },
        { id: 2, title: "Captivity", link: "/captivity", className: "details-card-2" },
        { id: 3, title: "Extinct Species", link: "/extinct", className: "details-card-3" },
        { id: 4, title: "Fisheries", link: "/fishery", className: "details-card-4" },
        { id: 5, title: "Pollution", link: "/pollution", className: "details-card-5" },
        { id: 6, title: "Shark Finning", link: "/shark", className: "details-card-6" }
    ];

    return (
        <>
            <Header />
            <hr />
            <div className="details-container">
                <div className="details-header">
                    <h1 className="details-header1">Marine Wildlife</h1>
                    <p className="details-subh1">We works around the globe to prevent inhumane and ecologically harmful commercial exploitation of marine species.</p>
                </div>

                <div className="details-card-container">
                    {cards.map(card => (
                        <div key={card.id} className={`details-card ${card.className}`}>
                            <div className="details-card-content">
                                <h2 className="details-card-title">{card.title}</h2>
                                <br />
                                <a href={card.link} className="details-link1">Know More</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="details-text-container">
                    <p id="details-lastpara">
                        Destructive and unsustainable fishing operations and trade in marine species pose a serious threat to the ocean's biodiversity. Hunting of small cetaceans (dolphins and porpoises) and live capture of these animals for public display continue, despite the ecological impacts and the negative publicity over the cruelty of these actions. Sharks—apex predators key to healthy ecosystems—have faced steep declines due to years of relentless exploitation, including the brutal practice of shark finning.
                        <br /><br />
                        Each one of these actions singularly is harmful, but when compounded, they are devastating for the marine ecosystem and the many species, including humans, that depend on the ocean's resources for survival. Through our actions and choices, we need to ensure that life in the ocean thrives, for all our sakes.
                    </p>
                    <br />
                    © 2021 Wildlife Conservation Society (WCS)<br /><br />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Details;