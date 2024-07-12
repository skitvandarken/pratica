import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { LoginComponent } from '../../layout/login/login.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    NavbarComponent,
    LoginComponent,
    FooterComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
