import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listas',
  standalone: false,
  templateUrl: './listas.component.html',
  styles: ``,
})
export class ListasComponent implements OnInit, OnDestroy {
  usersSub!: Subscription;

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.usersSub = this.store
      .select('usuarios')
      .subscribe(({ users, loading, error }) => {
        this.usuarios = users;
        this.loading = loading;
        this.error = error;
      });
    this.store.dispatch(cargarUsuarios());
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }
}
