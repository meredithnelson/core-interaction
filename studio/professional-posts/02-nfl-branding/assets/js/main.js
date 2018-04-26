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
fetch('https://api.suredbits.com/nfl/v0/team/PIT/roster')
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        render(jsonData);
    });

//RENDER FUNTION SETUP
//--------------------

      var fullName = document.querySelector('.fullName')

      function render (data) {
        document.querySelector('https://api.suredbits.com/nfl/v0/team/PIT/roster')
      }
