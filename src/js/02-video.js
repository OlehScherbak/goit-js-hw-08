import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

let currentTime = localStorage.getItem('videoplayer-current-time');
currentTime = currentTime ? currentTime : 0;
player.setCurrentTime(currentTime);

player.on('timeupdate', throttle(currentTimeUpdate, 1000));

function currentTimeUpdate(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}
