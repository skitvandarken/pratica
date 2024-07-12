import { Routes } from '@angular/router';
import { url } from 'inspector';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { RegistarComponent } from './layout/registar/registar.component';
import { IndexComponent } from './pagina/index/index.component';

export const routes: Routes = [
    {path:'', component:InicioComponent},
    {path:'registar', component:RegistarComponent},
    {path:'index', component:IndexComponent}

];
