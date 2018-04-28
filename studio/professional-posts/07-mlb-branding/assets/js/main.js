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

var soxDiv = document.querySelector('#sox-button');
var soxInfoDiv = document.querySelector('#sox-info');
var soxArenaDiv = document.querySelector('#sox-arena');
var soxLeaugeDiv = document.querySelector('#sox-league');
var soxLocationDiv = document.querySelector('#sox-location');
var soxYearDiv = document.querySelector('#sox-year');

var teamId = 135252;

// Insert your actual API request URL below
fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + teamId)
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
		  renderSox(jsonData);
    });


function renderSox(data) {
	console.log(data.teams[0].strStadium);
	soxArenaDiv.innerText = data.teams[0].strStadium;
  soxLocationDiv.innerText= data.teams[0].strStadiumLocation;
	soxLeaugeDiv.innerText = data.teams[0].strLeague;
  soxYearDiv.innerText = data.teams[0].intFormedYear;
}


soxDiv.addEventListener('mouseover', function () {
  soxInfoDiv.style.display = 'block';
})


soxDiv.addEventListener('mouseout', function () {
  soxInfoDiv.style.display = 'none';
})

var nationalsDiv = document.querySelector('#nationals-button');
var nationalsInfoDiv = document.querySelector('#nationals-info');
var nationalsArenaDiv = document.querySelector('#nationals-arena');
var nationalsLeaugeDiv = document.querySelector('#nationals-league');
var nationalsLocationDiv = document.querySelector('#nationals-location');
var nationalsYearDiv = document.querySelector('#nationals-year');

var teamId = 135281;

// Insert your actual API request URL below
fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + teamId)
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
		  renderNationals(jsonData);
    });


function renderNationals(data) {
	console.log(data.teams[0].strStadium);
	nationalsArenaDiv.innerText = data.teams[0].strStadium;
  nationalsLocationDiv.innerText= data.teams[0].strStadiumLocation;
	nationalsLeaugeDiv.innerText = data.teams[0].strLeague;
  nationalsYearDiv.innerText = data.teams[0].intFormedYear;
}


nationalsDiv.addEventListener('mouseover', function () {
  nationalsInfoDiv.style.display = 'block';
})


nationalsDiv.addEventListener('mouseout', function () {
  nationalsInfoDiv.style.display = 'none';
})
