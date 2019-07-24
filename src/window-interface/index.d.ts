interface Window {
    electronIpcSend: (channel: string, ...arg: any) => void;
    electronIpcSendSync: (channel: string, ...arg: any) => any;
    electronIpcOn: (channel: string, listener: (event: any, ...arg: any) => void) => void;
    electronIpcRemoveListener: (channel: string, listener: (event: any, arg: any) => void) => void;
    electronIpcRemoveAllListeners: (channel: string) => void;
  }