import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  standalone: true,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
  imports: [CommonModule],
})
export class RegisterPageComponent {
  isShow = false;
}
