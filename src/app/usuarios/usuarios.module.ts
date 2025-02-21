import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { UsuarioComponent } from './usuario/usuario.component';



@NgModule({
  declarations: [
    ListasComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListasComponent,
    UsuarioComponent
  ]
})
export class UsuariosModule { }
