import React from 'react';
import "./ques.css"

function FAQ2() {
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
                    <h1>How To Register As An Individual?</h1>
                    <p>
                        Registering as an individual means you can get the facility to donate to different NGOS as per your
                        desire. <br /><br />
                        To register as an individual, click on "LOGIN" button at the top of the page. <br /><br />
                        <img
                            src="/png-jpg/faq/ques2img1.png"
                            alt="Login button"
                            style={{ height: '3.5in', border: '1px solid black' }}
                        /> <br /><br />
                        Upon initiating the login process by clicking the designated button, users are prompted to input their
                        designated username and password. Subsequently, a unique OTP (One-Time Password) is automatically
                        generated and dispatched to the email address linked with the respective account. This pivotal security
                        measure serves to authenticate user identity, ensuring that only authorized individuals gain entry to
                        their accounts. <br /><br />
                        Upon reception of the OTP, users are required to input the provided code to validate their login
                        attempt. This stringent verification mechanism fortifies account security, thwarting unauthorized access
                        attempts effectively. <br /><br />
                        Following successful OTP validation, user accounts are promptly established on our platform, thereby
                        endowing individuals with comprehensive access to its myriad features and functionalities. <br /><br />
                        Alternatively, for expedited access, users have the option to opt for the utilization of their existing
                        Google credentials to facilitate seamless login. <br /><br />
                    </p>
                    <ol>
                        <li>
                            If you are a new user, click on the "CREATE ACCOUNT" button present at the bottom of the page. <br />
                            <img src="/png-jpg/faq/ques2img2.png" alt="Create Account button" />
                        </li>
                        <li>
                            If you forgot your pass, click on "RESET PASSWORD" present at the bottom right of the page. <br />
                            <img src="/png-jpg/faq/ques2img3.png" alt="Reset Password button" />
                        </li>
                    </ol>
                </div>
            </div>
            <hr />
            <footer>
                Copyright &copy; SeaGuardian, 2024
            </footer>
        </>
    );
}

export default FAQ2;