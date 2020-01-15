import { Component, Input } from "@angular/core";

@Component({
  selector: "app-user",

  template: `
    <input type="text" [(ngModel)]="name" />
    <h1>Hello from user.component.ts</h1>
    <h3>This is string interpolation: {{ name }}</h3>
  `
})
export class User_Component_josh {
  @Input() name;

  on_user_input(event) {
    // uses vanilla JS-DOM element still
    this.name = event.target.value;
  }
}
