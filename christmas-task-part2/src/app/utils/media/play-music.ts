const music = new Audio('audio/audio.mp3');

const playMusic = (isActive: boolean): void => {
  if (isActive) {
    music.play();
    music.loop = true;
  } else {
    music.pause();
    music.currentTime = 0;
  }
};

export default playMusic;
