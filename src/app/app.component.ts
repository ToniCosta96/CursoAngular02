import { Component } from '@angular/core';
import { Vivienda } from './clases/vivienda';
import { ViviendasComponent } from './viviendas/Viviendas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'gestionViviendas';

  titulo:string="Todas las viviendas";
  filtro_alquiler:boolean=true;
  filtro_venta:boolean=true;

  viviendas:Vivienda[] = new ViviendasComponent().viviendas;

  cambiarTitulo():void{
    if(this.filtro_alquiler){
      if(this.filtro_venta){
        this.titulo="Todas las viviendas";
      }else{
        this.titulo="Viviendas en alquiler";
      }
    }else{
      if(this.filtro_venta){
        this.titulo="Viviendas a la venta";
      }else{
        this.titulo="No ha seleccionado ningún filtro";
      }
    }
  }
}
