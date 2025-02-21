import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-listas',
  standalone: false,
  templateUrl: './listas.component.html',
  styles: ``,
})
export class ListasComponent implements OnInit, OnDestroy {
  usuarios: Usuario[]= [];


  constructor(public usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe((data) => {
      console.log(data);
      this.usuarios= data;
    });
  }

  ngOnDestroy(): void {}
}
