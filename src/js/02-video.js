// import SimpleLightbox from "simplelightbox";
import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 'vimeo-player',
  width: 640,
});

player.on('play', function () {
  console.log('played the video!');
});
