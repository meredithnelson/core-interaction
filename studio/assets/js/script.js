var video1 = document.querySelector('#video1')

video1.addEventListener('mouseover', function() {
    video1.play()
})
video1.addEventListener('mouseout', function() {
    video1.pause()
})

var video2 = document.querySelector('#video2')

video2.addEventListener('mouseover', function() {
    video2.play()
})
video2.addEventListener('mouseout', function() {
    video2.pause()
})
