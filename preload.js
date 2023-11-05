const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('electronAPI', {
  rollDice: (d) => ipcRenderer.invoke('roll-dice', (d)),
  incrementDie: (m) => ipcRenderer.invoke('increment-die', (m)),
  decrementDie: (m) => ipcRenderer.invoke('decrement-die', (m))
})