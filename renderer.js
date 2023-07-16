const setButton = document.getElementById('btn')
const resultElement = document.getElementById('result')

setButton.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice()
  resultElement.innerText = rollResult
})

