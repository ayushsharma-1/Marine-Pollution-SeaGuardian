import React from 'react';
import "./ques.css"

function FAQ1() {
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
                    <h1>How To Donate?</h1>
                    <p>
                        Our website provides varieties of functionality, including a donation page. You can easily donate the
                        amount of money you wish to provide us with on the "DONATE" page. <br /><br />
                        To go to the donate page, you can follow either of the two steps:
                    </p>
                    <ol>
                        <li>
                            Either you can click on the "DONATE" button at the header. <br /><br />
                            <img src="/png-jpg/faq/ques1img1.png" alt="Donate button in header" />
                        </li>
                        <li>
                            You can go at the bottom of a page, where you will find the "DONATE" button. Click on it to get
                            forwarded to the donate page. <br /><br />
                            <img src="/png-jpg/faq/ques1img2.png" alt="Donate button at page bottom" />
                        </li>
                    </ol>
                    <p>
                        On the donate page, you will come across fields that you need to fill which are your personal
                        information, credit card credentials. After filling all the necessary information you will get a
                        zipcode. Enter the zip code and click on submit.
                    </p>
                </div>
            </div>
            <hr />
            <div className="faq-ques-footer">
                Copyright &copy; SeaGuardian, 2024
            </div>
        </>
    );
}

export default FAQ1;