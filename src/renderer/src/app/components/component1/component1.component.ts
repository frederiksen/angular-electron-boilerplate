import { Component, OnInit, NgZone } from '@angular/core';
import { IpcService } from 'src/app/ipc.service';

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

  constructor(private ipcService: IpcService, private ngZone: NgZone) { }

  ngOnInit() {
    this.ipcService.getSystemInfoAsync()
      .subscribe(systemInfo => {
        this.ngZone.run(() => {
          this.arch = systemInfo.Arch;
          this.hostname = systemInfo.Hostname;
          this.platform = systemInfo.Platform;
          this.release = systemInfo.Release;
        });
      });
  }
}
