import React from 'react';
import "./ques.css"

function FAQ4() {
    return (
        <>
            <div className="faq-ques-header">
                <a href="/faq">Go Back To FAQs</a>
            </div>
            <hr />
            <div className='faq-ques-main'>
                <div className="faq-ques-left">
                    <h3 style={{ fontSize: '30px' }}>Articles in this section</h3>
                    <div className="faq-ques-article">
                        <li><a href="/faq1">How To Donate?</a></li>
                        <li><a href="/faq2">How To Register As An Individual?</a></li>
                        <li><a href="/faq3">How To Register As An NGO?</a></li>
                        <li><a href="/faq4">How Can We Connect With An NGO?</a></li>
                        <li><a href="/faq5">How To Report An Accident?</a></li>
                    </div>
                </div>
                <div className="faq-ques-right">
                    <h1>How Can We Connect With An NGO?</h1>
                    <p>
                        Connecting with an NGO is an easy task on our website. It provides you with information of different
                        NGOs working in a specific state, their address, official website and their working areas.<br /><br />
                        To connect with an NGO, you can click on the "OUR PROGRAM" button at the top header :<br /><br />
                        <img
                            src="/png-jpg/faq/ques4img1.png"
                            alt="Our Program button in header"
                        /><br /><br />
                        When you click on "OUR PROGRAM," a new window of opportunity unfolds before you. You'll seamlessly
                        transition to a dedicated page meticulously designed to provide insight into our expansive network.
                        Here, you'll find an array of cities, each representing a nexus of impactful change.<br /><br />
                        <img
                            src="/png-jpg/faq/ques4img2.png"
                            alt="Cities selection page"
                        /><br /><br />
                        With a simple click on any city that captures your curiosity, you're granted access to a rich reservoir
                        of information about the diverse NGOs diligently operating within its boundaries. This curated selection
                        offers a comprehensive overview of their missions, initiatives, and impact, empowering you to make
                        informed decisions about your engagement.<br /><br />
                        Moreover, facilitating seamless interaction, each NGO listing features a direct website link. This means
                        that with just a click, you can swiftly connect with these organizations, explore their work in-depth,
                        and potentially embark on collaborative endeavors or extend support to their causes.
                    </p>
                </div>
            </div>
            <hr />
            <footer>
                Copyright &copy; SeaGuardian, 2024
            </footer>
        </>
    );
}

export default FAQ4;