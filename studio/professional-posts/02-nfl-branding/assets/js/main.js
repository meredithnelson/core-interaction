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


var ramsDiv = document.querySelector('#rams-button');
var ramsInfoDiv = document.querySelector('#rams-info');
var ramsArenaDiv = document.querySelector('#rams-arena');
var ramsLeaugeDiv = document.querySelector('#rams-league');
var ramsLocationDiv = document.querySelector('#rams-location');
var ramsYearDiv = document.querySelector('#rams-year');

var teamId = 135907;

// Insert your actual API request URL below
fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + teamId)
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
		  renderRams(jsonData);
    });


function renderRams(data) {
	console.log(data.teams[0].strStadium);
	ramsArenaDiv.innerText = data.teams[0].strStadium;
  ramsLocationDiv.innerText= data.teams[0].strStadiumLocation;
	ramsLeaugeDiv.innerText = data.teams[0].strLeague;
  ramsYearDiv.innerText = data.teams[0].intFormedYear;
}


ramsDiv.addEventListener('mouseover', function () {
  ramsInfoDiv.style.display = 'block';
})


ramsDiv.addEventListener('mouseout', function () {
  ramsInfoDiv.style.display = 'none';
})

var steelersDiv = document.querySelector('#steelers-button');
var steelersInfoDiv = document.querySelector('#steelers-info');
var steelersArenaDiv = document.querySelector('#steelers-arena');
var steelersLeaugeDiv = document.querySelector('#steelers-league');
var steelersLocationDiv = document.querySelector('#steelers-location');
var steelersYearDiv = document.querySelector('#steelers-year');

var teamId = 134925;

// Insert your actual API request URL below
fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + teamId)
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
		  renderSteelers(jsonData);
    });


function renderSteelers(data) {
	console.log(data.teams[0].strStadium);
	steelersArenaDiv.innerText = data.teams[0].strStadium;
  steelersLocationDiv.innerText= data.teams[0].strStadiumLocation;
  steelersLeaugeDiv.innerText = data.teams[0].strLeague;
  steelersYearDiv.innerText = data.teams[0].intFormedYear;
}


steelersDiv.addEventListener('mouseover', function () {
  steelersInfoDiv.style.display = 'block';
})


steelersDiv.addEventListener('mouseout', function () {
  steelersInfoDiv.style.display = 'none';
})
