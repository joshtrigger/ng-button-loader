import { Component } from '@angular/core';

@Component({
  selector: 'ng-loading-button-root',
  template: `
    <button mat-flat-button fxLayoutAlign="center center">
      <mat-spinner></mat-spinner>
      <span id="btn-text">Save</span>
    </button>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  buttonText: string = '';
}
