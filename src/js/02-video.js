import Player from '@vimeo/player';
// import _ from 'lodash.throttle';
// var _ = require('lodash.throttle');
const player = new Player('vimeo-player');

let currentTime = localStorage.getItem('videoplayer-current-time');
currentTime = currentTime ? currentTime : 0;
player.setCurrentTime(currentTime);

player.on('timeupdate', _.throttle(currentTimeUpdate, 1000));

function currentTimeUpdate(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
  console.log(localStorage.getItem('videoplayer-current-time'));
}
