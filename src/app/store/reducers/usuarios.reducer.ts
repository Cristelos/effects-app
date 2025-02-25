import { createReducer, on } from '@ngrx/store';
import {
  cargarUsuarios,
  cargarUsuariosError,
  cargarUsuariosSuccess,
} from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuariosState {
  users: Usuario[];
  loader: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: UsuariosState = {
  users: [],
  loader: false,
  loading: false,
  error: null,
};

export const usuariosReducer = createReducer(
  usuariosInitialState,
  on(cargarUsuarios, (state) => ({ ...state, loading: true })),

  on(cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    loading: true,
    loader: true,
    users: [...usuarios],
  })),

  on(cargarUsuariosError, (state, { payload }) => ({
    ...state,
    loading: false,
    loader: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);
