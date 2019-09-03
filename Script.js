function apiCall(){
var t = document.getElementById('base');
console.log(t);
var app = document.getElementById('base');
const container = document.createElement('div');
container.setAttribute('class', 'container');
t.appendChild(container);
var title = document.getElementById("title").value;
var request = new XMLHttpRequest();
request.open('GET', 'http://www.omdbapi.com/?apikey=b8902bb3&s='+title, true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  console.log(data.Search[0].Title);
  if (request.status >= 200 && request.status < 400) {
	for(var i=0;i<data.Search.length;i++){
	var movie  = data.Search[i];
	var movieName = movie.Title;
	console.log(movieName);
	const card = document.createElement('div');
	card.setAttribute('class', 'card');
	
	const h1 = document.createElement('h1');
	h1.textContent = movieName;
	
	const poster = document.createElement('img');
	poster.src = movie.Poster;
	
	container.appendChild(card);
	card.appendChild(h1);
	card.appendChild(poster);
	}
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
}