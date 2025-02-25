import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioService } from '../../services/usuario.service';
import * as UsuariosActions from '../actions/usuarios.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

export const cargarUsuarios = createEffect(
  (actions$ = inject(Actions), usuariosService = inject(UsuarioService)) => {
    return actions$.pipe(
      ofType(UsuariosActions.cargarUsuarios),
      mergeMap(() =>
        usuariosService.getUsers().pipe(
          map((users) =>
            UsuariosActions.cargarUsuariosSuccess({ usuarios: users })
          ),
          catchError((err) =>
            of(UsuariosActions.cargarUsuariosError({ payload: err }))
          )
        )
      )
    );
  },
  { functional: true }
);
