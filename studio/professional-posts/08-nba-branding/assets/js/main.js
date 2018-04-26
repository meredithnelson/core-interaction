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


// Insert your actual API request URL below
// LA Clippers
fetch('https://api.suredbits.com/nba/v0/players/LAC')
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        console.log(jsonData);
    });

//RENDER FUNTION SETUP
//--------------------

var fullName = document.querySelector('.fullName')

function render(data) {

// Insert your actual API request URL below
// Golden State Warriors
fetch('https://api.suredbits.com/nba/v0/players/GSW')
          .then(function(response) {
              return response.json();
          })
          .then(function(jsonData) {
              console.log(jsonData);
          });

      //RENDER FUNTION SETUP
      //--------------------

            var fullName = document.querySelector('.fullName')

// Insert your actual API request URL below
// Steph Curry

fetch('http://api.suredbits.com/nba/v0/players/curry/stephen')
    .then(function(response) {
        return response.json();
                      })
    .then(function(jsonData) {
        console.log(jsonData);
   });

//RENDER FUNTION SETUP
//--------------------

var team = document.querySelector('.team')
var fullName = document.querySelector('.fullName')
var rookieYear = document.querySelector('.rookieYear')

// Insert your actual API request URL below
// Blake Griffth

fetch('http://api.suredbits.com/nba/v0/players/griffin/blake')
    .then(function(response) {
        return response.json();
                      })
    .then(function(jsonData) {
        console.log(jsonData);
   });

//RENDER FUNTION SETUP
//--------------------

var team = document.querySelector('.team')
var fullName = document.querySelector('.fullName')
var rookieYear = document.querySelector('.rookieYear')
