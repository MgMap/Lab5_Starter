// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');
  const synth = window.speechSynthesis;

  // Load available voices and populate the dropdown
  function populateVoices() {
    const voices = synth.getVoices();
    voiceSelect.innerHTML = ''; // Clear existing options
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  // Populate voices on page load and when voices change
  populateVoices();
  synth.addEventListener('voiceschanged', populateVoices);

  // Handle "Press to Talk" button click
  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedVoice = voiceSelect.value;
    const voices = synth.getVoices();
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
    }

    // Change face to open mouth while speaking
    utterance.addEventListener('start', () => {
      faceImage.src = './assets/images/smiling-open.png';
    });

    // Revert face to smiling after speaking
    utterance.addEventListener('end', () => {
      faceImage.src = './assets/images/smiling.png';
    });

    synth.speak(utterance);
  });
}