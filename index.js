// node project
const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');
const {app, BrowserWindow, ipcMain} = electron;

let mainWindow;

app.on('ready', () => {
  console.log('app is running...');
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', (event, path) => {
  ffmpeg.ffprobe(path, (err, meta) => {
    if (err || !meta) return;
    mainWindow.webContents.send('video:getDuration', meta.format.duration);
  });
})



// logic goes here, keep it out of web app side of things
// OS is in electron side of things

