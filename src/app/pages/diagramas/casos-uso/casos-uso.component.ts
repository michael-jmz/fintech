import { Component } from '@angular/core';


@Component({
  selector: 'app-casos-uso',
  templateUrl: './casos-uso.component.html',
  styleUrls: ['./casos-uso.component.css']
})
export class CasosUsoComponent {
  contenido: string = '';
  selectedOption: string = ''; // Define la variable selectedOption

  mostrarContenido(opcion: string) {
    this.selectedOption = opcion; // Actualiza selectedOption con la opción seleccionada

    switch (opcion) {
      case 'cuAperturaCuenta':
        this.contenido =``;
        break;
      case 'cuAperturaCuentaOnline':
        this.contenido ='<img src="assets/diagramas/casos-uso/especificacion.png">';
        break;
      case 'especificacion':
        this.contenido = '';
        break;
      default:
        this.contenido = '';
    }
  }
}
