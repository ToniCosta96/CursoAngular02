import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ViviendaComponent } from './vivienda/vivienda.component';
import { ViviendasComponent } from './viviendas/viviendas.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ViviendaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
