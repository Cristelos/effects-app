import { createReducer, on } from '@ngrx/store';
import {
  cargarUsuario,
  cargarUsuarioError,
  cargarUsuarioSuccess,
} from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
  usuarioId: string ;
  user: Usuario | null;
  loader: boolean;
  loading: boolean;
  error: any;
}

export const usuarioInitialState: UsuarioState = {
  usuarioId: '',
  user: null,
  loader: false,
  loading: false,
  error: null,
};

export const usuarioReducer = createReducer(
  usuarioInitialState,
 
  on(cargarUsuario, (state, { usuarioId } ) => ({
    ...state,
    loading: true,
    usuarioId
  })),
 
  on(cargarUsuarioSuccess, (state, {usuario}) => ({
    ...state,
    loading_: false,
    loaded: false,
    user: { ...usuario },
  })),
 
  on(cargarUsuarioError, (state, {payload}) => ({
    ...state,
    loading_: false,
    loaded: true,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  }))
);
