import { Component } from '@angular/core';
import { DtoSystemInfo } from '../../../ipc-dtos/dtosysteminfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-electron-boilerplate';
  constructor() {
  }
}
