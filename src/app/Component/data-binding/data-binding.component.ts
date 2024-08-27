import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  Name: string = "This is Trilok here";
  isIndian: boolean = true;
  Int: number = 8058436268;
  DOB: Date = new Date();
  myClass:string = "bg-danger";


  showAlert(Message:string){
    alert(Message)
  }
}
