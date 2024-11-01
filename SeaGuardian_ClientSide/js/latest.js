document.addEventListener('DOMContentLoaded', getNews);

function getNews() {
    const apiKey = 'd8a08510964b49109c69826afa31adde'; 
    const url = `https://newsapi.org/v2/everything?q=marine%20wildlife&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayNews(data.articles))
        .catch(error => console.log('Error fetching news:', error));
}

function displayNews(articles) {
    const newsList = document.getElementById('news-list');
    
    articles.forEach(article => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="card-main">
            <div class="article-title">${article.title}</div>
            <div class="article-description">${article.description}</div>
            <div class="article-source">Source: ${article.source.name}</div>
            <a href="${article.url}" target="_blank">Read more</a>
        </div>`;
        newsList.appendChild(li);
    });
}

