import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  Name: string = "This is Trilok here";
  isIndian: boolean = true;
  Int: number = 8058436268;
  DOB: Date = new Date();
  myClass: string = "bg-danger";
  stateName: string = "Rajasthan";

  showAlert(Message: string) {
    alert(Message)
  }
  FirstName = signal("This is the Signal");
  changeName() {
    this.Name = "This is Trilok Chand Swami";
  }

}
