import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import * as path from 'path';
import { DtoSystemInfo } from '../ipc-dtos/dtosysteminfo';
import * as os from 'os';

let win: BrowserWindow | null = null;

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
      // protect against prototype pollution
      contextIsolation: true,
      // turn off remote
      enableRemoteModule: false,
      // Preload script
      preload: path.join(app.getAppPath(), 'dist/preload', 'preload.js')
    }
  });

  // https://stackoverflow.com/a/58548866/600559
  Menu.setApplicationMenu(null);

  win.loadFile(path.join(app.getAppPath(), 'dist/renderer', 'index.html'));

  win.on('closed', () => {
    win = null;
  });
}

ipcMain.on('dev-tools', () => {
  if (win) {
    win.webContents.toggleDevTools();
  }
});

ipcMain.on('request-systeminfo', () => {
  const systemInfo = new DtoSystemInfo();
  systemInfo.Arch = os.arch();
  systemInfo.Hostname = os.hostname();
  systemInfo.Platform = os.platform();
  systemInfo.Release = os.release();
  const serializedString = systemInfo.serialize();
  if (win) {
    win.webContents.send('systeminfo', serializedString);
  }
});
