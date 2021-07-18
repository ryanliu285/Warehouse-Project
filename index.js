const { app, BrowserWindow, session, screen} = require('electron')

function createWindow () {

  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  // Create the browser window.
  let win = new BrowserWindow({
    //frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  win.setMenu(null)

  win.loadFile('index.html')

  win.maximize()

  win.webContents.openDevTools()

}

app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
