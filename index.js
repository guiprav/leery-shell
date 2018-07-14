let { BrowserWindow, app } = require('electron');

app.on('ready', () => {
  let win = new BrowserWindow();

  win.loadFile('index.html');

  win.setMenu(null);
  win.webContents.openDevTools();
});
