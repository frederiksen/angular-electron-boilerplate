interface Window {
    electronIpcSend: (channel: string, ...args: any[]) => void;
    electronIpcSendSync: (channel: string, ...args: any[]) => any;
    electronIpcOn: (channel: string, listener: (event: any, ...args: any[]) => void) => void;
    electronIpcRemoveListener: (channel: string, listener: (event: any, ...args: any[]) => void) => void;
    electronIpcRemoveAllListeners: (channel: string) => void;
  }