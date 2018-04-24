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
fetch('https://api.suredbits.com/sport/version/searchParameter/subParameters')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render(jsonData);
    });

  
