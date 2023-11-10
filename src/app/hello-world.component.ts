import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'hello-world',
  standalone: true,
  templateUrl: './hello-world.component.html',
  imports: [CommonModule],
})
export class HelloWorldComponent {
  greeting: string = 'Hello T30';
  isVisible: boolean = true;

  sayHello() {
    alert('dizendo olá')
  }

  sayGoodbye() {
    alert('dizendo tchau')
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}