import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { DtoSystemInfo } from '../ipc-dtos/dtosysteminfo';
//import { si } from 'systeminformation';
const si = require('systeminformation');


let win: BrowserWindow;

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Disabled Node integration
      nodeIntegration: false,
      // In a sandbox
      sandbox: true,
      // Preload script
      preload: path.join(app.getAppPath(), 'dist/main', 'preload.js')
    }
  });

  win.loadFile(path.join(app.getAppPath(), 'dist/renderer', 'index.html'));

  win.on('closed', () => {
    win = null;
  });
}

ipcMain.on('app-quit', (event, arg) => {
//  app.quit();


      si.cpu().then(data => {
        console.log(data);

        const systemInfo = new DtoSystemInfo();
        systemInfo.Os = data.brand;
        systemInfo.Mem = data.physicalCores;
        win.webContents.send('test', systemInfo.serialize());
      })
    .catch(error => console.error(error));

});
