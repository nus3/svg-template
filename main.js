
var animation = anime({
    targets: '#pointer',
    translateX: 250,
    easing: 'linear',
    duration: 300,
    loop: false,
})

const pause = () => {
    animation.pause()
}

const play = () => {
    animation.play()
}

