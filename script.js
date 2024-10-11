// Define a color palette (use any colors you like)

const lightModePalette = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(255, 206, 86, 0.5)', 
  'rgba(153, 102, 255, 0.5)',
  'rgba(255, 159, 64, 0.5)'  
];

const darkModePalette = [
  'rgb(176, 156, 77)',
  'rgb(118, 137, 72)',
  'rgb(96, 119, 68)',
  'rgb(52, 98, 63)'
];

let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
let colorPalette = isDarkMode ? darkModePalette : lightModePalette;

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  isDarkMode = event.matches;
  colorPalette = isDarkMode ? darkModePalette : lightModePalette;
});

function getRandomColor() {
  // Randomly select a color from the colorPalette array
  const randomIndex = Math.floor(Math.random() * colorPalette.length);
  return colorPalette[randomIndex];
}

function getCssVariableValue(variable) {
  // Get the CSS variable value from the :root selector
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

function createPulse() {
  const pulse = document.createElement('div');
  pulse.classList.add('pulse');

  // Randomize position
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  pulse.style.left = `${x}px`;
  pulse.style.top = `${y}px`;

  // Apply random color from palette
  const color = getRandomColor();
  pulse.style.background = `radial-gradient(circle, ${color} 0%, rgba(255, 255, 255, 0) 70%)`;

  const container = document.getElementById('pulse-container');
  container.appendChild(pulse);

  // Get the pulse duration from CSS variable
  const pulseDuration = parseFloat(getCssVariableValue('--pulse-duration')) * 1000; // Convert to milliseconds

  // Remove the pulse after the animation duration
  setTimeout(() => {
    pulse.remove();
  }, pulseDuration); 
}

function randomPulse() {
  // Create pulses at random intervals
  setInterval(createPulse, (2*1000)); // Every 2 seconds
}

// Create pulses immediately when the page loads
document.addEventListener('DOMContentLoaded', () => {
  createPulse();
  // Optionally, create multiple pulses
  for (let i = 0; i < 5; i++) {
    setTimeout(createPulse, i * 1000); // Create a pulse every second for 5 seconds
  }

  // Continue creating pulses at regular intervals
 randomPulse();
});