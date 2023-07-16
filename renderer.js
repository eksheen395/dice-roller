//Buttons
const d20Btn = document.getElementById('btn-d20')
const d12Btn = document.getElementById('btn-d12')
const d10Btn = document.getElementById('btn-d10')
const d8Btn = document.getElementById('btn-d8')
const d6Btn = document.getElementById('btn-d6')
const d4Btn = document.getElementById('btn-d4')
const d100Btn = document.getElementById('btn-d100')
const clearBtn = document.getElementById('btn-clear-log')

//Outputs
const result20Element = document.getElementById('result-d20')
const result12Element = document.getElementById('result-d12')
const result10Element = document.getElementById('result-d10')
const result8Element = document.getElementById('result-d8')
const result6Element = document.getElementById('result-d6')
const result4Element = document.getElementById('result-d4')
const result100Element = document.getElementById('result-d100')
//TextArea
const rollLogElement = document.getElementById('roll-log')
//Log of dice rolls
let rollLog = ''

d20Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(20)
  rollLog += rollResult + ', '
  result20Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

d12Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(12)
  rollLog += rollResult + ', '
  result12Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

d10Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(10)
  rollLog += rollResult + ', '
  result10Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

d8Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(8)
  rollLog += rollResult + ', '
  result8Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

d6Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(6)
  rollLog += rollResult + ', '
  result6Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

d4Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(4)
  rollLog += rollResult + ', '
  result4Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

d100Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(100)
  rollLog += rollResult + ', '
  result100Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

clearBtn.addEventListener('click', async () => {
  rollLog = ''
  rollLogElement.innerText = rollLog
})

