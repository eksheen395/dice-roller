const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('electronAPI', {
  rollDice: (d) => ipcRenderer.invoke('roll-dice', (event, d))
})