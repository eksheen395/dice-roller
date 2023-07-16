const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  rollDice: () => ipcRenderer.invoke('roll-dice')
})