const { app, BrowserWindow, ipcMain } = require('electron')
// include the Node.js 'path' module at the top of your file
const path = require('path')

// modify your existing createWindow() function
const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 650,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}


//Dice Rolling Handler
function handleRollDice(d) {
    return Math.floor(Math.random() * d + 1)
}

function incrementModifier(m) {
    return parseInt(m)+1
}

function decrementModifier(m) {
    return parseInt(m)-1
}


app.whenReady().then(() => {
    ipcMain.handle('roll-dice', async (event, d) => {
        return handleRollDice(d);
  })

ipcMain.handle('increment-die', async (event, m) => {
    return incrementModifier(m);
})

ipcMain.handle('decrement-die', async (event, m) => {
    return decrementModifier(m);
})
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})