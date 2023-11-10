import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'hello-world',
  standalone: true,
  templateUrl: './hello-world.component.html',
  imports: [CommonModule],
})
export class HelloWorldComponent implements OnInit {
  greeting: string = 'Hello T30';
  isVisible: boolean = true;
  programingLanguages: string[] = ['JavaScript', 'TypeScript', 'Java', 'C#', 'Python', 'PHP'];
  peoples = [{name: 'João', age: 18}, {name: 'Maria', age: 20}, {name: 'José', age: 30}]
  dogsImages: string | null = null;
  isLoading: boolean = false;

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if(response.status !== 200) return;
    const data = await response.json();
    this.dogsImages = data.message;
    this.isLoading = false;
  } // seria o equivalente ao componentDidMount em React

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