import Player from '@vimeo/player';
const stoppedTime = 'videoplayer-current-time'

const vimeoPlayer = document.getElementById('vimeo-player')
const player = new Player(vimeoPlayer, {
  width: 640,
})

player.on('timeupdate', function (data) {
  const currentTime = data.seconds
  localStorage.setItem(stoppedTime, currentTime)
})

const saveTime = localStorage.getItem(stoppedTime)
if (saveTime) {
  player.setCurrentTime(parseFloat(saveTime))
}
