//Buttons
const d20Btn = document.getElementById('btn-d20')
const increment20Btn = document.getElementById('increment-d20')
const decrement20Btn = document.getElementById('decrement-d20')

const d12Btn = document.getElementById('btn-d12')
const increment12Btn = document.getElementById('increment-d12')
const decrement12Btn = document.getElementById('decrement-d12')

const d10Btn = document.getElementById('btn-d10')
const increment10Btn = document.getElementById('increment-d10')
const decrement10Btn = document.getElementById('decrement-d10')

const d8Btn = document.getElementById('btn-d8')
const increment8Btn = document.getElementById('increment-d8')
const decrement8Btn = document.getElementById('decrement-d8')

const d6Btn = document.getElementById('btn-d6')
const increment6Btn = document.getElementById('increment-d6')
const decrement6Btn = document.getElementById('decrement-d6')

const d4Btn = document.getElementById('btn-d4')
const increment4Btn = document.getElementById('increment-d4')
const decrement4Btn = document.getElementById('decrement-d4')

const d100Btn = document.getElementById('btn-d100')
const increment100Btn = document.getElementById('increment-d100')
const decrement100Btn = document.getElementById('decrement-d100')

const clearBtn = document.getElementById('btn-clear-log')

//Outputs
const result20Element = document.getElementById('result-d20')
const modifier20Element = document.getElementById('modifier-d20')
const modifier20PlusResultElement = document.getElementById('result-plus-modifier-d20')

const result12Element = document.getElementById('result-d12')
const modifier12Element = document.getElementById('modifier-d12')
const modifier12PlusResultElement = document.getElementById('result-plus-modifier-d12')

const result10Element = document.getElementById('result-d10')
const modifier10Element = document.getElementById('modifier-d10')
const modifier10PlusResultElement = document.getElementById('result-plus-modifier-d10')

const result8Element = document.getElementById('result-d8')
const modifier8Element = document.getElementById('modifier-d8')
const modifier8PlusResultElement = document.getElementById('result-plus-modifier-d8')

const result6Element = document.getElementById('result-d6')
const modifier6Element = document.getElementById('modifier-d6')
const modifier6PlusResultElement = document.getElementById('result-plus-modifier-d6')

const result4Element = document.getElementById('result-d4')
const modifier4Element = document.getElementById('modifier-d4')
const modifier4PlusResultElement = document.getElementById('result-plus-modifier-d4')

const result100Element = document.getElementById('result-d100')
const modifier100Element = document.getElementById('modifier-d100')
const modifier100PlusResultElement = document.getElementById('result-plus-modifier-d100')

//TextArea
const rollLogElement = document.getElementById('roll-log')
//Log of dice rolls
let rollLog = ''

d20Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(20)
  const calc = parseInt(rollResult) + parseInt(modifier20Element.innerText)
  modifier20PlusResultElement.innerText = calc.toString()
  rollLog += calc.toString() + ', '
  result20Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

d12Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(12)
  const calc = parseInt(rollResult) + parseInt(modifier12Element.innerText)
  modifier12PlusResultElement.innerText = calc.toString()
  rollLog += calc.toString() + ', '
  result12Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

d10Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(10)
  const calc = parseInt(rollResult) + parseInt(modifier10Element.innerText)
  modifier10PlusResultElement.innerText = calc.toString()
  rollLog += calc.toString() + ', '
  result10Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

d8Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(8)
  const calc = parseInt(rollResult) + parseInt(modifier8Element.innerText)
  modifier8PlusResultElement.innerText = calc.toString()
  rollLog += calc.toString() + ', '
  result8Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

d6Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(6)
  const calc = parseInt(rollResult) + parseInt(modifier6Element.innerText)
  modifier6PlusResultElement.innerText = calc.toString()
  rollLog += calc.toString() + ', '
  result6Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

d4Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(4)
  const calc = parseInt(rollResult) + parseInt(modifier4Element.innerText)
  modifier4PlusResultElement.innerText = calc.toString()
  rollLog += calc.toString() + ', '
  result4Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

d100Btn.addEventListener('click', async () => {
  const rollResult = await window.electronAPI.rollDice(100)
  const calc = parseInt(rollResult) + parseInt(modifier100Element.innerText)
  modifier100PlusResultElement.innerText = calc.toString()
  rollLog += calc.toString() + ', '
  result100Element.innerText = rollResult
  rollLogElement.innerText = rollLog
})

clearBtn.addEventListener('click', async () => {
  rollLog = ''
  rollLogElement.innerText = rollLog
})

increment20Btn.addEventListener('click', async () => {
  modifier20Element.innerText = await window.electronAPI.incrementDie(modifier20Element.innerText)
})

decrement20Btn.addEventListener('click', async () => {
  modifier20Element.innerText = await window.electronAPI.decrementDie(modifier20Element.innerText)
})

increment12Btn.addEventListener('click', async () => {
  modifier12Element.innerText = await window.electronAPI.incrementDie(modifier12Element.innerText)
})

decrement12Btn.addEventListener('click', async () => {
  modifier12Element.innerText = await window.electronAPI.decrementDie(modifier12Element.innerText)
})

increment10Btn.addEventListener('click', async () => {
  modifier10Element.innerText = await window.electronAPI.incrementDie(modifier10Element.innerText)
})

decrement10Btn.addEventListener('click', async () => {
  modifier10Element.innerText = await window.electronAPI.decrementDie(modifier10Element.innerText)
})

increment8Btn.addEventListener('click', async () => {
  modifier8Element.innerText = await window.electronAPI.incrementDie(modifier8Element.innerText)
})

decrement8Btn.addEventListener('click', async () => {
  modifier8Element.innerText = await window.electronAPI.decrementDie(modifier8Element.innerText)
})

increment6Btn.addEventListener('click', async () => {
  modifier6Element.innerText = await window.electronAPI.incrementDie(modifier6Element.innerText)
})

decrement6Btn.addEventListener('click', async () => {
  modifier6Element.innerText = await window.electronAPI.decrementDie(modifier6Element.innerText)
})

increment4Btn.addEventListener('click', async () => {
  modifier4Element.innerText = await window.electronAPI.incrementDie(modifier4Element.innerText)
})

decrement4Btn.addEventListener('click', async () => {
  modifier4Element.innerText = await window.electronAPI.decrementDie(modifier4Element.innerText)
})

increment100Btn.addEventListener('click', async () => {
  modifier100Element.innerText = await window.electronAPI.incrementDie(modifier100Element.innerText)
})

decrement100Btn.addEventListener('click', async () => {
  modifier100Element.innerText = await window.electronAPI.decrementDie(modifier100Element.innerText)
})





