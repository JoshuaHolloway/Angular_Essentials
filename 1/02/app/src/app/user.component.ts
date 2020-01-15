import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
    <input type="text" (input)="on_user_input($event)">
    <h1>Hello from user.component.ts</h1>
    <h3>This is string interpolation: {{name}} </h3>
    `
})
export class User_Component_josh {
    name = 'josh';

    // regster by adding event listener on dom-element
    //josh_input.addEventListener('input', () => { /*do stuff*/ });
    on_user_input(event) {
        // uses vanilla JS-DOM element still 
        this.name = event.target.value;
    }
}