import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioService } from '../../services/usuario.service';
import * as usuarioActions from '../actions/usuario.actions';
import { catchError,  map, mergeMap, of } from 'rxjs';

export const cargarUsuario = createEffect(
  (actions$ = inject(Actions), usuarioService = inject(UsuarioService)) => {
    return actions$.pipe(
      ofType(usuarioActions.cargarUsuario),
      mergeMap((action) =>
        usuarioService.getUserById(action.usuarioId).pipe(
          map((user) => usuarioActions.cargarUsuarioSuccess({ usuario: user })),
          catchError((err) => {
            return of(usuarioActions.cargarUsuarioError({ payload: err }));
          })
        )
      )
    );
  },
  { functional: true }
);


