const { app, BrowserWindow, ipcMain } = require('electron')
// include the Node.js 'path' module at the top of your file
const path = require('path')

// modify your existing createWindow() function
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}


//Dice Rolling Handler
function handleRollDice(event, d) {
  const diceRoll = Math.floor(Math.random() * d+1);
	return diceRoll
}


app.whenReady().then(() => {
    ipcMain.handle('roll-dice', async (event, d) => {
    const result = await handleRollDice(event, d)
    return result
  })
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})