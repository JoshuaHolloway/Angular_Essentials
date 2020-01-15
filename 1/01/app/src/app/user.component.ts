import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
    <h1>Hello from user.component.ts</h1>
    <h3>This is string interpolation: {{name}} </h3>
    `
})
export class User_Component_josh {
    name = 'josh';
}