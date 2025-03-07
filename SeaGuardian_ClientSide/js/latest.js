document.addEventListener("DOMContentLoaded", getNews);

function getNews() {
const apiKey = 'e1fbb8c9965351f9d8d79f39563eaab1';
const url = `https://gnews.io/api/v4/search?q=marine%20OR%20sea%20OR%20pollution&max=18&lang=en&apikey=${apiKey}`;



    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (!data.articles || data.articles.length === 0) {
                console.warn("No articles found.");
                document.getElementById("news-list").innerHTML = "<p>No news available.</p>";
                return;
            }
            displayNews(data.articles);
        })
        .catch(error => console.error("Error fetching news:", error));
}

function displayNews(articles) {
    const newsList = document.getElementById("news-list");
    newsList.innerHTML = ""; // Clear previous articles

    articles.slice(0, 10).forEach(article => { // Limit to 10 news articles
        const li = document.createElement("li");
        li.innerHTML = `
        <div class="news-card">
            <img src="${article.image || '../assets/default-news.jpg'}" alt="News Image" class="news-image">
            <div class="news-content">
                <h2 class="news-title">${article.title || "No title available"}</h2>
                <p class="news-description">${article.description || "No description available"}</p>
                <p class="news-source">Source: ${article.source?.name || "Unknown"}</p>
                <a href="${article.url}" target="_blank" class="read-more-btn">Read More</a>
            </div>
        </div>`;
        newsList.appendChild(li);
    });
}
