import React from 'react';
import "../style/about.css"
import Header from '../common-components/header';
import Footer from '../common-components/footer';


const About = () => {
    const detailData = [
        {
            title: 'PROBLEM STATEMENT',
            paragraph: "Oil spills from offshore drilling and shipping accidents introduce toxic substances into the marine environment. These spills coat marine animals and seabirds, damage coral reefs, and take years to recover from. The slow response to cleanup efforts worsens the environmental and economic impacts on coastal communities. ",
            imageSrc: '/png-jpg/content-pic1.jpg ' 
            
            ,
        },
        {
            title: 'PROBLEM STATEMENT',
            paragraph: "The increasing amount of plastic waste dumped into oceans each year is suffocating marine ecosystems. Plastic bags, bottles, and microplastics are ingested by sea creatures, leading to injuries, poisoning, and death. This pollution threatens not only marine biodiversity but also human health through the food chain",
            imageSrc: '/png-jpg/content-pic2.jpg',
        },
        {
            title: 'OUR VISION',
            paragraph: "To create a cleaner, healthier, and sustainable ocean environment by raising awareness, reducing marine pollution, and promoting innovative, eco-friendly solutions that protect marine life and preserve ocean resources for future generations.",
            imageSrc: '/png-jpg/content-pic3.jpg',
        },
    ];

    const socialLinks = [
        {
            name: 'Ayush Sharma',
            role: 'Team Leader',
            img: '/members-dp/ayush.png',
            linkedin: 'https://linkedin.com/in/ayushsharma',
            github: 'https://github.com/ayushsharma',
            email: 'ayush.sharma@example.com'
        },
        {
            name: 'Ashmit Kumar',
            role: 'BackEnd-Developer',
            img: '/members-dp/ashmit.jpg',
            linkedin: 'https://linkedin.com/in/ashmit-kumar',
            github: 'https://github.com/ashmit-kumar',
            email: 'ashmit.kumar@example.com'
        },
        {
            name: 'Rudra Singh',
            role: 'FrontEnd-Developer',
            img: '/members-dp/rudra.jpg',
            linkedin: 'https://linkedin.com/in/rudra-singh',
            github: 'https://github.com/rudra-singh',
            email: 'rudra.singh@example.com'
        },
        {
            name: 'Pranabh Dubey',
            role: ' FrontEnd-Devloper ',
            img: '/members-dp/Pranabh.jpg',
            linkedin: 'https://www.linkedin.com/in/pranabh-dubey-66ba1b28a/',
            github: 'https://github.com/Pranav2317',
            email: 'dubeypranav63@gmail.com'
        },
        {
            name: 'Divyansh Saxena',
            role: 'ML Specialist',
            img: '/members-dp/divyansh.png',
            linkedin: 'https://linkedin.com/in/divyansh-saxena',
            github: 'https://github.com/divyansh-saxena',
            email: 'divyansh.saxena@example.com'
        }
    ];

    return (
        <>
            <Header />
            <hr />
            <main>
                {detailData.map((detail, index) => (
                    <div key={index} className="about-content">
                        <div className="content-title">
                            {detail.title}
                        </div>
                        <div className='content-detail'>
                            <div className="details" dangerouslySetInnerHTML={{ __html: detail.paragraph }}>
                            </div>
                            <div className="content-pic">
                                <img src={detail.imageSrc} alt={detail.title} />
                            </div>
                        </div>
                    </div>
                ))}
                <div className="team-members">
                    <span className='team-title'>MEET THE TEAM</span>
                    <div className="team-members-details">
                        {socialLinks.map((member, index) => (
                            <div key={index} className="member-details">
                                <img src={member.img} alt={`${member.name}'s profile`} />
                                <div className='bas-mobile-ke-liye'>
                                    <div className="member-dets">
                                        <span className='member-role'>{member.role}</span>
                                        <span className='member-name'>{member.name}</span>
                                    </div>
                                    <div className="members-socials">
                                        {member.linkedin && (
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                                <img src="/png-jpg/LinkedIn.png" alt="LinkedIn" />
                                            </a>
                                        )}
                                        {member.github && (
                                            <a href={member.github} target="_blank" rel="noopener noreferrer">
                                                <img src="/png-jpg/GitHub.png" alt="GitHub" />
                                            </a>
                                        )}
                                        {member.email && (
                                            <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                                                <img src="/png-jpg/Email.png" alt="Email" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default About;