import React, { useState, useEffect } from 'react';
import "../style/the-latest.css"
import Header from '../common-components/header';
import Footer from '../common-components/footer';

const TheLatest = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
            const searchTerms = [
                'marine conservation',
                'ocean pollution',
                'marine ecosystem',
                'sea life protection',
                'marine environment',
                'ocean cleanup',
                'marine biodiversity',
                'sustainable oceans',
                'marine research',
                'climate change ocean',
                'marine wildlife'
            ];

            try {
                setIsLoading(true);
                const uniqueArticles = [];
                const seenTitles = new Set();

                // Increase max results per search to improve chances of unique articles
                const maxResultsPerSearch = 10;

                // Continue searching until we have at least 9 unique articles
                for (const term of searchTerms) {
                    if (uniqueArticles.length >= 10) break;

                    try {
                        const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(term)}&max=${maxResultsPerSearch}&lang=en&apikey=${apiKey}`;

                        const response = await fetch(url);

                        if (response.status === 429) {
                            throw new Error('API rate limit exceeded. Please try again later.');
                        }

                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }

                        const data = await response.json();

                        if (data.articles) {
                            const newUniqueArticles = data.articles.filter(article => {
                                // Ensure image exists and title is unique
                                const hasImage = article.image && article.image.trim() !== '';
                                const isTitleUnique = !seenTitles.has(article.title);

                                if (hasImage && isTitleUnique) {
                                    seenTitles.add(article.title);
                                    return true;
                                }
                                return false;
                            });

                            uniqueArticles.push(...newUniqueArticles);

                            // Add a small delay between requests
                            await new Promise(resolve => setTimeout(resolve, 500));
                        }
                    } catch (termError) {
                        console.warn(`Error fetching for term ${term}:`, termError);
                        continue;
                    }
                }

                // Ensure we have exactly 9 articles
                const finalArticles = uniqueArticles.slice(0, 10);

                if (finalArticles.length === 0) {
                    setError("No news available.");
                } else {
                    setArticles(finalArticles);
                }
            } catch (error) {
                console.error("Error fetching news:", error);
                setError(error.message || "Failed to fetch news. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (isLoading) {
        return (
            <>
                <Header />
                <div className="the-latest-container">
                    <h1 className="the-latest-heading1">Loading Marine Reports...</h1>
                    <div className="the-latest-loading-spinner">
                        🌊 Loading marine news...
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <hr />
            <div className="the-latest-container">
                <h1 className="the-latest-heading1">Marine Latest Reports</h1>

                {error ? (
                    <div className="the-latest-error-container">
                        <p className="the-latest-error">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="the-latest-retry-btn"
                        >
                            Retry Fetching News
                        </button>
                    </div>
                ) : (
                    <ul id="the-latest-news-list" className="the-latest-news-container">
                        {articles.map((article, index) => (
                            <li key={index} className="the-latest-news-item">
                                <div className="the-latest-news-card">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="the-latest-news-image"
                                    />
                                    <div className="the-latest-news-content">
                                        <h2 className="the-latest-news-title">
                                            {article.title || "No title available"}
                                        </h2>
                                        <p className="the-latest-news-description">
                                            {article.description || "No description available"}
                                        </p>
                                        <p className="the-latest-news-source">
                                            Source: {article.source?.name || "Unknown"}
                                        </p>
                                        <a
                                            href={article.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="the-latest-read-more-btn"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <Footer />
        </>
    );
};

export default TheLatest;