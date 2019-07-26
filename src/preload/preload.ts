import { ipcRenderer } from 'electron';

console.log('preload.js loaded');

window.electronIpcSend = (channel: string, ...arg: any) => {
  ipcRenderer.send(channel, arg);
};

window.electronIpcSendSync = (channel: string, ...arg: any) => {
  return ipcRenderer.sendSync(channel, arg);
};

window.electronIpcOn = (channel: string, listener: (event: any, ...arg: any) => void) => {
  ipcRenderer.on(channel, listener);
};

window.electronIpcOnce = (channel: string, listener: (event: any, ...arg: any) => void) => {
  ipcRenderer.once(channel, listener);
};

window.electronIpcRemoveListener = (channel: string, listener: (event: any, ...arg: any) => void) => {
  ipcRenderer.removeListener(channel, listener);
};

window.electronIpcRemoveAllListeners = (channel: string) => {
  ipcRenderer.removeAllListeners(channel);
};
