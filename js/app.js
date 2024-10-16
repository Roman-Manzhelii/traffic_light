const light = document.getElementById('trafficLight');
let currentColor = '';
let clickCount = 0;

light.addEventListener('click', changeColor);

function changeColor() {
  clickCount++;

  if (clickCount % 4 === 0) {
    currentColor = 'off';
  } else {
    if (currentColor === 'off' || currentColor === '') {
      currentColor = 'red';
    } else if (currentColor === 'red') {
      currentColor = 'yellow';
    } else if (currentColor === 'yellow') {
      currentColor = 'green';
    }
  }

  updateTrafficLight();
}

function updateTrafficLight() {
  light.innerHTML = `
        <div class="${currentColor === 'red' ? 'red' : 'off'}"></div>
        <div class="${currentColor === 'yellow' ? 'yellow' : 'off'}"></div>
        <div class="${currentColor === 'green' ? 'green' : 'off'}"></div>
    `;
}

updateTrafficLight();
