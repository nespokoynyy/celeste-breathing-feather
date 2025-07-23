const music = document.getElementById('background-music')
const toggleBtn = document.getElementById('feather')

toggleBtn.addEventListener('click', () => {

    if(music.paused){
        music.play()
    } else {
        music.pause()
    }
})