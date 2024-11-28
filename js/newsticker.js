// JavaScript Document

let news = [];

let newsList = document.getElementById('newsList');
news.forEach(function (item) {
    let li = document.createElement('li');
    li.textContent = item;
    newsList.appendChild(li);
});
