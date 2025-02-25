import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuario } from '../../store/actions';
import { Usuario } from '../../models/usuario.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.component.html',
  styles: ``,
})
export class UsuarioComponent implements OnInit, OnDestroy {
  userSub!: Subscription;

  usuario!: Usuario;
  loading: boolean = false;
  error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.userSub = this.store
      .select('usuario')
      .subscribe(({ user, loading, error }) => {
        this.usuario = user!;
        this.loading = loading;
        this.error = error;
      });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(cargarUsuario({ usuarioId: id }));
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
