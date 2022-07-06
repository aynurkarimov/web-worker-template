self.addEventListener('message', ({data}) => {
  let uselessCounter = 0;

  if (data === 'startLoop') {
    for (let i = 0; i < 10000000000; i++) { uselessCounter += i }
    self.postMessage(uselessCounter);
  }
});
