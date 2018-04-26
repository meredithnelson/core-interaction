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
// Pittsburgh Steelers Roster
fetch('http://api.suredbits.com/nfl/v0/team/PIT/roster')
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
//Chicago Bulls
fetch('http://api.suredbits.com/nfl/v0/team/chi/roster')
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
//LA Rams
fetch('http://api.suredbits.com/nfl/v0/team/LA/roster')
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsonData) {
                    console.log(jsonData);
                });

//RENDER FUNTION SETUP
//--------------------

      var fullName = document.querySelector('.fullName')
