// node project
const electron = require('electron');

const {app, BrowserWindow} = electron;


app.on('ready', () => {
  console.log('app is running...');
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
})
// electron starts

// app process is created

// app is ready to do things

// app closes down