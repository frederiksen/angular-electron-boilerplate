const { ipcRenderer } = require('electron');

console.log('preload.js loaded');

window.electronIpcSend = (channel: string, ...args: any[]) => {
  ipcRenderer.send(channel, args);
};

window.electronIpcSendSync = (channel: string, ...args: any[]) => {
  return ipcRenderer.sendSync(channel, args);
};

window.electronIpcOn = (channel: string, listener: (event: any, ...args: any[]) => void) => {
  ipcRenderer.on(channel, listener);
};

window.electronIpcRemoveListener = (channel: string, listener: (event: any, ...args: any[]) => void) => {
  ipcRenderer.removeListener(channel, listener);
};

window.electronIpcRemoveAllListeners = (channel: string) => {
  ipcRenderer.removeAllListeners(channel);
};
