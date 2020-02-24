import { Injectable } from '@angular/core';
import { DtoSystemInfo } from '../../../ipc-dtos/dtosysteminfo';

@Injectable({
  providedIn: 'root'
})
export class IpcService {

  constructor() { }

  openDevTools() {
    window.api.electronIpcSend('dev-tools');
  }

  getSystemInfoAsync(): Promise<DtoSystemInfo> {
    return new Promise((resolve, reject) => {
      window.api.electronIpcOnce('systeminfo', (event, arg) => {
        const systemInfo: DtoSystemInfo = DtoSystemInfo.deserialize(arg);
        resolve(systemInfo);
      });
      window.api.electronIpcSend('request-systeminfo');
    });
  }
}
