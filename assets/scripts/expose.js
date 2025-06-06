// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  const hornImage = document.querySelector('#expose img');
  const jsConfetti = new JSConfetti();

  // Update horn image and audio source
  hornSelect.addEventListener('change', () => {
    const hornValue = hornSelect.value;
    if (hornValue === 'air-horn') {
      hornImage.src = './assets/images/air-horn.svg';
      audioElement.src = './assets/audio/air-horn.mp3';
    } else if (hornValue === 'car-horn') {
      hornImage.src = './assets/images/car-horn.svg';
      audioElement.src = './assets/audio/car-horn.mp3';
    } else if (hornValue === 'party-horn') {
      hornImage.src = './assets/images/party-horn.svg';
      audioElement.src = './assets/audio/party-horn.mp3';
    }
  });

  // Update volume icon and audio volume
  volumeSlider.addEventListener('input', () => {
    const volumeValue = volumeSlider.value;
    audioElement.volume = volumeValue / 100; // Convert to range 0-1

    if (volumeValue == 0) {
      volumeIcon.src = './assets/icons/volume-level-0.svg';
    } else if (volumeValue < 33) {
      volumeIcon.src = './assets/icons/volume-level-1.svg';
    } else if (volumeValue < 67) {
      volumeIcon.src = './assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = './assets/icons/volume-level-3.svg';
    }
  });

  // Play sound and trigger confetti for party horn
  playButton.addEventListener('click', () => {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}