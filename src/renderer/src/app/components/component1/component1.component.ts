import { Component, OnInit } from '@angular/core';
import { DtoSystemInfo } from '../../../../../ipc-dtos/dtosysteminfo';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  arch = '-';
  hostname = '-';
  platform = '-';
  release = '-';

  constructor() { }

  ngOnInit() {
    window.electronIpcOn('systeminfo', (event, arg) => {
      console.log(arg);
      const systemInfo: DtoSystemInfo = DtoSystemInfo.deserialize(arg);
      this.arch = systemInfo.Arch;
      this.hostname = systemInfo.Hostname;
      this.platform = systemInfo.Platform;
      this.release = systemInfo.Release;
    });
    window.electronIpcSend('request-systeminfo');
  }

}