import React from 'react';
import "./ques.css"

function FAQ3() {
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
                    <h1>How To Register As An NGO?</h1>
                    <p>
                        By registering as an NGO, you can be provided with the facility to ask for fundings from our users and
                        also can get a chance to get spotlighted on our website. <br /><br />
                        To register as an NGO, click on the "LOGIN" button at the top header of the website: <br /><br />
                        <img
                            src="/png-jpg/faq/ques3img1.png"
                            alt="Login button at website header"
                        /><br /><br />
                        You will be directed to a "login" page for individuals. To login as an NGO, click on the "register here"
                        at the bottom right corner of the page. <br /><br />
                        <img
                            src="/png-jpg/faq/ques3img2.png"
                            alt="Register here link"
                        /> <br /><br />
                        After clicking on "register here" you will be directed to a page where you need to fill some information
                        about the NGO, including the registration number provided to the NGO. After filling the necessary
                        elements click on "SUBMIT" button to complete the login process.
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

export default FAQ3;