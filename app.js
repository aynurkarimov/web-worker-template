const btnCounter = document.querySelector('#btn_counter');
const btnComputation = document.querySelector('#btn_computation');
const counterTitle = document.querySelector('h3');
const checkbox = document.getElementById('checkbox');
const checkboxLabel = document.querySelector('#checkbox_label');

const worker = new Worker('worker.js');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    checkboxLabel.textContent = 'Web Worker is on'
  } else {
    checkboxLabel.textContent = 'Web Worker is off'
  }
});

worker.addEventListener('message', ({data}) => {
  console.log('The computation with Worker has finished!', data);
});

btnCounter.addEventListener('click', () => {
  const value = counterTitle.textContent;
  const incremented = Number(value) + 1;
  
  counterTitle.textContent = incremented;
});

btnComputation.addEventListener('click', () => {
  if (!checkbox.checked) {
    let uselessCounter = 0;
    for (let i = 0; i < 10000000000; i++) { uselessCounter += i }
    console.log('The computation without Worker has finished!', uselessCounter);
    return;
  }

  worker.postMessage('startLoop');
});
