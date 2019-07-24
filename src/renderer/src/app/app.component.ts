import { Component } from '@angular/core';
import { DtoSystemInfo } from '../../../ipc-dtos/dtosysteminfo';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <h2>Here are some links to help you start: </h2>
    <button (click)="onClickMe()">Click me!</button>
    <h3>{{os}}</h3>
    <h3>{{mem}}</h3>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'renderer';

  os = '-';
  mem = 0;

  constructor() {
    window.electronIpcOn('test', (event: any, arg: any) => {
      console.log('got an electron ipc event');
      const systemInfo = DtoSystemInfo.deserialize(arg);

      console.log(systemInfo.Os);
      console.log(systemInfo.Mem);

      this.os = systemInfo.Os;
      this.mem = systemInfo.Mem;
    });
  }

  onClickMe(): void {
    console.log('button clicked');
    window.electronIpcSend('app-quit');
  }

}
