import { Component } from '@angular/core';

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
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'renderer';

  constructor() {
    window.electronIpcOn('test', () => {
      alert('ok');
    });
  }

  onClickMe(): void {
    console.log('test1');
    console.log('test2');
    console.log('test3');
    window.electronIpcSend('app-quit');
  }

}
