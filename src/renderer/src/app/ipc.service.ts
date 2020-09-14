import { Injectable } from '@angular/core';
import { DtoSystemInfo } from '../../../ipc-dtos/dtosysteminfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpcService {

  constructor() { }

  openDevTools() {
    window.api.electronIpcSend('dev-tools');
  }

  getSystemInfoAsync(): Observable<DtoSystemInfo> {
    return new Observable(subscriber => {
      window.api.electronIpcOnce('systeminfo', (event, arg) => {
        const systemInfo: DtoSystemInfo = DtoSystemInfo.deserialize(arg);
        subscriber.next(systemInfo);
        subscriber.complete();
      });
      window.api.electronIpcSend('request-systeminfo');
    });
  }
}
