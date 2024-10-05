// Define a color palette (use any colors you like)
const colorPalette = [
  'rgba(255, 99, 132, 0.5)',  // Light red
  'rgba(54, 162, 235, 0.5)',  // Light blue
  'rgba(75, 192, 192, 0.5)',  // Light teal
  'rgba(255, 206, 86, 0.5)',  // Light yellow
  'rgba(153, 102, 255, 0.5)', // Light purple
  'rgba(255, 159, 64, 0.5)'   // Light orange
];

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

  document.body.appendChild(pulse);

  // Get the pulse duration from CSS variable
  const pulseDuration = parseFloat(getCssVariableValue('--pulse-duration')) * 1000; // Convert to milliseconds

  // Remove the pulse after animation (duration retrieved dynamically)
  setTimeout(() => {
    pulse.remove();
  }, pulseDuration); 
}

function randomPulse() {
  // Create pulses at random intervals
  setInterval(createPulse, (2*1000)); // Every 2 seconds
}

randomPulse();