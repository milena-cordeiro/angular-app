import { Component } from "@angular/core";

@Component({
  selector: 'hello-world',
  standalone: true,
  template: `
    <h2>{{greeting}}</h2>
  `
})
export class HelloWorldComponent {
  greeting: string = 'Hello T30';
}