const { ipcRenderer } = require('electron');

console.log('preload.js loaded');

window.electronIpcSend = (channel: string, ...args: any[]) => {
  ipcRenderer.send(channel, args);
};

window.electronIpcSendSync = (channel: string, ...args: any[]) => {
  return ipcRenderer.sendSync(channel, args);
};
