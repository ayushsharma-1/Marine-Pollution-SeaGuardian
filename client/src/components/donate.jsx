import React, { useState } from 'react';
import '../style/donate.css';
import Header from "../common-components/header";
import Footer from "../common-components/footer";

const DonatePage = () => {
    const [formData, setFormData] = useState({
        giftType: 'one-time',
        donationAmount: null,
        customAmount: '',
        paymentType: 'credit-card',
        // Credit Card Fields
        creditCardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        securityCode: '',
        // PayPal Fields
        paypalEmail: '',
        paypalTransactionId: '',
        // Billing Information
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        emailUpdates: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: ''
    });

    // Dynamic donation amounts based on gift type
    const donationAmounts = {
        'one-time': [35, 50, 100],
        'monthly': [250, 1000, 1500]
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(`${name}: ${value}`);
    };

    const handleGiftTypeChange = (type) => {
        setFormData(prevState => ({
            ...prevState,
            giftType: type,
            donationAmount: null,
            customAmount: ''
        }));
        console.log(`Gift Type: ${type}`);
    };

    const handlePaymentTypeChange = (type) => {
        setFormData(prevState => ({
            ...prevState,
            paymentType: type,
            // Reset opposite payment method fields when switching
            ...(type === 'credit-card' ? {
                paypalEmail: '',
                paypalTransactionId: ''
            } : {
                creditCardNumber: '',
                expirationMonth: '',
                expirationYear: '',
                securityCode: ''
            })
        }));
        console.log(`Payment Type: ${type}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Full Form Data:', formData);
        // Add your form submission logic here
    };

    const titleOptions = [
        { value: '', label: '- Select -' },
        { value: 'Mr.', label: 'Mr.' },
        { value: 'Mrs.', label: 'Mrs.' },
        { value: 'Miss', label: 'Miss' },
        { value: 'Ms.', label: 'Ms.' },
        { value: 'Dr.', label: 'Dr.' }
    ];

    const stateOptions = [
        { value: '', label: '- Select -' },
        { value: 'AL', label: 'Alabama' },
        { value: 'AK', label: 'Alaska' },
        { value: 'AZ', label: 'Arizona' },
        { value: 'AR', label: 'Arkansas' },
        { value: 'CA', label: 'California' },
        { value: 'CO', label: 'Colorado' },
        { value: 'CT', label: 'Connecticut' },
        { value: 'DE', label: 'Delaware' },
        { value: 'DC', label: 'District of Columbia' },
        { value: 'FL', label: 'Florida' },
        { value: 'GA', label: 'Georgia' },
        { value: 'HI', label: 'Hawaii' },
        { value: 'ID', label: 'Idaho' },
        { value: 'IL', label: 'Illinois' },
        { value: 'IN', label: 'Indiana' },
        { value: 'IA', label: 'Iowa' },
        { value: 'KS', label: 'Kansas' },
        { value: 'KY', label: 'Kentucky' },
        { value: 'LA', label: 'Louisiana' },
        { value: 'ME', label: 'Maine' },
        { value: 'MD', label: 'Maryland' },
        { value: 'MA', label: 'Massachusetts' },
        { value: 'MI', label: 'Michigan' },
        { value: 'MN', label: 'Minnesota' },
        { value: 'MS', label: 'Mississippi' },
        { value: 'MO', label: 'Missouri' },
        { value: 'MT', label: 'Montana' },
        { value: 'NE', label: 'Nebraska' },
        { value: 'NV', label: 'Nevada' },
        { value: 'NH', label: 'New Hampshire' },
        { value: 'NJ', label: 'New Jersey' },
        { value: 'NM', label: 'New Mexico' },
        { value: 'NY', label: 'New York' },
        { value: 'NC', label: 'North Carolina' },
        { value: 'ND', label: 'North Dakota' },
        { value: 'OH', label: 'Ohio' },
        { value: 'OK', label: 'Oklahoma' },
        { value: 'OR', label: 'Oregon' },
        { value: 'PA', label: 'Pennsylvania' },
        { value: 'RI', label: 'Rhode Island' },
        { value: 'SC', label: 'South Carolina' },
        { value: 'SD', label: 'South Dakota' },
        { value: 'TN', label: 'Tennessee' },
        { value: 'TX', label: 'Texas' },
        { value: 'UT', label: 'Utah' },
        { value: 'VT', label: 'Vermont' },
        { value: 'VA', label: 'Virginia' },
        { value: 'WA', label: 'Washington' },
        { value: 'WV', label: 'West Virginia' },
        { value: 'WI', label: 'Wisconsin' },
        { value: 'WY', label: 'Wyoming' },
        { value: 'Ot', label: 'Other' }
    ];

    return (
        <>
            {/* Background Video Section */}
            <div className="background-video">
                <video autoPlay loop muted playsInline>
                    <source src="/videos/action.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <Header />
            <form onSubmit={handleSubmit} className="donate-container1">
                <h1>YOUR IMPACT BEGINS TODAY</h1>
                <p>
                    Your generous contribution will immediately go to work supporting the things you care
                    passionately about. Whether it's saving wildlife, protecting our ocean, empowering
                    the world's most innovative scientists and explorers to help solve the
                    planet's mysteries and challenges, or preserving our ancient heritage for future
                    generations—together we'll help change the world.
                </p>

                <h2>Your Gift Information</h2>

                <h3>Type of gift:</h3>
                <div className="donate-type-of-gift">
                    <button
                        type="button"
                        className={`${formData.giftType === 'one-time' ? 'active' : ''}`}
                        onClick={() => handleGiftTypeChange('one-time')}
                    >
                        One-time gift
                    </button>
                    <button
                        type="button"
                        className={`${formData.giftType === 'monthly' ? 'active' : ''}`}
                        onClick={() => handleGiftTypeChange('monthly')}
                    >
                        Monthly gift
                    </button>
                </div>

                <div className="donate-price">
                    {donationAmounts[formData.giftType].map((amount) => (
                        <button
                            key={amount}
                            type="button"
                            className={`${formData.donationAmount === amount ? 'active' : ''}`}
                            onClick={() => {
                                setFormData(prev => ({
                                    ...prev,
                                    donationAmount: amount,
                                    customAmount: ''
                                }));
                                console.log(`Donation Amount: $${amount}`);
                            }}
                        >
                            ${amount}
                        </button>
                    ))}
                </div>

                {formData.donationAmount === null && (
                    <div>
                        <input
                            type="number"
                            className="donate-input"
                            name="customAmount"
                            placeholder="Enter custom amount"
                            value={formData.customAmount}
                            onChange={handleInputChange}
                        />
                    </div>
                )}

                <h2>PAYMENT INFORMATION</h2>

                <div className="donate-pay-type">
                    <button
                        type="button"
                        className={`${formData.paymentType === 'credit-card' ? 'active' : ''}`}
                        onClick={() => handlePaymentTypeChange('credit-card')}
                    >
                        Credit Card
                    </button>
                    <button
                        type="button"
                        className={`${formData.paymentType === 'paypal' ? 'active' : ''}`}
                        onClick={() => handlePaymentTypeChange('paypal')}
                    >
                        PayPal
                    </button>
                </div>

                {formData.paymentType === 'credit-card' ? (
                    <>
                        <div>
                            <label className="donate-label">Credit Card Number:</label>
                            <input
                                type="text"
                                className="donate-input"
                                name="creditCardNumber"
                                placeholder="Enter credit card number"
                                value={formData.creditCardNumber}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="donate-expiration-group">
                            <div>
                                <label className="donate-label">Credit Card Expiration Month:</label>
                                <select
                                    className="donate-select"
                                    name="expirationMonth"
                                    value={formData.expirationMonth}
                                    onChange={handleInputChange}
                                >
                                    {Array.from({ length: 12 }, (_, i) => `${i + 1}`.padStart(2, '0')).map(month => (
                                        <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="donate-label">Credit Card Expiration Year:</label>
                                <select
                                    className="donate-select"
                                    name="expirationYear"
                                    value={formData.expirationYear}
                                    onChange={handleInputChange}
                                >
                                    {Array.from({ length: 11 }, (_, i) => `${2023 + i}`).map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="donate-label">Credit Card Security Code:</label>
                            <input
                                type="number"
                                className="donate-input"
                                name="securityCode"
                                placeholder="CVV"
                                value={formData.securityCode}
                                onChange={handleInputChange}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <label className="donate-label">PayPal Email:</label>
                            <input
                                type="email"
                                className="donate-input"
                                name="paypalEmail"
                                placeholder="Enter PayPal email"
                                value={formData.paypalEmail}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <label className="donate-label">PayPal Transaction ID (Optional):</label>
                            <input
                                type="text"
                                className="donate-input"
                                name="paypalTransactionId"
                                placeholder="Enter PayPal Transaction ID"
                                value={formData.paypalTransactionId}
                                onChange={handleInputChange}
                            />
                        </div>
                    </>
                )}

                <h2>BILLING INFORMATION</h2>

                <div>
                    <label className="donate-label">Title:</label>
                    <select
                        className="donate-select"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    >
                        {titleOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className="donate-name-group">
                    <div>
                        <label className="donate-label">First name:</label>
                        <input
                            type="text"
                            className="donate-input"
                            name="firstName"
                            placeholder="Enter first name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="donate-label">Last name:</label>
                        <input
                            type="text"
                            className="donate-input"
                            name="lastName"
                            placeholder="Enter last name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="donate-label">Email:</label>
                    <input
                        type="email"
                        className="donate-input"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="donate-radio-buttons-container">
                    <label className="donate-label">Yes! Please send me National Geographic Society email updates.</label>
                    <div className="donate-radio-group">
                        <div className="donate-radio-button">
                            <input
                                type="radio"
                                id="email-updates-yes"
                                name="emailUpdates"
                                value="yes"
                                className="donate-radio-button__input"
                                checked={formData.emailUpdates === 'yes'}
                                onChange={handleInputChange}
                            />
                            <label
                                htmlFor="email-updates-yes"
                                className="donate-radio-button__label"
                            >
                                <span className="donate-radio-button__custom"></span>
                                Yes
                            </label>
                        </div>
                        <div className="donate-radio-button">
                            <input
                                type="radio"
                                id="email-updates-no"
                                name="emailUpdates"
                                value="no"
                                className="donate-radio-button__input"
                                checked={formData.emailUpdates === 'no'}
                                onChange={handleInputChange}
                            />
                            <label
                                htmlFor="email-updates-no"
                                className="donate-radio-button__label"
                            >
                                <span className="donate-radio-button__custom"></span>
                                No
                            </label>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="donate-label">Address1:</label>
                    <input
                        type="text"
                        className="donate-input"
                        name="address1"
                        placeholder="Street address"
                        value={formData.address1}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className="donate-label">Address2:</label>
                    <input
                        type="text"
                        className="donate-input"
                        name="address2"
                        placeholder="Apartment, suite, unit, etc."
                        value={formData.address2}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className="donate-label">City:</label>
                    <input
                        type="text"
                        className="donate-input"
                        name="city"
                        placeholder="Enter city"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className="donate-label">State:</label>
                    <select
                        className="donate-select"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                    >
                        {stateOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="donate-label">ZipCode:</label>
                    <input
                        type="number"
                        className="donate-input"
                        name="zipCode"
                        placeholder="Enter zip code"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="donate-button">
                    <button type="submit" className="donate-button donate1">
                        DONATE NOW!
                    </button>
                </div>
            </form>
            <Footer />
        </>
    );
};

export default DonatePage;