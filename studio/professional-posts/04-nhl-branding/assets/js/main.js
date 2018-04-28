var smallImageOne = document.querySelector('.smallImage.one')
var smallImageTwo = document.querySelector('.smallImage.two')
var smallImageThree = document.querySelector('.smallImage.three')


var bigImage = document.querySelector('.bigImage')

smallImageOne.addEventListener('mouseover', function () {
  bigImage.src = smallImageOne.src
})

smallImageTwo.addEventListener('mouseover', function () {
  bigImage.src = smallImageTwo.src
})

smallImageThree.addEventListener('mouseover', function () {
  bigImage.src = smallImageThree.src
})

var videoPost = document.querySelector('#videoPost')

videoPost.addEventListener('mouseover', function() {
    videoPost.play()
})
videoPost.addEventListener('mouseout', function() {
    videoPost.pause()
})


var penguinsDiv = document.querySelector('#penguins-button');
var penguinsInfoDiv = document.querySelector('#penguins-info');
var penguinsArenaDiv = document.querySelector('#penguins-arena');
var penguinsLeaugeDiv = document.querySelector('#penguins-league');
var penguinsLocationDiv = document.querySelector('#penguins-location');
var penguinsYearDiv = document.querySelector('#penguins-year');

var teamId = 134844;

// Insert your actual API request URL below
fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + teamId)
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
		  renderPenguins(jsonData);
    });


function renderPenguins(data) {
	console.log(data.teams[0].strStadium);
	penguinsArenaDiv.innerText = data.teams[0].strStadium;
  penguinsLocationDiv.innerText= data.teams[0].strStadiumLocation;
	penguinsLeaugeDiv.innerText = data.teams[0].strLeague;
  penguinsYearDiv.innerText = data.teams[0].intFormedYear;
}


penguinsDiv.addEventListener('mouseover', function () {
  penguinsInfoDiv.style.display = 'block';
})


penguinsDiv.addEventListener('mouseout', function () {
  penguinsInfoDiv.style.display = 'none';
})

var predatorsDiv = document.querySelector('#predators-button');
var predatorsInfoDiv = document.querySelector('#predators-info');
var predatorsArenaDiv = document.querySelector('#predators-arena');
var predatorsLeaugeDiv = document.querySelector('#predators-league');
var predatorsLocationDiv = document.querySelector('#predators-location');
var predatorsYearDiv = document.querySelector('#predators-year');

var teamId = 134858;

// Insert your actual API request URL below
fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + teamId)
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
		  renderPredators(jsonData);
    });


function renderPredators(data) {
	console.log(data.teams[0].strStadium);
	predatorsArenaDiv.innerText = data.teams[0].strStadium;
  predatorsLocationDiv.innerText= data.teams[0].strStadiumLocation;
	predatorsLeaugeDiv.innerText = data.teams[0].strLeague;
  predatorsYearDiv.innerText = data.teams[0].intFormedYear;
}


predatorsDiv.addEventListener('mouseover', function () {
  predatorsInfoDiv.style.display = 'block';
})


predatorsDiv.addEventListener('mouseout', function () {
  predatorsInfoDiv.style.display = 'none';
})


var kingsDiv = document.querySelector('#kings-button');
var kingsInfoDiv = document.querySelector('#kings-info');
var kingsArenaDiv = document.querySelector('#kings-arena');
var kingsLeaugeDiv = document.querySelector('#kings-league');
var kingsLocationDiv = document.querySelector('#kings-location');
var kingsYearDiv = document.querySelector('#kings-year');

var teamId = 134852;

// Insert your actual API request URL below
fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + teamId)
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
		  renderKings(jsonData);
    });


function renderKings(data) {
	console.log(data.teams[0].strStadium);
	kingsArenaDiv.innerText = data.teams[0].strStadium;
  kingsLocationDiv.innerText= data.teams[0].strStadiumLocation;
	kingsLeaugeDiv.innerText = data.teams[0].strLeague;
  kingsYearDiv.innerText = data.teams[0].intFormedYear;
}


kingsDiv.addEventListener('mouseover', function () {
  kingsInfoDiv.style.display = 'block';
})


kingsDiv.addEventListener('mouseout', function () {
  kingsInfoDiv.style.display = 'none';
})
