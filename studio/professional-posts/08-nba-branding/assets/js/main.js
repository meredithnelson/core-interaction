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

var goldenStateDiv = document.querySelector('#golden-state-button');
var goldenStateInfoDiv = document.querySelector('#golden-state-info');
var goldenStateArenaDiv = document.querySelector('#golden-state-arena');
var goldenStateLeaugeDiv = document.querySelector('#golden-state-league');
var goldenStateLocationDiv = document.querySelector('#golden-state-location');
var goldenStateYearDiv = document.querySelector('#golden-state-year');

var teamId = 134865;

// Insert your actual API request URL below
fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + teamId)
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
		  renderGoldenState(jsonData);
    });


function renderGoldenState(data) {
	console.log(data.teams[0].strStadium);
	goldenStateArenaDiv.innerText = data.teams[0].strStadium;
  goldenStateLocationDiv.innerText= data.teams[0].strStadiumLocation;
	goldenStateLeaugeDiv.innerText = data.teams[0].strLeague;
  goldenStateYearDiv.innerText = data.teams[0].intFormedYear;
}


goldenStateDiv.addEventListener('mouseover', function () {
	goldenStateInfoDiv.style.display = 'block';
})


goldenStateDiv.addEventListener('mouseout', function () {
	goldenStateInfoDiv.style.display = 'none';
})


var clippersDiv = document.querySelector('#clippers-button');
var clippersInfoDiv = document.querySelector('#clippers-info');
var clippersArenaDiv = document.querySelector('#clippers-arena');
var clippersLeaugeDiv = document.querySelector('#clippers-league');
var clippersLocationDiv = document.querySelector('#clippers-location');
var clippersYearDiv = document.querySelector('#clippers-year');

var teamId = 134866;

// Insert your actual API request URL below
fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + teamId)
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
		  renderClippers(jsonData);
    });


function renderClippers(data) {
	console.log(data.teams[0].strStadium);
	clippersArenaDiv.innerText = data.teams[0].strStadium;
  clippersLocationDiv.innerText= data.teams[0].strStadiumLocation;
	clippersLeaugeDiv.innerText = data.teams[0].strLeague;
  clippersYearDiv.innerText = data.teams[0].intFormedYear;
}


clippersDiv.addEventListener('mouseover', function () {
  clippersInfoDiv.style.display = 'block';
})


clippersDiv.addEventListener('mouseout', function () {
	clippersInfoDiv.style.display = 'none';
})



var lakersDiv = document.querySelector('#lakers-button');
var lakersInfoDiv = document.querySelector('#lakers-info');
var lakersArenaDiv = document.querySelector('#lakers-arena');
var lakersLeaugeDiv = document.querySelector('#lakers-league');
var lakersLocationDiv = document.querySelector('#lakers-location');
var lakersYearDiv = document.querySelector('#lakers-year');

var teamId = 134867;

// Insert your actual API request URL below
fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + teamId)
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
		  renderLakers(jsonData);
    });


function renderLakers(data) {
	console.log(data.teams[0].strStadium);
	lakersArenaDiv.innerText = data.teams[0].strStadium;
  lakersLocationDiv.innerText= data.teams[0].strStadiumLocation;
	lakersLeaugeDiv.innerText = data.teams[0].strLeague;
  lakersYearDiv.innerText = data.teams[0].intFormedYear;
}


lakersDiv.addEventListener('mouseover', function () {
  lakersInfoDiv.style.display = 'block';
})


lakersDiv.addEventListener('mouseout', function () {
  lakersInfoDiv.style.display = 'none';
})
