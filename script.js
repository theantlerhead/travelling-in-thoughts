const iframe = document.getElementById('vimeo-video');
const player = new Vimeo.Player(iframe);

player.on('loaded', function() {
    player.play();
});