import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay,} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducers } from './store/app.reducers';
import { environment } from '../environments/environment';

import { EffectsModule } from '@ngrx/effects';
import { cargarUsuarios } from './store/effects/usuarios.effects';
import { cargarUsuario } from './store/effects/usuario.effects';

// Módulos
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot({ cargarUsuarios, cargarUsuario }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],

  providers: [provideClientHydration(withEventReplay()),],
  bootstrap: [AppComponent],
})
export class AppModule {}
