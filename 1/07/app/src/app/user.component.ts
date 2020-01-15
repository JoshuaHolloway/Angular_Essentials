import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user",

  template: `
    <input type="text" (input)="on_user_input($event)" [value]="name" />
    <!-- <input type="text" [(ngModel)]="name" /> -->
    <h1>Hello from user.component.ts</h1>
    <h3>This is string interpolation: {{ name }}</h3>
    <app-user-detail></app-user-detail>
  `
})
export class User_Component_josh {
  @Input() name: string;
  @Output() name_changed = new EventEmitter<string>();

  on_user_input(event) {
    // this.name = event.target.value;
    // we instead emit an event from which we can listen to from outside (app.component.html)
    this.name_changed.emit(event.target.value);
  }
}
