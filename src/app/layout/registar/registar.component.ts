import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { InicioComponent } from "../../pagina/inicio/inicio.component";

@Component({
  selector: 'app-registar',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    InicioComponent
],
  templateUrl: './registar.component.html',
  styleUrl: './registar.component.css'
})
export class RegistarComponent {

}
